import React from "react";

export const Input = ({
  placeholder,
}: {
  placeholder: string;
}) => {
  return (
    <div className="border-[#575252] placeholder:text-[#BABABA] border px-5 py-2 rounded-xl ">
      <input type="text" className="bg-transparent w-full" placeholder={placeholder} />
    </div>
  );
};
