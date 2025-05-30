"use client";
import bottomActive from "@/assets/svgs/nav-rectangle.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "@/assets/svgs/new-logo.svg";
import searchIcon from "@/assets/svgs/searchIcon.svg";
import Button from "../button/button";
// import { useTransitionRouter } from "next-view-transitions";

export const HomeNav = () => {
  const pathname = usePathname();
  // const router = useTransitionRouter()

  const navItems = [
    {
      navTitle: "Home",
      navLink: "/",
    },
    {
      navTitle: "About",
      navLink: "/about",
    },
    {
      navTitle: "Portfolio",
      navLink: "/portfolio",
    },
    {
      navTitle: "Packages",
      navLink: "/packages",
    },
    {
      navTitle: "Gallery",
      navLink: "/gallery",
    },
    // {
    //   navTitle: "Contact",
    //   navLink: "/contact",
    // },
  ];
  return (
    <div className="w-full !z-50 fixed top-0 py-12 px-5 lg:px-14 3xl:!px-44">
      <div className="flex justify-between items-center w-full ">
        <span>
          <Image src={brandLogo} alt="logo" />
        </span>
        <div className="rounded-full navBg p-2 pl-8 flex justify-between items-center">
          <div className="w-full justify-center gap-20 items-center flex">
            {navItems.map((item) => {
              return (
                <div className="relative" key={item.navTitle}>
                  <Link
                   href={item.navLink} 
                  //  onClick={(e) => {
                  //   e.preventDefault();
                  //   router.push(item.navLink, {
                  //     onTransitionReady: pageAnimation,
                  //   });
                  // }} 
                  >
                    <p
                      className={`cursor-pointer font-grotesk-medium text-base ${
                        item.navLink === pathname
                          ? "text-white font-bold"
                          : "text-[#FAFAFA]"
                      }`}
                    >
                      {item.navTitle}
                    </p>
                  </Link>

                  {pathname === item.navLink && (
                    <div className="absolute flex justify-center w-full">
                      <Image src={bottomActive} alt="" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="min-w-[200px] flex justify-end">
            <Button variant="filled" link="/session" text="Book a session" />
          </div>
        </div>
        <span>
          <Image src={searchIcon} alt="logo" />
        </span>
      </div>
    </div>
  );
};


const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};