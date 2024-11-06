import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail, getUserById } from "./lib/data";
import { LoginSchema } from "@/schema"
// import bcrypt from 'bcryptjs'

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut
} = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }){
      await db.user.update({
        where: {id: user.id},
        data: { emailVerified: new Date() }
      })
    }
  },
  callbacks: {
    async signIn({ user, account }){
      if(account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      if(!existingUser) return false;

      return true
    },
    async session({ token, session }){
      if(token.sub && session.user){
        session.user.id = token.sub;
      }

      if(token.role && session.user){
        session.user.role = token.role;
      }

      if(session.user){
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token }){
      if(!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      return token;
      
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials){
        const validatedFields = LoginSchema.safeParse(credentials);

        if(validatedFields.success){
          const { email, password } = validatedFields.data;
          

          const user = await getUserByEmail(email)
          if(!user || !user.password) return null;

          // const passwordsMatch = bcrypt.compare(password, user.password)
          const passwordsMatch = password === user.password
          
          if(passwordsMatch) return user;
        }
        return null;
      }
    })
  ],
})








