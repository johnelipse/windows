"use server";

import { LoginProps } from "@/components/front/login-screen";
import { FormDataProps } from "@/components/front/signup-screen";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function createUser(formData: FormDataProps) {
  try {
    const { email } = formData;

    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        formData: null,
        error: true,
        status: 409,
      };
    }
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const user = await db.user.create({
      data: {
        fullName: formData.fullName,
        email: formData.email,
        password: hashedPassword,
      },
    });

    // Set cookie with user information
    (
      await // Set cookie with user information
      cookies()
    ).set(
      "user",
      JSON.stringify({
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      }
    );
    return {
      data: user,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.error("Failed to create user:", error);
    return { error: "Failed to create user. Please try again." };
  }
}

export async function getUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return { error: "User cookie not found" };
  }

  try {
    const userData = JSON.parse(userCookie.value);
    return { data: userData.fullName };
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    return { error: "Invalid user cookie format" };
  }
}

export async function getUserEmail() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return { error: "User cookie not found" };
  }

  try {
    const userData = JSON.parse(userCookie.value);
    return { email: userData.email };
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    return { error: "Invalid user cookie format" };
  }
}

export async function loginAuth(data: LoginProps) {
  const { password } = data;
  const emailResult = await getUserEmail();

  if ("error" in emailResult) {
    return { error: emailResult.error, status: 400 };
  }

  const email = emailResult.email;

  if (!email) {
    return { error: "Please start the login process again", status: 400 };
  }

  if (!password) {
    return { error: "Password is required", status: 400 };
  }

  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "User not found", status: 404 };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid password", status: 401 };
    }

    // Set user session cookie
    (
      await // Set user session cookie
      cookies()
    ).set(
      "user",
      JSON.stringify({
        id: user.id,
        fullName: user.fullName,
        email: user.email,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      }
    );

    return { success: true, status: 200 };
  } catch (error) {
    console.error("Login failed:", error);
    return {
      error: "An error occurred during login. Please try again.",
      status: 500,
    };
  }
}
