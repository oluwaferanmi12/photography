"use client";

import React, { useState } from "react";
import brandLogo from "@/assets/svgs/brand-logo.svg";
import hamburger from "@/assets/svgs/hamburger.svg";
import navDot from "@/assets/svgs/nav-active-dot.svg";
import Image from "next/image";
import { Drawer } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import facebook from "@/assets/svgs/mobile-facebook.svg";
import instagram from "@/assets/svgs/mobile-instagram.svg";
import linkedin from "@/assets/svgs/mobile-linkedin.svg";
import youtube from "@/assets/svgs/mobile-youtube.svg";
import tiktok from "@/assets/svgs/mobile-tiktok.svg";
import { X } from "lucide-react";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <div className="w-full z-50 fixed top-0 py-12 px-5 ">
      <div className="flex justify-between items-center w-full ">
        <span>
          <Image src={brandLogo} alt="logo" />
        </span>
        <div>
          <button
            className="flex justify-center items-center gap-3 border border-white/20 py-3 px-6 rounded-full bg-white/30 z-[1000px]"
            onClick={showDrawer}
          >
            <p>Menu</p>
            <span>
              <Image src={hamburger} alt="hamburger" />
            </span>
          </button>
        </div>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          className="!bg-[#282824] text-white"
        >
          <div>
            <div className="flex justify-between items-center">
              <span>
                <Image src={brandLogo} alt="logo" />
              </span>
              <span>
                <X onClick={onClose} />
              </span>
            </div>

            <div className="flex flex-col gap-10  mt-14">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={onClose}
                  className={`${
                    pathname === path
                      ? "text-5xl font-semibold text-[#D9C9AE] flex gap-2 items-center"
                      : "text-3xl font-light text-[#F3EEE6]"
                  } font-playfair transition-all duration-200`}
                >
                  {pathname === path && (
                    <span>
                      <Image src={navDot} alt="dot" />
                    </span>
                  )}
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full mt-28">
            <Link href={"/session"}>
              <button onClick={onClose} className="bg-light-brown w-full p-6 rounded-full font-semibold text-darker-grey">
                Book a session
              </button>
            </Link>
          </div>

          <div className="flex gap-4 mt-8 text-xl">
            <Link href="/">
              <span>
                <Image src={facebook} alt="social_links" />
              </span>
            </Link>
            <Link href="/">
              <span>
                <Image src={instagram} alt="social_links" />
              </span>
            </Link>
            <Link href="/">
              <span>
                <Image src={linkedin} alt="social_links" />
              </span>
            </Link>
            <Link href="/">
              <span>
                <Image src={youtube} alt="social_links" />
              </span>
            </Link>
            <Link href="/">
              <span>
                <Image src={tiktok} alt="social_links" />
              </span>
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
