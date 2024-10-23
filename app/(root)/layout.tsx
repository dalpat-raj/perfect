import { Nunito, Caveat } from 'next/font/google'
import "../globals.css";
import Footer from "../ui/homePage/Footer";
import Navbar from "../ui/homePage/Navbar";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import StoreProvider from './StoreProvider';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";


const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en" className={nunito.className}>
      <body>
      <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <StoreProvider>
        <Navbar/>
        {children}
        <Footer/>
        </StoreProvider>
      </body>
    </html>
    </SessionProvider>
  );
}
