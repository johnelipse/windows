"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MoreHorizontal, Plus, Sun } from "lucide-react";
import Image from "next/image";

export default function WidgetDashboard() {
  return (
    <Popover>
      <PopoverTrigger className="hidden  md:block" asChild>
        <button className="rounded-none p-2 hover:bg-white/10">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/10388/10388151.png"
            alt="Start"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="mb-4 ml-10 w-[640px] border-0 bg-[#1F1F1F]/95 p-0 shadow-2xl"
        align="center"
      >
        <div className="grid gap-4 p-2">
          {/* Powered By Card */}
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Powered by</CardTitle>
              <Button variant="ghost" size="icon" className="text-white">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="text-cyan-400">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
                    alt="Start"
                    width={24}
                    height={24}
                    className="opacity-90 hover:opacity-100 animate-spin"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">🔥</span>
                    <span>Powered by Next.js and React</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Handcrafted by me © 2021 ua
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weather Card */}
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weather ⛅</CardTitle>
              <Button variant="ghost" size="icon" className="text-white">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Sun className="h-8 w-8 text-yellow-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-sm">🏢 Toronto, Ontario</span>
                    <span className="text-2xl font-bold">72°F</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm">Strong UV Today</div>
                  <div className="text-sm text-slate-400">0%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* To Do Card */}
          <Card className="bg-slate-900 text-white border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">To Do ✓</CardTitle>
              <Button variant="ghost" size="icon" className="text-white">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">📝</span>
                  <span>My Day</span>
                </div>
                <Button variant="ghost" size="icon" className="text-cyan-400">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </PopoverContent>
    </Popover>
  );
}
