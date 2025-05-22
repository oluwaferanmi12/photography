import React, { ChangeEvent, ChangeEventHandler } from "react";

export const Input = ({
  variant = "user",
  placeholder,
  value,
  type = "text",
  onChangeInput
}: {
  placeholder: string;
  variant: "user" | "admin";
  value?: string;
  type?: "text" | "number";
  onChangeInput? : (e) => void;
}) => {
  const userStyle =
    "border-[#575252] placeholder:text-[#BABABA] border px-5 py-2 rounded-xl ";
  const adminStyle =
    "border-bayfi-grey text-[#868D96] placeholder:text-[#868D96] border py-4 px-3 rounded-lg bg-bayfi-grey-300";
  return (
    <div className={`${variant === "user" ? userStyle : adminStyle}`}>
      <input
        value={value}
        onChange={onChangeInput}
        type={type}
        className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
        placeholder={placeholder}
      />
    </div>
  );
};
