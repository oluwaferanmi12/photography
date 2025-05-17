import React from "react";

export const AdminSubmitButton = ({text} : {text: string}) => {
  return (
    <button className="w-full cursor-pointer text-white py-4 px-8 rounded-full bg-[#1B1B1B]">
      {text}
    </button>
  );
};
