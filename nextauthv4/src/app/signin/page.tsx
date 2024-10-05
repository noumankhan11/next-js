import React from "react";

export default function page() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center text-white">
      <div className="form bg-gray-800 w-[400px] rounded-lg p-5">
        <h1 className="text-2xl border-b-2 mb-2">Sign In, Form</h1>
        <form
          action={async () => {
            "use server";
            console.log(FormData);
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
            name="username"
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
