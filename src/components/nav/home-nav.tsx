"use client";
import bottomActive from "@/assets/svgs/nav-rectangle.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "@/assets/svgs/brand-logo.svg";
import searchIcon from "@/assets/svgs/searchIcon.svg";
import Button from "../button/button";

export const HomeNav = () => {
  const pathname = usePathname();

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
      navTitle: "Pricing & Packages",
      navLink: "/pricing",
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
    <div className="w-full z-50 fixed top-0 py-12 px-5 lg:px-14 3xl:px-28">
      <div className="hidden lg:flex justify-between items-center w-full ">
        <span>
          <Image src={brandLogo} alt="logo" />
        </span>
        <div className="rounded-full navBg p-2 pl-8 flex justify-between items-center">
          <div className="w-full justify-center gap-20 items-center flex">
            {navItems.map((item) => {
              return (
                <div className="relative" key={item.navTitle}>
                  <Link href={item.navLink}>
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
            <Button variant="filled" text="Book a session" />
          </div>
        </div>
        <span>
          <Image src={searchIcon} alt="logo" />
        </span>
      </div>
      <div className="flex lg:hidden justify-between items-center">
        <span>
          <Image src={brandLogo} alt="logo" />
        </span>
      </div>
      {/* <Row justify={'space-between'}>
        <Col xs={12}>
          <div className="rounded-full navBg  py-2 px-2 flex justify-between items-center">
            <div className="w-full justify-center gap-20 items-center flex">
              {navItems.map((item) => {
                return (
                  <div className="relative" key={item.navTitle}>
                    <Link href={item.navLink}>
                      <p
                        className={`cursor-pointer font-grotesk-medium text-base ${
                          item.navLink === pathname
                            ? "text-[#FB5711]"
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
              <button className="bg-white px-6 py-2 rounded-full cursor-pointer text-[#FB5711] font-grotesk-medium text-base">
                Book a session
              </button>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};
