import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import StoreProvider from './StoreProvider';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { Toaster } from "@/components/ui/sonner"
import { currentRole } from '@/lib/data';
import Navbar from '@/app/ui/homePage/navbar/Navbar';
import Footer from '@/app/ui/homePage/Footer';
import { poppins } from "./ui/Fonts";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const role = await currentRole()

  return (
    <SessionProvider session={session}>
    <html lang="en" className={poppins.className}>
      <body>
      <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <StoreProvider>
        <Toaster position='top-right'/>
        {role === "ADMIN" ? "" : <Navbar/>}
        {children}
        {role === "ADMIN" ? "" : <Footer/>}
        </StoreProvider>
      </body>
    </html>
    </SessionProvider>
  );
}
