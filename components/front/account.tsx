"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Minus,
  Square,
  X,
  ChevronRight,
  AlertCircle,
  Cloud,
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

export default function AccountsSettings() {
  const [searchQuery, setSearchQuery] = useState("");

  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: Monitor, label: "System" },
    { icon: Bluetooth, label: "Bluetooth & devices" },
    { icon: Wifi, label: "Network & internet" },
    { icon: Palette, label: "Personalization" },
    { icon: AppWindow, label: "Apps" },
    { icon: User2, label: "Accounts", active: true },
    { icon: Clock, label: "Time & language" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Accessibility, label: "Accessibility" },
    { icon: Shield, label: "Privacy & security" },
    { icon: Download, label: "Windows Update" },
    { icon: Glasses, label: "Mixed reality" },
  ];

  const accountSettings = [
    {
      icon: User2,
      title: "Your info",
      description: "Profile photo",
    },
    {
      icon: Shield,
      title: "Sign-in options",
      description: "Windows Hello, security key, password, dynamic lock",
    },
    {
      icon: Monitor,
      title: "Linked devices",
      description:
        "Find, repair, and manage devices that are signed in with your Microsoft account",
    },
  ];

  return (
    <div className="flex h-screen bg-[#202020] text-white">
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
          <h1 className="text-2xl font-light">Accounts</h1>
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

        {/* Profile Section */}
        <div className="p-4">
          <div className="mb-8 flex items-center space-x-4">
            <Image
              src="https://hrty.vercel.app/o2aFjh"
              alt="User Avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">CUS TOR</h2>
              <p className="text-gray-400">custor00@gmail.com</p>
              <p className="text-sm text-gray-400">Administrator</p>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mb-8 flex items-center justify-between rounded-sm bg-[#493C00] p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
              <div>
                <span className="font-medium text-yellow-400">
                  Never lose access
                </span>
                <p className="text-sm text-gray-300">
                  Add a recovery phone number to make sure you can always get in
                  to your account.
                </p>
              </div>
            </div>
            <button className="rounded-sm bg-[#3B3B3B] px-4 py-1 text-sm hover:bg-[#4B4B4B]">
              Add now
            </button>
          </div>

          {/* Microsoft 365 Section */}
          <div className="mb-8 rounded-sm bg-[#2D2D2D] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="https://hrty.vercel.app/u8Jk3p"
                  alt="Microsoft 365"
                  width={24}
                  height={24}
                />
                <h3 className="font-medium">Microsoft 365 Family</h3>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Premium productivity apps, OneDrive cloud storage, and more
            </p>
            <div className="mb-4">
              <button className="rounded-sm bg-[#D85040] px-4 py-2 text-sm font-medium hover:bg-opacity-90">
                Try for free
              </button>
              <button className="ml-4 text-sm text-blue-400 hover:underline">
                Learn more
              </button>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {[
                {
                  name: "word",
                  image:
                    "data:image/png;base64,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",
                },
                {
                  name: "excel",
                  image:
                    "data:image/png;base64,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",
                },
                {
                  name: "powerpoint",
                  image:
                    "data:image/png;base64,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",
                },
                {
                  name: "onedrive",
                  image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA+VBMVEUoqOr///8AeNQDZLgUkN/l5eXk5OTm5ubj4+Pu7u74+Pj19fXx8fHr6+v7+/vz8/P++fUAdNMpqesAYLYAW7UActMAedUlpOgAWLQAi94AoekAbdIAh9348+8Ab9Ls6eUAVLMCbsYaluIfneVvmc3f5ekJe9M6ktwcbLoGabwOfc4Of9EQhtdVsulkmdloqeHe6vXQ5fbF1++1w9qKq9dZkMsvcr1Jis2nweHI1ua8zuOowNydut7i7fd3odM1ecKQteZLj81Zmt4/is1XisfT3OatzO1DgMSIueN4q+Oix+q20u92r+KMv+hxuulLkNpUpOHA3vV4vOfWRkNOAAAOWUlEQVR4nO1dbXuaSBRFGyCKIKipYqWTNtEmjUbTJt2aJtvdbGPavPXl//+YHV4UBgYYYGbQpvdDeXI+9OF479x7OMqMUKlU6qIs1uFVksUavNREWQqgIiGqxKKyLKqxaCMJ1VaonBeVhKfBUBIlh6Ho3Z+4nRMVRY/LClUQVIqiDRfVPFSmhkoeKtTrdaVWqynwCi8NeGnAKz+0SRNtYlABfgBOMiT3Y98Wt+1kbGdA4YelEqDOB4yi2vYynZL3saejchZUgqggY5cZ4yWZuPgoLEkpgHLOoVhCDjd0HeJWXMw6/P17Kb/FV+Y83JbcZSZtO/cHrySomoZqHipJUghV0tAGiooZUDmECvC/dLtH6FYzoWoULZdWAF3DaaFRnxZF20sUTW0vPJuOUMqI4Dk43E6Ta8wTDf9UqUZ/+Eso+lSmBbMcpstt5gKunHXI/JEpuA7Z91KeAk7C9NL1m4e0n54kylKtHE2ToHRQXUpLqvmoEkHDZCXsrZKgMhHKY1qIFKYFQcFKCdOCwfNhyVItgJb+jM9cwPHzadIFHEWp9sdrK5hDaW28NpGv18ZTqpXmtWFQNlLtj9dWQMBJGDSLgKMk1YJeW6ZOI2E7jYSdFhFUiaCah4rhXp8ZjUyLjfbaEDRGqrHy2oil2h+vLQ9aww6OGmevzf6A7dqp+wuqyPCPl2qcvTZRlm1Urw2Hs5N35+/fvz+ZNTUVWBb5klwDry1BqoHa8N3707MPhz07OjB6vd3d9oe//v70TrEAEPPmcB28Nk2vzz7uH3Qgr/azULTbbUj14OziWtEb9KSawtFrg+j5/mEvyg0l2um1zz5Rlmo8vDYZ1N6fwZtPZOez7Hz5VLHktfXacFJtvo8pzGSS++cWqDDy2jJ1Gim101i1Tx8Is4eQ7H34VAMi7U6TWpqkBRuYFheHncz03Og8uxg2cEWIl2okAq7486EUQGF7aVQ+dvLyczh2LrI2nTxem5obtc4PegX4uXm8qxSVauy8tsubovzs6H2YxS8+IqnGyGsDtdMc/QUX7d2/y/HakqUamB8UWYBodA5PwJp5bQ39lEaB+tH7WyMRZakoLa8NDD/TS6AbnQ+XlbxSjb7XBs7bdFZgMNqdc1Cm1xaUapXTXer87Ng9tah7bV4RbmNRKQZtnNFdgn70zop3muLTQq5RX4J+dG4aMpFUixVwOZ8Pg1JteEB/CfrRPhjKtLy2oPxSiaWapjAlCCkeDp2BpIalmpqIUvPaRLYZdClqmaUaPa+twZ6gW6hcvbZgW21+Zk8QUvxcwz0X8/Da6n+x66IIxS+V3AKukNcG9vkQhENjP7eAKzIPwQWrQR+N3kUWAVfAa0O+1JyzkWr42J2DAl5bLqkmqzyajB9tbdU9IqWZhOb32qwbzgy/kEo1MTotckg1CZzy6jLL6F3oub02taZipFoiWrvmuQg9isPQPYSlGhbN6LU56bSAqlY+dxg88yZH+6ZCKtXyem2gdv3u9p/j799H1dGb4+N/b57xZdn7yM5rk4FeObm4Gr18ubNjGEa1WoX/GuOr4zMOutSPTj3HE7CieKJMcUWO4ooyBFX02scr48WOzQwJwxgdn93wazntfd2736Z/v45Ui0fTe6kI1MXVy5cRdiuS4ym/ubE7J5Nqmby2629GLD2P5OBfXrXqNBu6XtvsKoWey/HNf3wYOknM7LUljPnZ1QsCfjbF52+4PCnCR0WL4rOF9o2Qn8Px6D8updo7x8+FWAEXm0PZWhg7xPwcjuP/OFBsfwGZvTbVEWUqKtWs4feXmfg5waNUd6+dp3kVK9V8NNVrW5A0mGgaR2P21ttphYLXVpu+yMHP4TgeM2b4rFPcawPDo2wrEAnmXbXzCWT32pZSTbGlj34dlWfZOI4PWTJs3+hLUebcb1MJSTUUjfZScJejxYTi6C1LirtKoXkIPuZdgihHhmnsfCzitVEiCEt1xIyjLU7zeW1QqlkLSgRhjEasKPaGYgafBpkW4I4eQZsjozTCbprTawPz4k0Gieev2DDcB7m8Nq02LDYlGHNst9vPDg9Gb2GMmnpF1xoRqeYIOFVFUMSnGdNnWH1epVSqh2/HW6+3vBiYb6Zf311WKiDmrSCs1wa+FVAySRwLp7HdPjzaioRpDszp7TXQU6bFKoeAYhsNUSzKcWRG+S1pDq5uL9O8NsV11WpsMuhyLFCquPSFSE5P9PpSqilwdTbgZSXg/F56xWARBjjmS2P7YJzCz+W497MS9xXqch7qdCchhmIejm8J6Lkx2DvBf4W69Nok5TlbgjbHarb0HZKkL8DxxxBgvTavl/7DcBX6HDOk8W18d4nluLBkEemlgWeLS8piJo5ilYxjaneJT2Oc13bMtM0gHFO7atbyDIRpzkHk+VBV1YZ2ybjNIBxT0kjeXbBpvNVtq1B1ZSgUcJrTacA3Xil0KMaWartA+lYU7wHGaxvyaDMIx5j0Ze8uWIqRaaFzaaRpHHN2l2iYUyvktTWUEW+CdiCl2n5VuDwDFO+tgICDvVQ+5zMqQuF31XbB7hKl+BUgXhvgNioiHCl1l0gMFiDotancV+EqjFfPXtHoLlGK86DX9q6UIrX5Vb89TAQWBLe2XjcDvfS+lCI1do6mjy1BEFp7LBiaU+AzLKOTGjvH9xPBjZbwOv2OM8fgzpOoAlfFtuQ3+varJfjR6jKgaDpeW10VwC3nRmPsfL9/FELBoFTNr16n4atJ7e7yOOmGCTIp1cGl6kwL8J0jw53xNJI+ZqUKm43jtenclqFRvVp1FzxHyqU6mNkOnMCp0RiGNxwSKXaplqo5dXrpCY95j+0u7Et1oNgMF+xbqVE9fkwszyBFmqVqPthPT/+wbjQ7Y7L0rTjS7KrwYVhgq9mMnasJafoYlOrgHDJk+ehkjNK7C5YirVI17wFDhrC7THGznYwjpVI1LY0VQ+P5dJInfT7HPg2Og5nIhqEx/pGrPBGKNErVvAUMGBrVN9m7C5YjhVKdUmdoGKPi6fM5FhY5pk6XoWHA7kKLnkOxaKmO6jQZGs+viLULOcdipTo4oTfxd45+FOuesRyLCADzTrigoksNg1J3wVIsUKrmVyrK2zi6YpO+FcfcpWreC4XdUke7sKTncszbVafCrBhD2F3Yps/nmK9Up4Jc5BkfahdO/IS8pToVrKO8zRRqlx/syxPhmKNUpwKY5mPIvLvgOWYu1amg53GEDa7liVDMWqpToTLLvBCNURnpW3HMJgAgw0rGKi0tfT7HPjlBOA8rlSy2vt1dWuXyEzKVqnkhyIBc1RijvZLTtwzirgp1qSzLZAyh9Cy7PINBWKqDmSCKgOS3s/y0C2mQ6fGBJqhqbZEq3MrvLrggKlXnraCUbmqX5/rRcyI9jVPg/OorqZuuT3fBRVqpmguHYf06bug76VtffnYkT47BpSg0Go2mju81xujNGqdvFUld9bWluL8RPsEkcT27Cy7iS9X8Cpa/8w4n0ahuCZtBz4m4Uh3Mnd+12W8FoU/6UFqv+eqLBF6PvwbeO6SiHJz6xri7afwEfKmai4omegzly51l+l5vyOqLRLRUB1rgHVL9wq5TY9DdVH52hESO+dX9XZumKfaP9ytHcPgJG1ieSCClOrjUtLr/Dqk839p0ena0hBVH8x6g75CCu72yb49KrEp1UA/v1wYe8n7rvmbhlqp5G3iHFCo3+2LxdT/ZhdtVLYdUA3kff1j2rVGLVtc8B5j9S8F1v+xboxYTgN2vDcx/F4rdoei/Qyq700K2j7DTF78Hxf756i398P404PZ3oNh98LcGCTOUwG+Qxe4EhN8h1bQGvLoCzvq56RS7EwvKUMhGXb1Diu71Zc03e/JDgpF3SEP7tYGhsMEcYYnG7sCz2nNPlh83tlL7k9D5go7XZm+U4Sk376LfbmgW+w+6y6LpXhpK3N6X4Dr3r1/LjO5d9H38uP1LZetub9M49lvXALdfm7f4wqcg1Cr1DVuN/VtLjNmvbXmONCLgIApmk83h2J9cg+DuLS6LldcWuxf0yYZw7Av+/jS4/dpkCcPQQ+eP/XVfj91+y95jSEb3a1syXHptrshBBZyLWsPb1jqT7PYf7S2w62pAqmlaE17riNeWtK++DuYPk73uGrLsdvuTRR2zX9s2br+2xLMRgF7/+Uvod7trwxOS63cf74bk+7URnA4IhvPFw2NL6HvRFTzGS+LonwzRVmvy6/Zn3TlwNv1shKDICQk4DGpZll5vXs5ms6FS1y37Txj+xfIvDFH7X927pej9IiiqvJPOmUHTuZydoXMU4g6SVyvISTUBlMLpzUXPCspyZHzMQfKyxzDhcHgKR8YTnY0QK+BwqBpFpQiqBFB0C1w8SunIeHS/tpBUcwQcKaqkoQ1CVM2Hauko2bSQsKUZi3oFq8aiDRTNdrZoRjTitSUJuNUxLQgqRlCkvRCgYaFFFY16bUkCzhVE1NA6bXQl1ZK9trCAk2JQNYpKEVSJoEtJJSahDRI0QarRO4d0U6ZFolTLdmYgksPVbA9lK4g2SNDMx1jFe23NLAJuvdA4AZdyDmk4RWRosGsmoVpIwOU5wDEVpXAud44lmbj4KCxJUq+NooBLlmoSdakW47VRk2pUBJycEY0KOBdNmBZSNgGHKc1EASdzEnDpXhtjAcdGqmXz2tZdqqUIuDivLU6qYdCoVMsp4IikWmYB9wSmRRavjVSqrZWAE2KlWhZ0zQQcguK8tnxSzUNTpVrYa2Mt4J7I0xMnr41EwDH12paCCJVqIZmUFY0KrSwoDQEXdaKetteGRf94bZylWhgtv9NI2O5BgspE6BOZFny9NmkNvbaNlnUxyvuP17ZJT0/leG1YlKfXVlDAFZNqlAVcohP1tL02WgLuj9dWWMBR6DRRqZa102SRapkF3P/eJtgqqAEC3QAAAABJRU5ErkJggg==",
                },
                {
                  name: "outlook",
                  image:
                    "data:image/png;base64,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",
                },
                {
                  name: "onenote",
                  image:
                    "data:image/jpeg;base64,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",
                },
              ].map((app, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={app.image}
                    alt={app.name}
                    width={40}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Account settings</h3>
            <div className="space-y-1">
              {accountSettings.map((setting, index) => (
                <button
                  key={index}
                  className="flex w-full items-center justify-between rounded-sm p-3 hover:bg-[#3B3B3B]"
                >
                  <div className="flex items-center space-x-3">
                    <setting.icon className="h-5 w-5" />
                    <div className="text-left">
                      <div className="font-medium">{setting.title}</div>
                      <div className="text-sm text-gray-400">
                        {setting.description}
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

      {/* OneDrive Status */}
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 rounded-sm bg-[#2D2D2D] px-3 py-2 text-sm">
        <Cloud className="h-4 w-4 text-blue-400" />
        <div>
          <div>OneDrive</div>
          <div className="text-xs text-gray-400">Back up files</div>
        </div>
      </div>
    </div>
  );
}
