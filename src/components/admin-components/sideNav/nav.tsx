"use client"

import logo from "@/assets/svgs/brand-logo.svg";
import Image from "next/image";
import layoutLine from "@/assets/svgs/layout_left_line.svg";
import homeOutline from "@/assets/svgs/home_1_line.svg";
import dollarSign from "@/assets/svgs/Admin_svgs/dollar_icon.svg";
import calenderIcon from "@/assets/svgs/Admin_svgs/calender_icon.svg";
import multiselectionIcon from "@/assets/svgs/Admin_svgs/multiselection_icon.svg";
import settingsIcon from "@/assets/svgs/Admin_svgs/gearsIcon.svg";
import biDirection from "@/assets/svgs/selector_vertical_line.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  {
    icon: homeOutline,
    navLink: "/dashboard",
    navTitle: "Dashboard",
  },
  {
    icon: homeOutline,
    navLink: "/booking",
    navTitle: "Booking",
  },
  {
    icon: dollarSign,
    navLink: "/transaction",
    navTitle: "Transaction",
  },
  {
    icon: dollarSign,
    navLink: "/links",
    navTitle: "Links",
  },
  {
    icon: dollarSign,
    navLink: "/admin-portfolio",
    navTitle: "Portfolio",
  },
  {
    icon: calenderIcon,
    navLink: "/calendar",
    navTitle: "Calendar",
  },
  {
    icon: multiselectionIcon,
    navLink: "/admin-packages",
    navTitle: "Packages",
  },
  {
    icon: settingsIcon,
    navLink: "/admin-gallery",
    navTitle: "Gallery",
  },
  {
    icon: settingsIcon,
    navLink: "/settings",
    navTitle: "Settings",
  },
];

export const Nav = () => {
  const pathname = usePathname();


  return (
    <div className="h-screen min-h-screen w-[300px] max-h-screen flex flex-col justify-between p-4">
      <div>
        <div className="bg-[#1D1C1C] rounded-lg p-4 flex items-center justify-between">
          <Image src={logo} alt="" />
          <Image src={layoutLine} alt="" />
        </div>
        <div className="mt-8 flex flex-col gap-5">
          {navData.map((navs) => (
            <Link key={navs.navTitle} href={navs.navLink} className="text-[12px]">
              <NavWrapper active={pathname.startsWith(navs.navLink)} icon={navs.icon} text={navs.navTitle} />
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
        className="flex items-center justify-between p-4 rounded-lg"
      >
        <div className="flex items-center gap-2 font-mono-medium">
          <div className="w-[40px] h-[40px] rounded-full bg-[#D9D9D9]"></div>
          <div>
            <p className="text-[#101010]">John Doe</p>
            <p className="text-[#615F5F] text-xs">johndoe@gmail.com</p>
          </div>
        </div>

        <Image src={biDirection} alt="" />
      </div>
    </div>
  );
};

const NavWrapper = ({ icon, text, active }: { icon: string; text: string, active: boolean }) => {
  return (
    <div className={`${active ? "text-white bg-black p-3 rounded-xl" : "text-[#5F6368]"} flex cursor-pointer items-center gap-2 `}>
      <div>
        <Image src={icon} alt="" />
      </div>
      <p className="font-mono">{text}</p>
    </div>
  );
};
