"use client";
// import type { Metadata } from "next";
import { HomeNav } from "@/components/nav/home-nav";
import Image from "next/image";
import bg_image from "../../assets/images/body_background.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Fixed top background image */}
      <div className="relative z-[1] top-0 left-0 w-full h-[100px]  pointer-events-none">
        <Image
          src={bg_image}
          alt="Top Background"
          fill
          className="background-blur-3xl"
          style={{ objectFit: "cover" }}
          // priority
        />
      </div>

      {/* Actual content */}
      <div className="relative z-10">
        <HomeNav />
        {children}
      </div>
    </>
  );
}
