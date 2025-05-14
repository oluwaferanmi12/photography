"use client";

import closeIcon from "@/assets/svgs/Admin_svgs/modal-cancel.svg";
import { Drawer } from "antd";
import { useMediaQuery } from "usehooks-ts";
import { ReactNode } from "react";
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
