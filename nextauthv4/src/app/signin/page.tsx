"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center text-white">
      <div className="form bg-gray-800 w-[400px] rounded-lg p-5">
        <h1 className="text-2xl border-b-2 mb-2">Sign In, Form</h1>
        <form
          action={async (formData) => {
            // await signin(formData);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            const result = await signIn("credentials", {
              redirect: false,
              email,
              password,
              callbackUrl: "/",
            });
            console.log("result", result);
          }}
          className="flex flex-col gap-4">
          <label className="text-gray-300">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="bg-gray-700 p-2 rounded-lg"
          />

          <label className="text-gray-300">password</label>
          <input
            type="password"
            placeholder="Passoword"
            name="password"
            className="bg-gray-700 p-2 rounded-lg"
          />

          <button className="bg-zinc-800 border rounded-lg p-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
