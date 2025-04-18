import Image from "next/image";
import React from "react";
import rightArrow from "@/assets/svgs/deg-right-arrow.svg";

type TopAreaInterface = {
  icon?: string;
  btn?: boolean;
};

interface ServiceWrapperCardProps {
  text: string;
  topArea: TopAreaInterface;
}

export const ServiceWrapperCard: React.FC<ServiceWrapperCardProps> = ({
  text,
  topArea,
}) => {
  const showButton = topArea.btn && !topArea.icon;
  return (
    <div className="border border-off-white px-8 py-10 w-[400px] rounded-3xl text-white space-y-6">
      <div>
        {topArea.icon ? (
          <span>
            <Image src={topArea.icon} alt="icon" />
          </span>
        ) : showButton ? (
          <button
            className={`px-4 py-2 rounded-full text-base font-medium bg-transparent text-white border-2 relative z-0 flex items-center gap-4`}
            style={{
              background:
                "linear-gradient(#000, #000) padding-box, linear-gradient(90deg, #FE6309, #C16DE8, #F2994A, #BC11E7) border-box",
              border: "2px solid transparent",
            }}
          >
            
            View Testimony
            <span>
              <Image src={rightArrow} alt="icon" />
            </span>
          </button>
        ) : null}
      </div>

      <p className="text-5xl leading-tight max-w-[200px]">{text}</p>
    </div>
  );
};
