"use client";
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaApple, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { Divider } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { data: session } = useSession();

  console.log("Session:", session);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    
    console.log({ email, password });
  };

  if (session) {
    return (
      <div>
        <div>Welcome, {session.user?.name}</div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    );
  } else {
    return (
        <div className="bg-white-smoke h-screen">
            <div className='relative pt-16 max-w-[1400px] mx-auto'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="h2-display">Let&apos;s Get Started!</h1>

                    <div className="flex flex-col max-w-md gap-6">
                        <form onSubmit={handleSubmit} className="space-y-4 w-full">
                            {/* Email Field */}
                            <div>
                                <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-600"
                                >
                                Email
                                </label>
                                <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-nice-blue"
                                placeholder="Enter your email"
                                />
                            </div>
                            {/* Password Field */}
                            <div>
                                <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-600"
                                >
                                Password
                                </label>
                                <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-nice-blue"
                                placeholder="Enter your password"
                                />
                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-nice-blue hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Login
                            </button>
                            </form>

                            <Link className="font-medium text-nice-blue items-center justify-center text-center"
                                href={"/account/password-reset"}>
                                I forgot my password
                            </Link>

                            <div className="flex flex-row gap-2 items-center justify-center text-center">
                                <p>Don&apos;t have an account?</p>
                                <Link className="font-medium text-nice-blue"
                                    href={"/account/sign-up"}>
                                    Sign-up
                                </Link>
                            </div>

                        <Divider className="font-bold italic">OR</Divider>

                        <div className="flex flex-col gap-4 w-full">
                        <button
                        className=" py-4 px-4 rounded-full flex gap-4 items-center justify-start shadow-md
                                text-nice-blue bg-white hover:text-white hover:bg-nice-blue w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn("google", { callbackUrl: "/account/booking/step1" });
                        }}
                        >
                        <FcGoogle size={25} />
                        Continue with Google
                        </button>

                        <button
                        className=" py-4 px-4 rounded-full flex gap-4 items-center justify-start shadow-md
                                text-nice-blue bg-white hover:text-white hover:bg-nice-blue w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn("google", { callbackUrl: "/account/booking/step1" });
                        }}
                        >
                        <FaFacebook size={25} />
                        Continue with Facebook
                        </button>

                        <button
                        className=" py-4 px-4 rounded-full flex gap-4 items-center justify-start shadow-md
                                text-nice-blue bg-white hover:text-white hover:bg-nice-blue w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn("google", { callbackUrl: "/account/booking/step1" });
                        }}
                        >
                        <div className="text-black">
                          <FaApple size={25} />
                        </div>
                        Continue with Apple ID
                        </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};

export default Login;
