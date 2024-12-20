/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  Menu,
  Mic,
  Plus,
  RefreshCw,
  Search,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";

export default function MicrosoftEdgePopover() {
  return (
    <Popover>
      <PopoverTrigger className="hidden  md:block" asChild>
        <button className="rounded-none p-2 hover:bg-white/10">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/5968/5968890.png"
            alt="edge"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="mb-8 ml-80  w-[790px] border-0 bg-white p-0 shadow-2xl"
        align="center"
      >
        <div className="bg-[#060042ff] flex justify-end w-full px-2 py-1">
          <button className="text-white text-end">
            <X className="w-4 h-4" />
          </button>
        </div>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            {/* Browser Chrome */}
            <div className="bg-gray-100 p-2 rounded-t-lg">
              {/* Tabs */}
              <div className="flex items-center mb-2">
                <div className="flex-1 flex">
                  <div className="bg-white rounded-t-lg px-4 py-2 text-sm flex items-center gap-2 border-b border-transparent">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5968/5968890.png"
                      alt="favicon"
                      className="w-4 h-4"
                    />
                    <span className="max-w-[100px] truncate">New Tab</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 ml-2">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {/* Address Bar */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <div className="flex-1 flex items-center bg-white rounded-full border px-3 py-1">
                  <Lock className="h-4 w-4 text-green-600 mr-2" />
                  <Input
                    className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Search or enter web address"
                  />
                  <div className="flex items-center gap-2 ml-2">
                    <Star className="h-4 w-4 text-gray-400" />
                    <Mic className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Browser Content */}
            <div className="h-[400px] bg-white p-4 rounded-b-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Welcome to Microsoft Edge
              </h2>
              <p className="text-gray-600">
                This is a simulated browser window. In a real application, this
                area would display web content.
              </p>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
