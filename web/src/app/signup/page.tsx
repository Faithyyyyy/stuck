"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name || name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name =
        "Name must be at least 2 letters and only contain letters and spaces";
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (
      !password ||
      password.length < 6 ||
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/.test(password)
    ) {
      newErrors.password =
        "Password must be at least 6 characters and include letters, numbers, and special characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);

    // Replace with your signup logic
    setTimeout(() => {
      console.log({ name, email, password });
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-Up clicked");
    // Replace with your Google signup logic
  };

  const isValid = name && email && password;

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[445px] mx-auto px-9 py-6 border border-[#E7E7E7]"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <strong className="font-lora font-medium text-[32px] text-neutral-950">
            Create an account
          </strong>
          <p className="font-light text-neutral-700 text-center mb-6">
            Create your account to manage products, track inventory, and stay in
            control.
          </p>

          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-4 p-4 rounded-md hover:bg-neutral-50 transition"
            onClick={handleGoogleSignUp}
            aria-label="Sign up with Google"
          >
            <Image
              src="/google-icon-image.png"
              alt="Google sign-up"
              width={20}
              height={20}
            />
            <span className="font-semibold text-neutral-900">
              Sign up with Google
            </span>
          </button>
        </div>

        <div className="w-full my-10 relative">
          <hr className="border-[0.5px] border-gray-300" />
          <div className="w-[30px] h-[30px] font-light text-[0.775rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white flex items-center justify-center">
            OR
          </div>
        </div>

        {/* Name Field */}
        <div className="w-full flex flex-col gap-4 mb-6">
          <div className="flex flex-col justify-center gap-2">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 border border-gray-300 rounded-[6px] focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <small className="text-red-400">{errors.name}</small>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col justify-center gap-2">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 border border-gray-300 rounded-[6px] focus:outline-none"
              placeholder="Enter email"
            />
            {errors.email && (
              <small className="text-red-400">{errors.email}</small>
            )}
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
            {errors.password && (
              <small className="text-red-400">{errors.password}</small>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-6">
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
              <span>{isLoading ? "Signing up..." : "Sign Up"}</span>
            </div>
          </button>

          <p className="text-neutral-900">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1366D9] font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
