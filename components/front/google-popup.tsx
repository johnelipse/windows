"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mic, Camera, Menu, X } from "lucide-react";
import Image from "next/image";

export default function GooglePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-none p-2 hover:bg-white/10">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/888/888846.png"
            alt="Start"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100"
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="mb-52 ml-80  w-[740px] border-0 bg-white p-0 shadow-2xl"
        align="center"
      >
        <div className="bg-[#060042ff] flex justify-end w-full px-2 py-1">
          <button className="text-white text-end">
            <X className="w-4 h-4"/>
          </button>
        </div>
        <Card className="border-0 shadow-none">
          <CardContent className="space-y-6 p-6">
            <div className="flex justify-between items-center px-2">
              <span className="text-sm text-muted-foreground">Gmail</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Images</span>
                <Menu className="h-5 w-5 text-muted-foreground" />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Sign in
                </Button>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <span className="text-4xl font-semibold">
                <span className="text-blue-600">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
            </div>
            <div className="relative">
              <Input
                className="pl-4 pr-20 py-6 rounded-full border shadow-sm hover:shadow-md transition-shadow"
                type="text"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Mic className="h-5 w-5 text-muted-foreground cursor-pointer" />
                <Camera className="h-5 w-5 text-muted-foreground cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-center gap-2">
              <Button variant="secondary" size="sm">
                Google Search
              </Button>
              <Button variant="secondary" size="sm">
                I&apos;m Feeling Lucky
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center p-4 text-sm text-muted-foreground">
            <div className="flex gap-4">
              <span>Luganda</span>
              <span>Kiswahili</span>
              <span>Ikinyarwanda</span>
              <span>Luo</span>
              <span>Runyakitara</span>
            </div>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
