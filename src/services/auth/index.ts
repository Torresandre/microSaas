import EmailProvider from 'next-auth/providers/nodemailer'

import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../dataBase"

 
export const {   handlers: { GET, POST },
auth,
} = NextAuth({
pages: {
  signIn: '/auth',
  signOut: '/auth',
  error: '/auth',
  verifyRequest: '/auth',
  newUser: '/app',
},
adapter: PrismaAdapter(prisma),
providers: [
  EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,

  }),
],
   secret: process.env.NEXT_PUBLIC_SECRET
})