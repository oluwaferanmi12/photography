"use client"

import logo from "@/assets/svgs/brand-logo.svg";
import Image from "next/image";
import layoutLine from "@/assets/svgs/layout_left_line.svg";
import homeOutline from "@/assets/svgs/home_1_line.svg";
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
    icon: homeOutline,
    navLink: "/transaction",
    navTitle: "Transaction",
  },
  {
    icon: homeOutline,
    navLink: "/links",
    navTitle: "Links",
  },
  {
    icon: homeOutline,
    navLink: "/calender",
    navTitle: "Calender",
  },
  {
    icon: homeOutline,
    navLink: "/admin-packages",
    navTitle: "Packages",
  },
  {
    icon: homeOutline,
    navLink: "/settings",
    navTitle: "Settings",
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-full flex flex-col justify-between p-4">
      <div>
        <div className="bg-[#1D1C1C] rounded-lg p-4 flex items-center justify-between">
          <Image src={logo} alt="" />
          <Image src={layoutLine} alt="" />
        </div>
        <div className="mt-8">
          {navData.map((navs) => (
            <Link key={navs.navTitle} className={` ${navs.navLink === pathname ? "bg-black text-white" : ""} `} href={navs.navLink}>
              <NavWrapper icon={navs.icon} text={navs.navTitle} />
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

const NavWrapper = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 mb-4">
      <div>
        <Image src={icon} alt="" />
      </div>
      <p className="text-[#5F6368] font-mono">{text}</p>
    </div>
  );
};
