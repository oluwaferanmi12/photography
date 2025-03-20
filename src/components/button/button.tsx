import React from "react";

interface ButtonTypes {
  variant?: "bordered" | "filled";
  borderVariant?: "light" | "dark";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = ({
  variant = "filled",
  borderVariant = "dark",
  size = "small",
  children,
}: ButtonTypes) => {
  const baseStyles =
    "px-6 py-2 rounded-full cursor-pointer text-base flex justify-center items-center";

  const sizeStyles = {
    small: "px-6 py-2",
    medium: "px-8 py-3",
    large: "px-10 py-4",
  };

  const variantStyles = {
    filled: "bg-white text-[#FB5711]",
    bordered: `border ${
      borderVariant === "light"
        ? "border-[#CFCFCF] text-[#3C3C3B]"
        : "border-[#3C3C3B] text-[#060605] "
    } backdrop-blur-2xl text-base uppercase font-mono`,
  };

  return (
    <>
      <button
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} `}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
