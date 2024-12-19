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

export async function getUser() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return { error: "User cookie not found" };
  }

  try {
    const userData = JSON.parse(userCookie.value);
    return { data: userData };
  } catch (error) {
    console.error("Error parsing user cookie:", error);
    return { error: "Invalid user cookie format" };
  }
}

export async function loginAction(data: LoginProps) {
  try {
    const { password } = data;
    const email = await getUserEmail();
    const newEmail = email.email;

    if (!email) {
      return { error: "Please start the SignUp process again", status: 409 };
    }

    const user = await db.user.findUnique({
      where: { email: newEmail },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return { error: "Invalid password", status: 500 };
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
  } catch (error) {
    console.error("Login failed:", error);
    return { error: "An error occurred during login. Please try again." };
  }
}
