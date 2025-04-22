"use client";
// import type { Metadata } from "next";
import { HomeNav } from "@/components/nav/home-nav";
import Image from "next/image";
import bg_image from "@/assets/images/body_background.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative w-full">
        {/* Top gradient background */}
        <div className="absolute top-0 left-0 w-full h-[100px] pointer-events-none z-0">
          <Image
            src={bg_image}
            alt="Top Background"
            fill
            className="background-blur-3xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Actual content */}
        <div className="relative z-10">
          <HomeNav />
          {children}
        </div>
      </div>
    </>
  );
}
