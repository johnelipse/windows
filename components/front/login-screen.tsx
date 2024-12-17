// import { useState } from 'react'
// import Image from 'next/image'
// import { EyeIcon, EyeOffIcon } from 'lucide-react'

// export default function LoginScreen({ onSignUp }: { onSignUp: () => void }) {
//   const [showPassword, setShowPassword] = useState(false)

//   return (
//     <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
//       <div className="mb-8 rounded-full bg-gray-300 p-2">
//         <Image
//           src="/user-avatar.png"
//           alt="User Avatar"
//           width={100}
//           height={100}
//           className="rounded-full"
//         />
//       </div>
//       <h2 className="mb-4 text-2xl font-light">John Doe</h2>
//       <div className="relative mb-4 w-64">
//         <input
//           type={showPassword ? 'text' : 'password'}
//           placeholder="Password"
//           className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
//         />
//         <button
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute right-2 top-2 text-gray-500 focus:outline-none"
//         >
//           {showPassword ? (
//             <EyeOffIcon className="h-6 w-6" />
//           ) : (
//             <EyeIcon className="h-6 w-6" />
//           )}
//         </button>
//       </div>
//       <button className="mb-4 w-64 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
//         Sign in
//       </button>
//       <div className="space-x-4 text-sm text-blue-500">
//         <button className="hover:underline">Forgot password?</button>
//         <button className="hover:underline">Switch user</button>
//       </div>
//       <button onClick={onSignUp} className="mt-8 text-sm text-blue-500 hover:underline">
//         Create account
//       </button>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeOffIcon, Moon, Power, RotateCcw } from "lucide-react";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hrty.vercel.app/pXL-ep"
        alt="Windows 11 Login Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-lg" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        {/* Avatar */}
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/90 shadow-lg">
          <svg
            className="h-20 w-20 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Username */}
        <h2 className="text-2xl font-light text-white">testingdocs</h2>

        {/* Password input */}
        <div className="relative mt-4 w-80">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-sm border-none bg-black/30 px-4 py-2 pr-10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 focus:outline-none"
          >
            {showPassword ? (
              <EyeOffIcon className="h-6 w-6" />
            ) : (
              <EyeIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Sign In Button */}
        <button className="mt-4 w-80 rounded-sm bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20">
          Sign in
        </button>

        {/* Additional Options */}
        <div className="mt-4 flex space-x-4 text-sm text-white/80">
          <button className="hover:underline">Forgot password?</button>
          <button className="hover:underline">Other sign-in options</button>
        </div>
      </div>

      {/* System controls */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end space-y-2">
        <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
          <Moon className="h-5 w-5" />
          <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Sleep
          </span>
        </button>
        <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
          <Power className="h-5 w-5" />
          <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Shut down
          </span>
        </button>
        <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
          <RotateCcw className="h-5 w-5" />
          <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
            Restart
          </span>
        </button>
      </div>
    </div>
  );
}
