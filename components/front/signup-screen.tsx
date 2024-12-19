// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { EyeIcon, EyeOffIcon, Moon, Power, RotateCcw } from "lucide-react";

// export default function SignupScreen({ onLogin }: { onLogin: () => void }) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Signup data:", formData);
//     // Here you would typically send the data to your backend
//   };

//   return (
//     <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/windows11-login-background.jpg"
//         alt="Windows 11 Login Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//       />

//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center space-y-4">
//         <h1 className="text-4xl font-light text-white mb-6">Create account</h1>

//         <form onSubmit={handleSubmit} className="w-80 space-y-4">
//           <div>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               placeholder="Full Name"
//               className="w-full rounded-sm border-none bg-black/30 px-4 py-2 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Email"
//               className="w-full rounded-sm border-none bg-black/30 px-4 py-2 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
//               required
//             />
//           </div>

//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Password"
//               className="w-full rounded-sm border-none bg-black/30 px-4 py-2 pr-10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 focus:outline-none"
//             >
//                {showPassword ? (
//               <EyeOffIcon className="h-6 w-6" />
//             ) : (
//               <EyeIcon className="h-6 w-6" />
//             )}
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               placeholder="Confirm Password"
//               className="w-full rounded-sm border-none bg-black/30 px-4 py-2 pr-10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 focus:outline-none"
//             >
//               {showConfirmPassword ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                   <path
//                     fillRule="evenodd"
//                     d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
//                     clipRule="evenodd"
//                   />
//                   <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
//                 </svg>
//               )}
//             </button>
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-sm bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
//           >
//             Sign up
//           </button>
//         </form>

//         <button
//           onClick={onLogin}
//           className="mt-4 text-sm text-white/80 hover:underline"
//         >
//           Already have an account? Sign in
//         </button>
//       </div>

//       {/* System controls */}
//       <div className="absolute bottom-8 right-8 flex flex-col items-end space-y-2">
//         <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
//           <Moon className="h-5 w-5" />
//           <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
//             Sleep
//           </span>
//         </button>
//         <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
//           <Power className="h-5 w-5" />
//           <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
//             Shut down
//           </span>
//         </button>
//         <button className="group flex items-center space-x-3 rounded-md px-4 py-2 text-white/90 hover:bg-black/20">
//           <RotateCcw className="h-5 w-5" />
//           <span className="text-sm opacity-0 transition-opacity group-hover:opacity-100">
//             Restart
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  EyeIcon,
  EyeOffIcon,
  Loader2,
  Moon,
  Power,
  RotateCcw,
} from "lucide-react";
import LoginScreen from "./login-screen";
import { createUser } from "@/actions/userActions";

export type FormDataProps = {
  fullName: string;
  email: string;
  password: string;
};

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createUser(formData);
      handleOpenLogin();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function handleOpenLogin() {
    setOpenLogin(true);
  }
  if (openLogin) {
    return <LoginScreen />;
  }

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
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-light text-white mb-6">Create account</h1>

        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full rounded-sm border-none bg-black/30 px-4 py-2 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full rounded-sm border-none bg-black/30 px-4 py-2 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full rounded-sm border-none bg-black/30 px-4 py-2 pr-10 text-white placeholder-gray-300 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="button"
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
          {loading ? (
            <button
              type="button"
              disabled
              className="w-full rounded-sm bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20 flex gap-2 items-center justify-center"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full rounded-sm bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Sign up
            </button>
          )}
        </form>

        <button
          onClick={handleOpenLogin}
          className="mt-4 text-sm text-white/80 hover:underline"
        >
          Already have an account? Sign in
        </button>
      </div>

      {/* System controls */}
      <div className="absolute bottom-8 right-8 hide flex flex-col items-end space-y-2">
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
