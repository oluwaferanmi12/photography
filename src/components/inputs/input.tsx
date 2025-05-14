import React from "react";

export const Input = ({
  variant="user",
  placeholder,
}: {
  placeholder: string;
  variant: "user" | "admin"
}) => {
  const userStyle = "border-[#575252] placeholder:text-[#BABABA] border px-5 py-2 rounded-xl "
  const adminStyle = "border-bayfi-grey text-[#868D96] placeholder:text-[#868D96] border py-4 px-3 rounded-lg bg-bayfi-grey-300"
  return (
    <div className={`${variant === "user" ? userStyle : adminStyle}`}>
      <input type="text" className="bg-transparent placeholder:text-sm  focus:outline-0  w-full" placeholder={placeholder} />
    </div>
  );
};
