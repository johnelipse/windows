"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Monitor, Wifi, Volume2, Battery } from "lucide-react";
import AppLauncher from "./pop-up-card";
import SearchPopup from "./search-pop";
import GooglePopover from "./google-popup";
import WidgetDashboard from "./widget-popup";
import MicrosoftEdgePopover from "./edge-popup";
import Link from "next/link";
import QuickSettings from "./more-items";

const desktopIcons = [
  {
    name: "Figma",
    icon: "/image.png",
  },
  {
    name: "Projects",
    icon: "/user-folder.png",
  },
  {
    name: "VSCode",
    icon: "/vscode.svg",
  },
  {
    name: "Trash",
    icon: "/recycle-bin-empty.png",
  },
];

const taskbarIcons = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
    label: "GitHub Desktop",
    link: "https://github.com/",
  },
];

export default function Desktop() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0d1117]">
      {/* Wallpaper */}
      <Image
        src="/one.jpg"
        alt="Windows 11 Wallpaper"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Desktop Icons */}
      <div
        className="relative z-10 grid grid-cols-1 gap-y-6 p-4"
        style={{ width: "fit-content" }}
      >
        {desktopIcons.map((icon, index) => (
          <button
            key={index}
            className="group flex w-[76px] flex-col items-center gap-1"
          >
            <div className="relative">
              <Image
                src={icon.icon}
                alt={icon.name}
                width={44}
                height={44}
                className="drop-shadow-md"
              />
              {/* {icon.name && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                  {icon.name}
                </span>
              )} */}
            </div>
            <span className="max-w-[76px] truncate text-center text-sm text-white/90 shadow-sm group-hover:text-white">
              {icon.name}
            </span>
          </button>
        ))}
      </div>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-12 items-center justify-between bg-[#0a0a0a]/80 px-2 backdrop-blur-md">
        <div className=" flex items-center gap-3">
          <AppLauncher />
          <SearchPopup />
          <WidgetDashboard />
          <GooglePopover />
          <MicrosoftEdgePopover />
          {taskbarIcons.map((icon, index) => (
            <button
              key={index}
              className="rounded-sm p-2 hover:bg-white/10"
              title={icon.label}
            >
              <Link href={icon.link} target="_blank">
                <Image
                  src={icon.icon as string}
                  alt={icon.label}
                  width={44}
                  height={44}
                  className="drop-shadow-md w-6 h-6"
                />
              </Link>
            </button>
          ))}
          <button className="rounded-sm p-2 hover:bg-white/10">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/869/869869.png"
              alt="Start"
              width={24}
              height={24}
              className="opacity-90 hover:opacity-100"
            />
          </button>
        </div>

        {/* System Tray */}
        <div className="flex items-center gap-1">
          <div>
            {/* <ChevronUp className="h-4 w-4 text-white opacity-90" /> */}
            <QuickSettings />
          </div>
          <button className="md:flex hidden items-center gap-2 rounded-sm px-2 py-1 hover:bg-white/10">
            <Monitor className="h-4 w-4 text-white opacity-90" />
            <Wifi className="h-4 w-4 text-white opacity-90" />
            <Volume2 className="h-4 w-4 text-white opacity-90" />
            <Battery className="h-4 w-4 text-white opacity-90" />
          </button>
          <button className="flex min-w-[100px] items-center justify-end gap-1 rounded-sm px-3 py-1 text-sm text-white hover:bg-white/10">
            {currentTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            <br />
            {currentTime.toLocaleDateString([], {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
            })}
          </button>
        </div>
      </div>
    </div>
  );
}
