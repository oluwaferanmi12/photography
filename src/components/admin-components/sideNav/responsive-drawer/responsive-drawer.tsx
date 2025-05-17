"use client";

// import lenis from '@studio-freight/lenis';
import closeIcon from "@/assets/svgs/Admin_svgs/modal-cancel.svg";
import { Drawer } from "antd";
import { useMediaQuery } from "usehooks-ts";
import { ReactNode, useEffect } from "react";
import Image from "next/image";

interface ResponsiveDrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export const ResponsiveDrawer = ({
  open,
  onClose,
  children,
  title,
}: ResponsiveDrawerProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const lenis = typeof window !== "undefined" ? window.lenis : undefined;

    if (
      lenis &&
      typeof lenis.stop === "function" &&
      typeof lenis.start === "function"
    ) {
      if (open) {
        lenis.stop(); // 🚫 stop scroll when drawer opens
        document.body.style.overflow = "hidden"; // fallback
      } else {
        lenis.start(); // ✅ resume scroll
        document.body.style.overflow = ""; // reset
      }
    }

    return () => {
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Drawer
      placement={isMobile ? "bottom" : "right"}
      open={open}
      onClose={onClose}
      height={isMobile ? "85%" : "100%"}
      width={isMobile ? undefined : 580}
      className="!rounded-tl-xl md:!rounded-l-xl "
      closeIcon={null}
    >
      <div className="flex justify-between items-center py-4">
        <p className="font-semibold text-xl">{title}</p>
        <span>
          <Image
            onClick={onClose}
            src={closeIcon}
            className="cursor-pointer"
            alt="close icon"
          />
        </span>
      </div>
      <hr className="py-4" />
      {children}
    </Drawer>
  );
};
