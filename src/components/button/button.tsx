import Link from "next/link";
import React from "react";

interface ButtonTypes {
  variant?: "bordered" | "filled";
  borderVariant?: "light" | "dark";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  text?: string;
  link?: string;
}

const Button = ({
  variant = "filled",
  borderVariant = "dark",
  size = "small",
  children,
  text,
  link,
}: ButtonTypes) => {
  const baseStyles =
    "px-6 py-2 rounded-full cursor-pointer text-base flex justify-center items-center";

  const sizeStyles = {
    small: "px-6 py-2",
    medium: "px-8 py-3",
    large: "px-10 py-4",
  };

  const variantStyles = {
    filled: "bg-light-brown font-semibold text-darker-grey",
    bordered: `border ${
      borderVariant === "light"
        ? "border-[#CFCFCF] text-[#3C3C3B]"
        : "border-[#3C3C3B] text-[#060605] "
    } backdrop-blur-2xl text-base uppercase font-mono`,
  };

  const ButtonComponent = (
    <button
      className={`${baseStyles}   ${sizeStyles[size]} ${variantStyles[variant]} `}
    >
      {text}
      {children}
    </button>
  );

  return link ? <Link href={link}>{ButtonComponent}</Link> : ButtonComponent
  
};

export default Button;
