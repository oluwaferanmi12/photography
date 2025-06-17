"use client";
import bottomActive from "@/assets/svgs/nav-rectangle.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import brandLogo from "@/assets/svgs/new-logo.svg";
// import instagramIcon from "@/assets/svgs/navbar-instagram.svg";
// import facebookIcon from "@/assets/svgs/navbar-facebook.svg";
// import tiktokIcon from "@/assets/svgs/navbar-tiktok.svg";
import youtubeIcon from "@/assets/svgs/youtubeIcon.svg";
import tiktokIcon from "@/assets/svgs/tiktokIcon.svg";
import linkedinIcon from "@/assets/svgs/linkedinIcon.svg";
import instagramIcon from "@/assets/svgs/instagramIcon.svg";
import facebookIcon from "@/assets/svgs/facebookIcon.svg";
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
    <div className="w-full !z-[10000] fixed top-0 py-12 px-5 lg:px-14 3xl:!px-44">
      <div className="flex justify-between items-center w-full ">
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
                      className={`cursor-pointer font-grotesk-medium text-base ${pathname.startsWith(item.navLink)
                          ? "text-white font-bold"
                          : "text-[#FAFAFA]"
                        }`}
                    >
                      {item.navTitle}
                    </p>
                  </Link>

                  {pathname.startsWith(item.navLink) && (
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
        <div className="flex gap-3 items-center">
          <Link href='https://www.youtube.com/@Shotbyportable'>
            <Image className="cursor-pointer" src={youtubeIcon} alt="social_links" />
          </Link>
          <Link href='https://www.tiktok.com/@shotbyportable'>
            <Image className="cursor-pointer" src={tiktokIcon} alt="social_links" />
          </Link>
          <Link href='https://www.linkedin.com/in/victoria-akinade-402944175/'>
            <Image className="cursor-pointer" src={linkedinIcon} alt="social_links" />
          </Link>
          <Link href='https://www.instagram.com/shotbyportable/'>
            <Image className="cursor-pointer" src={instagramIcon} alt="social_links" />
          </Link>
          <Link href='https://www.facebook.com/victhoria.hajarlah'>
            <Image className="cursor-pointer" src={facebookIcon} alt="social_links" />
          </Link>
        </div>
        {/* <div className="flex gap-8 items-center">
          <Link href="https://www.instagram.com/shotbyportable/">
            <Image
              className="cursor-pointer"
              src={instagramIcon}
              alt="social_links"
            />
          </Link>
          <Link href="https://www.facebook.com/victhoria.hajarlah">
            <Image
              className="cursor-pointer"
              src={facebookIcon}
              alt="social_links"
            />
          </Link>
          <Link href="https://www.tiktok.com/@shotbyportable">
            <Image
              className="cursor-pointer"
              src={tiktokIcon}
              alt="social_links"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};
