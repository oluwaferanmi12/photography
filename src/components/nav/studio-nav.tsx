// components/GlassNavbar.tsx
import Image from "next/image";
import logo from "@/assets/svgs/brand-logo.svg";
import arrowRightBg from "@/assets/svgs/arrow-right-bg.svg";

export const GlassNavbar = () => {
  return (
    <div className="fixed w-full z-20 flex justify-center px-4 pt-12">
      <nav className="navBg w-full max-w-[1340px] h-[70px] rounded-[35px] px-6 md:px-10 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="SB" width={40} height={40} />
        </div>
        <ul className="hidden md:flex items-center gap-12 text-white/90">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Studios</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a
          href="#"
          className="h-11 px-5 rounded-full bg-white text-[#0D150B] font-medium inline-flex items-center gap-2 shadow-sm"
        >
          <p className="text-[#1B1810] font-grotesk-semi-bold">Book a studio</p>
          <span className="grid place-items-center w-6 h-6 rounded-full bg-[#7B6043] text-white text-xs">
            <Image src={arrowRightBg} alt="" />
          </span>
        </a>
      </nav>
    </div>
  );
};
