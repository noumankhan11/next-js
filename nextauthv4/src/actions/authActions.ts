"use server";
import UserModel from "@/models/usermodel";
import dbConnect from "@/utils/dbConnection";
import bcrypt from "bcryptjs";
import { signIn } from "next-auth/react";

export const signup = async (formData: FormData) => {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(
    "username: ",
    username,
    ", email: ",
    email,
    ", pass: ",
    password
  );
  console.log("email: ", email, ", password: ", password);
  await dbConnect();
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error("user already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    console.log("user registered successfully");
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

// signIn function

export const signin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  await signIn("credentials", {
    redirect: false,
    email,
    password,
    callbackUrl: "/",
  });

  console.log("Loged in successfully!");
};
