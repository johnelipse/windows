"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

// interface PinnedApp {
//   name: string;
//   icon: string;
// }

interface RecommendedItem {
  icon: string;
  title: string;
  subtitle: string;
  type: "link" | "app" | "file" | "folder";
}

// const pinnedApps: PinnedApp[] = [
//   {
//     name: "Github",
//     icon: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
//   },
//   { name: "VSCode", icon: "/vscode.svg" },
//   { name: "Figma", icon: "/image.png" },
//   {
//     name: "Photoshop",
//     icon: "https://cdn-icons-png.flaticon.com/128/5968/5968520.png",
//   },
//   {
//     name: "Firefox",
//     icon: "https://cdn-icons-png.flaticon.com/128/5968/5968827.png",
//   },
//   {
//     name: "Chrome",
//     icon: "https://cdn-icons-png.flaticon.com/128/888/888846.png",
//   },
//   {
//     name: "Edge",
//     icon: "https://cdn-icons-png.flaticon.com/128/5968/5968890.png",
//   },
//   {
//     name: "Zoom",
//     icon: "https://cdn-icons-png.flaticon.com/128/4423/4423709.png",
//   },
// ];

const recommendedItems: RecommendedItem[] = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    title: "LinkedIn",
    subtitle: "Connect on LinkedIn",
    type: "link",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968830.png",
    title: "Twitter",
    subtitle: "Connect on Twitter",
    type: "link",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3767/3767094.png",
    title: "Recent Projects",
    subtitle: "August 25",
    type: "folder",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/7544/7544562.png",
    title: "Terminal",
    subtitle: "Recently added",
    type: "app",
  },
];

export default function SearchPopup() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Popover>
      <PopoverTrigger className="hidden  md:block" asChild>
        <button className="rounded-none  p-2 hover:bg-white/10">
          <Image
            src="/search.svg"
            alt="Start"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="mb-4 ml-10 w-[640px] border-0 bg-[#1F1F1F]/95 p-0 shadow-2xl"
        side="bottom"
        sideOffset={0}
        align="end"
      >
        <div className="space-y-3 py-3 px-4">
          {/* Search Bar */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Type here to search"
              className="w-full bg-[#2D2D2D] pl-10 text-white placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>

          {/* Pinned Section */}
          {/* <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium text-white">Pinned</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                All Apps &gt;
              </button>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {pinnedApps.map((app, index) => (
                <button
                  key={index}
                  className="group flex flex-col items-center space-y-1"
                >
                  <div className="rounded-md p-2 transition-colors group-hover:bg-white/10">
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-white">
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          </div> */}

          {/* Recommended Section */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium text-white">Recommended</h2>
              <button className="text-sm text-gray-400 hover:text-white">
                More &gt;
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {recommendedItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 rounded-md p-2 transition-colors hover:bg-white/10"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-sm text-white">{item.title}</span>
                    <span className="text-xs text-gray-400">
                      {item.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center justify-between border-t border-gray-700 pt-2">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hrty.vercel.app/o2aFjh"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm text-white">Vova Ushenko</span>
            </div>
            <button className="rounded-full p-2 hover:bg-white/10">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                />
              </svg>
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
