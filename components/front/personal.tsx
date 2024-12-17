// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   Search,
//   ChevronLeft,
//   Minus,
//   Square,
//   X,
//   ChevronRight,
// } from "lucide-react";
// import {
//   Home,
//   Monitor,
//   Bluetooth,
//   Wifi,
//   Palette,
//   AppWindow,
//   User2,
//   Clock,
//   Gamepad2,
//   Accessibility,
//   Shield,
//   Download,
//   Glasses,
// } from "lucide-react";

// export default function PersonalizationSettings() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const sidebarItems = [
//     { icon: Home, label: "Home" },
//     { icon: Monitor, label: "System" },
//     { icon: Bluetooth, label: "Bluetooth & devices" },
//     { icon: Wifi, label: "Network & internet" },
//     { icon: Palette, label: "Personalization", active: true },
//     { icon: AppWindow, label: "Apps" },
//     { icon: User2, label: "Accounts" },
//     { icon: Clock, label: "Time & language" },
//     { icon: Gamepad2, label: "Gaming" },
//     { icon: Accessibility, label: "Accessibility" },
//     { icon: Shield, label: "Privacy & security" },
//     { icon: Download, label: "Windows Update" },
//     { icon: Glasses, label: "Mixed reality" },
//   ];

//   const personalizationOptions = [
//     {
//       icon: "🖼️",
//       title: "Background",
//       description: "Background image, color, slideshow",
//     },
//     {
//       icon: "🎨",
//       title: "Colors",
//       description: "Accent color, transparency effects, color theme",
//     },
//     {
//       icon: "🎭",
//       title: "Themes",
//       description: "Install, create, manage",
//     },
//     {
//       icon: "✨",
//       title: "Dynamic Lighting",
//       description: "Connected devices, effects, app settings",
//     },
//     {
//       icon: "🔒",
//       title: "Lock screen",
//       description: "Lock screen images, apps, animations",
//     },
//     {
//       icon: "⌨️",
//       title: "Text input",
//       description:
//         "Touch keyboard, voice typing, emoji and more, input method editor",
//     },
//     {
//       icon: "🚀",
//       title: "Start",
//       description: "Recent apps and items, folders",
//     },
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#202020] text-white">
//       {/* Left Sidebar */}
//       <div className="w-[300px] flex-shrink-0 border-r border-gray-800">
//         {/* User Profile */}
//         <div className="flex items-center space-x-3 p-4">
//           <Image
//             src="https://hrty.vercel.app/CLkBZw"
//             alt="User Avatar"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           <div>
//             <div className="font-medium">cus tor</div>
//             <div className="text-sm text-gray-400">custor00@gmail.com</div>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mx-4 mb-4">
//           <input
//             type="text"
//             placeholder="Find a setting"
//             className="w-full rounded-sm bg-[#2D2D2D] px-8 py-2 text-sm focus:outline-none"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//         </div>

//         {/* Navigation Items */}
//         <nav className="space-y-1 px-2">
//           {sidebarItems.map((item, index) => (
//             <button
//               key={index}
//               className={`flex w-full items-center space-x-3 rounded-sm px-2 py-2.5 text-sm ${
//                 item.active ? "bg-[#3B3B3B]" : "hover:bg-[#2D2D2D]"
//               }`}
//             >
//               <item.icon className="h-5 w-5" />
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4">
//           <div className="flex items-center space-x-4">
//             <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <h1 className="text-2xl font-light">Personalization</h1>
//           </div>
//           <div className="flex space-x-2">
//             <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
//               <Minus className="h-5 w-5" />
//             </button>
//             <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
//               <Square className="h-4 w-4" />
//             </button>
//             <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
//               <X className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         {/* Theme Preview */}
//         <div className="p-4">
//           <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
//             <Image
//               src="https://hrty.vercel.app/QjWQT0"
//               alt="Theme Preview"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>

//           {/* Theme Selection */}
//           <div className="mb-8">
//             <h2 className="mb-4 text-lg">Select a theme to apply</h2>
//             <div className="grid grid-cols-3 gap-4">
//               {[...Array(6)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="relative aspect-video overflow-hidden rounded-lg bg-[#3B3B3B]"
//                 >
//                   <Image
//                     src="/placeholder.svg?height=200&width=300"
//                     alt={`Theme ${i + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Personalization Options */}
//           <div className="space-y-1">
//             {personalizationOptions.map((option, index) => (
//               <button
//                 key={index}
//                 className="flex w-full items-center justify-between rounded-sm p-3 hover:bg-[#3B3B3B]"
//               >
//                 <div className="flex items-center space-x-3">
//                   <span className="text-xl">{option.icon}</span>
//                   <div className="text-left">
//                     <div className="font-medium">{option.title}</div>
//                     <div className="text-sm text-gray-400">
//                       {option.description}
//                     </div>
//                   </div>
//                 </div>
//                 <ChevronRight className="h-5 w-5 text-gray-400" />
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronLeft,
  Minus,
  Square,
  X,
  ChevronRight,
} from "lucide-react";
import {
  Home,
  Monitor,
  Bluetooth,
  Wifi,
  Palette,
  AppWindow,
  User2,
  Clock,
  Gamepad2,
  Accessibility,
  Shield,
  Download,
  Glasses,
} from "lucide-react";

export default function PersonalizationSettings() {
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: Monitor, label: "System" },
    { icon: Bluetooth, label: "Bluetooth & devices" },
    { icon: Wifi, label: "Network & internet" },
    { icon: Palette, label: "Personalization", active: true },
    { icon: AppWindow, label: "Apps" },
    { icon: User2, label: "Accounts" },
    { icon: Clock, label: "Time & language" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Accessibility, label: "Accessibility" },
    { icon: Shield, label: "Privacy & security" },
    { icon: Download, label: "Windows Update" },
    { icon: Glasses, label: "Mixed reality" },
  ];

  const personalizationOptions = [
    {
      icon: "🖼️",
      title: "Background",
      description: "Background image, color, slideshow",
    },
    {
      icon: "🎨",
      title: "Colors",
      description: "Accent color, transparency effects, color theme",
    },
    {
      icon: "🎭",
      title: "Themes",
      description: "Install, create, manage",
    },
    {
      icon: "✨",
      title: "Dynamic Lighting",
      description: "Connected devices, effects, app settings",
    },
    {
      icon: "🔒",
      title: "Lock screen",
      description: "Lock screen images, apps, animations",
    },
    {
      icon: "⌨️",
      title: "Text input",
      description:
        "Touch keyboard, voice typing, emoji and more, input method editor",
    },
    {
      icon: "🚀",
      title: "Start",
      description: "Recent apps and items, folders",
    },
  ];

  return (
    <div className="flex h-screen bg-[#202020] text-white ">
      {/* Left Sidebar */}
      <div className="w-[300px] flex-shrink-0 border-r border-gray-800 fixed h-full  ">
        {/* User Profile */}
        <div className="flex items-center space-x-3 p-4">
          <Image
            src="https://hrty.vercel.app/o2aFjh"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">cus tor</div>
            <div className="text-sm text-gray-400">custor00@gmail.com</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mx-4 mb-4">
          <input
            type="text"
            placeholder="Find a setting"
            className="w-full rounded-sm bg-[#2D2D2D] px-8 py-2 text-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`flex w-full items-center space-x-3 rounded-sm px-2 py-2.5 text-sm ${
                item.active ? "bg-[#3B3B3B]" : "hover:bg-[#2D2D2D]"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[300px] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-light">Personalization</h1>
          </div>
          <div className="flex space-x-2">
            <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
              <Minus className="h-5 w-5" />
            </button>
            <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
              <Square className="h-4 w-4" />
            </button>
            <button className="rounded-sm p-1 hover:bg-[#3B3B3B]">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Theme Preview */}
        <div className="p-4">
          <div className="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
            <Image
              src="https://hrty.vercel.app/xES8xf"
              alt="Theme Preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Theme Selection */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg">Select a theme to apply</h2>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-video overflow-hidden rounded-lg bg-[#3B3B3B]"
                >
                  <Image
                    src="https://hrty.vercel.app/u8Jk3p"
                    alt={`Theme ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Personalization Options */}
          <div className="space-y-1">
            {personalizationOptions.map((option, index) => (
              <button
                key={index}
                className="flex w-full items-center justify-between rounded-sm p-3 hover:bg-[#3B3B3B]"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{option.icon}</span>
                  <div className="text-left">
                    <div className="font-medium">{option.title}</div>
                    <div className="text-sm text-gray-400">
                      {option.description}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
