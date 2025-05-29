"use client";
// import type { Metadata } from "next";
import { Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Toaster } from "sonner";
// import { ViewTransitions } from "next-view-transitions";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playFair = Playfair({
  variable: "--font-play-fair",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // });

  useEffect(() => {
    const lenis = new Lenis();
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // <ViewTransitions>
      <html lang="en">
        <body
          className={`antialiased ${geistMono.variable} ${playFair.variable} `}
        >
          <AntdRegistry>{children}</AntdRegistry>
          <Toaster richColors />
        </body>
      </html>
    // </ViewTransitions>
  );
}
