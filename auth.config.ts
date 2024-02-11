import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret:
    //     process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedField =
          LoginSchema.safeParse(credentials);

        if (validatedField.success) {
          const { email, password } = validatedField.data;

          const user = await getUserByEmail(email);

          // neu co user ma k co password tuc la user da dang ki bang oauth ko phai credential
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (passwordMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
