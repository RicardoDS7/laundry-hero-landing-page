"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  console.log("Session:", session);

  if (session) {
    return (
      <div>
        <div>Welcome, {session.user?.email}</div>
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
      <div>
        <p>You are not signed in.</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("google", { callbackUrl: "/booking/step1" });
          }}
        >
          Sign in
        </button>
      </div>
    );
  }
};

export default Login;
