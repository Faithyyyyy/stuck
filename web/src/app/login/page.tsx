"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  interface LoginCredentials {
    email: string;
    password: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    // Replace with your login logic
    const credentials: LoginCredentials = { email, password };

    setTimeout(() => {
      console.log(credentials);
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic
    console.log("Google Sign-In clicked");
  };

  const isValid = email && password;

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[445px] mx-auto px-9 py-6 border border-[#E7E7E7]"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <strong className="font-lora font-medium text-[32px] text-neutral-950">
            Login
          </strong>
          <p className="font-light text-neutral-700 text-center mb-6">
            Access your dashboard to manage products, track inventory, and
            monitor orders.
          </p>

          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-4 p-4 rounded-md hover:bg-neutral-50 transition"
            onClick={handleGoogleSignIn}
            aria-label="Login with Google"
          >
            <Image
              src="/google-icon-image.png"
              alt="Google login"
              width={20}
              height={20}
            />
            <span className="font-semibold text-neutral-900">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="w-full my-10 relative">
          <hr className="border-[0.5px] border-gray-300" />
          <div className="w-[30px] h-[30px] font-light text-[0.775rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center">
            OR
          </div>
        </div>

        {/* Email Field */}
        <div className="w-full flex flex-col gap-4 mb-6">
          <div className="flex flex-col justify-center gap-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 border border-gray-300 rounded-[6px] focus:outline-none"
              placeholder="Enter email"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col justify-center gap-2">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-4 border border-gray-300 rounded-[6px] focus:outline-none"
              placeholder="Enter password"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-6">
          <p className="self-start text-neutral-900">
            <Link href="/auth/reset" className="font-medium text-[#101540]">
              Forgot Password
            </Link>
          </p>

          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`w-full max-w-93.75 py-3 rounded-md ${
              !isValid
                ? "bg-neutral-300 text-gray-500 cursor-not-allowed"
                : "bg-[#1366D9] text-white"
            }`}
          >
            <div className="w-full flex items-center justify-center">
              <span>{isLoading ? "Logging in..." : "Login"}</span>
            </div>
          </button>

          <p className="text-neutral-900">
            New User?{" "}
            <Link href="/signup" className="text-[#1366D9]">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
