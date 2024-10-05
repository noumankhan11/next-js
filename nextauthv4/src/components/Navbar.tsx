"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  console.log(" session in nav: ", session);
  return (
    <div>
      <nav className="text-xl text-white px-5 py-4 flex justify-between flex-wrap bg-gray-800 ">
        <ul className=" flex justify-center items-center gap-14">
          <li className="">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="">
            <Link href={"/signup"}>Sign Up</Link>
          </li>
          <li className="">
            <Link href={"/signin"}>Sign In</Link>
          </li>
          <li className="">
            <Link href={"/protected"}>Protected</Link>
          </li>
        </ul>
        <div className="">
          <p>Username:</p> <p>email:</p>
        </div>
        <div className="">
          <p>now: LogedIn</p>
          <button>Logout</button>
        </div>
      </nav>
    </div>
  );
}
