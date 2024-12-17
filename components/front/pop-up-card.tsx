"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const pinnedApps = [
  { name: "Github", icon: "/icons/github.png" },
  { name: "VSCode", icon: "/icons/vscode.png" },
  { name: "WebStorm", icon: "/icons/webstorm.png" },
  { name: "PyCharm", icon: "/icons/pycharm.png" },
  { name: "Toolbox", icon: "/icons/toolbox.png" },
  { name: "Sublime", icon: "/icons/sublime.png" },
  { name: "Postman", icon: "/icons/postman.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Compass", icon: "/icons/compass.png" },
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "Photoshop", icon: "/icons/photoshop.png" },
  { name: "Squoosh", icon: "/icons/squoosh.png" },
  { name: "Firefox", icon: "/icons/firefox.png" },
  { name: "Chrome", icon: "/icons/chrome.png" },
  { name: "Edge", icon: "/icons/edge.png" },
  { name: "Zoom", icon: "/icons/zoom.png" },
  { name: "Skype", icon: "/icons/skype.png" },
];

const recommendedItems = [
  {
    icon: "/icons/linkedin.png",
    title: "LinkedIn",
    subtitle: "Connect on LinkedIn",
    type: "link",
  },
  {
    icon: "/icons/react.png",
    title: "My Portfolio",
    subtitle: "August 26",
    type: "app",
  },
  {
    icon: "/icons/twitter.png",
    title: "Twitter",
    subtitle: "Connect on Twitter",
    type: "link",
  },
  {
    icon: "/icons/document.png",
    title: "CurrentResume",
    subtitle: "Sunday at 10:14 AM",
    type: "file",
  },
  {
    icon: "/icons/folder.png",
    title: "Recent Projects",
    subtitle: "August 25",
    type: "folder",
  },
  {
    icon: "/icons/terminal.png",
    title: "Terminal",
    subtitle: "Recently added",
    type: "app",
  },
];

export default function AppLauncher() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-screen w-screen bg-black/40 p-4 backdrop-blur-xl">
      <div className="mx-auto max-w-lg rounded-lg bg-[#1F1F1F] p-4 shadow-2xl">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Type here to search"
            className="w-full rounded-md bg-[#2D2D2D] px-10 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        {/* Pinned Section */}
        <div className="mb-6">
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
        </div>

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
                  <span className="text-xs text-gray-400">{item.subtitle}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* User Profile */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-700 pt-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/icons/avatar.png"
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
    </div>
  );
}
