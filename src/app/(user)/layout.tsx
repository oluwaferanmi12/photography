"use client";
// import type { Metadata } from "next";
import { HomeNav } from "@/components/nav/home-nav";



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
