"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import {
  Wifi,
  Bluetooth,
  Plane,
  Battery,
  Moon,
  Accessibility,
  MapPin,
  Shield,
  Share2,
  Volume2,
  Sun,
  Settings,
  ChevronUp,
} from "lucide-react";

export default function QuickSettings() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <button className="rounded-sm p-2 hover:bg-white/10">
            <ChevronUp className="h-4 w-4 text-white opacity-90" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 overflow-hidden" align="center">
          <Card className="border-0 bg-slate-900 text-white">
            <CardHeader className="border-b border-slate-800 px-4 py-3">
              <p className="text-sm">No new notifications</p>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Wifi className="h-5 w-5" />
                  <span className="text-xs">Wifi</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Bluetooth className="h-5 w-5" />
                  <span className="text-xs">Bluetooth</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Plane className="h-5 w-5" />
                  <span className="text-xs">Airplane Mode</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Battery className="h-5 w-5" />
                  <span className="text-xs">Battery Saver</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Moon className="h-5 w-5" />
                  <span className="text-xs">Night Light</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Accessibility className="h-5 w-5" />
                  <span className="text-xs">Accessibility</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs">Location</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Shield className="h-5 w-5" />
                  <span className="text-xs">Security</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex h-20 w-full flex-col items-center justify-center gap-2 rounded-xl hover:bg-slate-800 hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                  <span className="text-xs">Sharing</span>
                </Button>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-4 w-4" />
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="h-4 w-4" />
                  <Slider
                    defaultValue={[70]}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <Battery className="h-4 w-4" />
                  <span className="text-sm">77%</span>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
