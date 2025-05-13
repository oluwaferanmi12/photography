"use client";

import { Drawer } from "antd";
import { useMediaQuery } from "usehooks-ts";
import { ReactNode } from "react";

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
      title={title || "Booking Details"}
      placement={isMobile ? "bottom" : "right"}
      open={open}
      onClose={onClose}
      height={isMobile ? "85%" : undefined}
      width={isMobile ? undefined : 480}
      className="!rounded-t-xl md:!rounded-l-xl"
    >
      {children}
    </Drawer>
  );
};