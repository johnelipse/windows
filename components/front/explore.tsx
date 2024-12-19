/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  RefreshCcw,
  ChevronDown,
  Search,
  X,
  Minus,
  Square,
  Folder,
  FileText,
  Music,
  Image,
  Video,
  HardDrive,
  Network,
  Download,
  Monitor,
} from "lucide-react";

interface FileItem {
  name: string;
  dateModified: string;
  type: string;
  size?: string;
  icon: "folder" | "file" | "archive";
}

const files: FileItem[] = [
  {
    name: "Games",
    dateModified: "6/15/2024 12:34 PM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "inetpub",
    dateModified: "6/15/2024 7:58 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Intel",
    dateModified: "5/28/2024 10:23 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "OneDriveTemp",
    dateModified: "5/28/2024 10:08 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "PerfLogs",
    dateModified: "5/30/2021 1:32 PM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Program Files",
    dateModified: "12/4/2024 8:07 PM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Program Files (x86)",
    dateModified: "10/25/2024 8:58 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "ProgramData",
    dateModified: "12/4/2024 8:14 PM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Python312",
    dateModified: "5/30/2024 8:55 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Users",
    dateModified: "7/5/2024 9:27 AM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "Windows",
    dateModified: "11/9/2024 6:17 PM",
    type: "File folder",
    icon: "folder",
  },
  {
    name: "01",
    dateModified: "8/17/2021 4:54 PM",
    type: "Windows Command Script",
    size: "1 KB",
    icon: "file",
  },
  {
    name: "AiOLog",
    dateModified: "7/11/2024 1:43 PM",
    type: "Text Document",
    size: "1 KB",
    icon: "file",
  },
  {
    name: "DumpStack",
    dateModified: "9/25/2024 9:55 AM",
    type: "Text Document",
    size: "12 KB",
    icon: "file",
  },
  {
    name: "microsoft-windows-netfx3-ondemand-package.cab",
    dateModified: "6/24/2021 3:17 AM",
    type: "WinRAR archive",
    size: "70,646 KB",
    icon: "archive",
  },
];

export default function FileExplorer() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen flex-col bg-white text-black">
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b px-2 py-1">
        <div className="flex items-center gap-2">
          <Folder className="h-4 w-4" />
          <span>Local Disk (C:)</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-200">
            <Minus className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-200">
            <Square className="h-4 w-4" />
          </button>
          <button className="p-2 hover:bg-gray-200">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="flex border-b px-2 py-1">
        <button className="px-4 py-1 hover:bg-gray-100">File</button>
        <button className="px-4 py-1 hover:bg-gray-100">Home</button>
        <button className="px-4 py-1 hover:bg-gray-100">Share</button>
        <button className="px-4 py-1 hover:bg-gray-100">View</button>
        <button className="px-4 py-1 hover:bg-gray-100">Drive Tools</button>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center gap-2 border-b px-2 py-1">
        <button className="rounded-sm p-1 hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="rounded-sm p-1 hover:bg-gray-100">
          <ChevronRight className="h-4 w-4" />
        </button>
        <button className="rounded-sm p-1 hover:bg-gray-100">
          <ChevronUp className="h-4 w-4" />
        </button>
        <div className="flex flex-1 items-center gap-2 rounded-md border px-2 py-1">
          <Monitor className="h-4 w-4" />
          <span>This PC</span>
          <ChevronRight className="h-4 w-4" />
          <span>Local Disk (C:)</span>
        </div>
        <button className="rounded-sm p-1 hover:bg-gray-100">
          <RefreshCcw className="h-4 w-4" />
        </button>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search Local Disk (C:)"
            className="w-64 rounded-md border px-8 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 border-r">
          <div className="space-y-0.5 p-2">
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Download className="h-4 w-4" />
              <span>Downloads</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Image className="h-4 w-4" />
              <span>Pictures</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Music className="h-4 w-4" />
              <span>Music</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Video className="h-4 w-4" />
              <span>Videos</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Monitor className="h-4 w-4" />
              <span>This PC</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm bg-gray-200 px-2 py-1">
              <HardDrive className="h-4 w-4" />
              <span>Local Disk (C:)</span>
            </button>
            <button className="flex w-full items-center gap-2 rounded-sm px-2 py-1 hover:bg-gray-100">
              <Network className="h-4 w-4" />
              <span>Network</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Date modified</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Size</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="flex items-center gap-2 px-4 py-1">
                    {file.icon === "folder" ? (
                      <Folder className="h-4 w-4 text-yellow-500" />
                    ) : file.icon === "file" ? (
                      <FileText className="h-4 w-4 text-blue-500" />
                    ) : (
                      <FileText className="h-4 w-4 text-purple-500" />
                    )}
                    {file.name}
                  </td>
                  <td className="px-4 py-1">{file.dateModified}</td>
                  <td className="px-4 py-1">{file.type}</td>
                  <td className="px-4 py-1">{file.size || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between border-t px-2 py-1 text-sm">
        <span>17 items</span>
        <div className="flex items-center gap-2">
          <button className="rounded-sm p-1 hover:bg-gray-100">
            <ChevronUp className="h-4 w-4" />
          </button>
          <button className="rounded-sm p-1 hover:bg-gray-100">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
