"use client";
// import type { Metadata } from "next";
import { Geist_Mono, Playfair } from "next/font/google";
import { HomeNav } from "@/components/nav/home-nav";

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
  return (
    <div>
      <HomeNav />
      {children}
    </div>
  );
}
