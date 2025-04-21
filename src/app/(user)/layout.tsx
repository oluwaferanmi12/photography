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
      <div className="relative top-0 left-0 w-full h-[150px]  pointer-events-none">
        <Image
          src={bg_image}
          alt="Top Background"
          fill
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
