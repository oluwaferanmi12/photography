import Image from "next/image";
import React from "react";
import icon from "@/assets/svgs/plans-icons.svg";
import arrowRight from "@/assets/svgs/right_arrow.svg";

type planCardInterface = {
  planType: "" | "Basic" | "Classic" | "Premium";
  planAmount: number;
  planBenefits: string[];
  variant?: "user" | "admin";
};

export const PlanCardProps: React.FC<planCardInterface> = ({
  planType,
  planAmount,
  planBenefits,
  variant = "user",
}) => {
  return (
    <div>
      <div
        className={`p-6 border border-off-white bg-[#0E0E0E] rounded-3xl ${
          variant === "user" ? "" : "text-[#F5F5F5]"
        }`}
      >
        <span>
          <Image src={icon} className=" " alt="icon" />
        </span>
        <p className={`mt-3 text-xl `}>{planType}</p>
        <div className="flex  my-5 items-center text-5xl border border-off-white/50 p-6 rounded-xl ">
          $ {planAmount}/ hr
        </div>
        <div className="">
          <ul className={`list-disc pl-6 ${
          variant === "user" ? "marker:text-grey text-grey" : "text-[#F5F5F5]"
        }`}>
            {planBenefits.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>

        <button className="rounded-full mt-5 text-[#BABABA]  border  border-off-white py-2 px-6 flex justify-center items-center gap-3">
          <p>Book now</p>
          <span>
            <Image src={arrowRight} alt="arrow-icon" />
          </span>
        </button>
      </div>
    </div>
  );
};
