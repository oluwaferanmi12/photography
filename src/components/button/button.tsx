import Link from "next/link";
import React from "react";

interface ButtonTypes {
  variant?: "bordered" | "filled" | "black" ;
  borderVariant?: "light" | "dark" | "yellow";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  text?: string;
  link?: string;
  widthFull?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textColor?: string;
}

const Button = ({
  variant = "filled",
  borderVariant = "dark",
  size = "small",
  children,
  text,
  link,
  widthFull,
  textColor,
  onClick,
}: ButtonTypes) => {
  const baseStyles = `px-6 py-2 ${
    widthFull ? "w-full" : "w-auto"
  } rounded-full cursor-pointer text-base flex justify-center items-center`;

  const sizeStyles = {
    small: "px-6 py-2",
    medium: "px-10 py-2",
    large: "px-10 py-4",
  };

  const variantStyles = {
    filled: "bg-light-brown font-semibold text-darker-grey",
    black: "bg-darker-grey text-white",
    bordered: `border ${
      borderVariant === "light"
        ? "border-[#CFCFCF] text-[#3C3C3B]"
        : borderVariant === "dark"
        ? "border-[#3C3C3B] text-[#060605]"
        : "border-[#FBFAF7] text-[#FBFAF7] bg-transparent "
    }  text-base font-mono`,
  };

  const ButtonComponent = (
    <button
      onClick={onClick}
      className={`${baseStyles} ${textColor}   ${sizeStyles[size]} ${variantStyles[variant]} `}
    >
      {text}
      {children}
    </button>
  );

  return link ? <Link href={link}>{ButtonComponent}</Link> : ButtonComponent;
};

export default Button;
