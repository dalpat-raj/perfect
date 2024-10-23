import NextAuth, { type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
    email: string | any,
    role: "ADMIN" | "USER"
};

declare module "next-auth" {
    interface Session {
      user: ExtendedUser;
    }
  }

import { JWT } from "@auth/core/jwt"

declare module "@auth/core/jwt" {
    interface JWT {
        role?: "USER" | "ADMIN"
    }
}