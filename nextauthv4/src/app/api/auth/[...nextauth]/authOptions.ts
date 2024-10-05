import UserModel from "@/models/usermodel";
import dbConnect from "@/utils/dbConnection";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            email: credentials.indetifier,
          });
          if (!user) {
            throw new Error("No user found with this email");
          }

          const isValidPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isValidPassword) {
            return user;
          } else {
            throw new Error("Invalid password");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
};
