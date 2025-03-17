"use client"
// import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { HomeNav } from "@/components/nav/home-nav";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <html lang="en">
      <body className={`antialiased ${geistMono.variable}  bg-[#F4F3EA]`}>
        <AntdRegistry>
          <HomeNav />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
