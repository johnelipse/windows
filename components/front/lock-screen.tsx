"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WeatherCard from "./home-card";
import LoginScreen from "./login-screen";

export default function LockScreen() {
  const [time, setTime] = useState(new Date());
  const [openLogin, setOpenLogin] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  function handleOpenLogin() {
    setOpenLogin(true);
  }
  if (openLogin) {
    return <LoginScreen />;
  }

  return (
    <div
      onClick={handleOpenLogin}
      // role="button"
      className="relative h-screen w-full overflow-hidden"
    >
      <Image
        src="https://hrty.vercel.app/NPih2Y"
        alt="Windows 11 Wallpaper"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col bg-black/25 backdrop-blur-sm  text-center  text-white">
        <div className="text-6xl mt-8 font-light">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        <div className="mt-2 text-xl font-light">
          {time.toLocaleDateString([], {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
      <div className="absolute  bottom-8 left-8 right-8 items-center  hidden md:grid grid-cols-4 gap-8 text-white">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
      <div className="absolute bottom-28 md:hidden left-4 right-4 items-center grid grid-cols-2 gap-8 text-white">
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
}
