import servicesArrow from "@/assets/svgs/services-right-arrow.svg";
import Image from "next/image";

export const ServicesAccordian = ({
  num,
  serviceTitle,
}: {
  num: string;
  serviceTitle: string;
}) => {
  return (
    <>
      <div className="flex justify-between items-center border-b border-[#CFCFCF] mb-5 pb-4">
        <div className="flex gap-5 items-center">
          <span className="text-[#635E5E] text-xl ">{num}</span>
          <p className=" text-[#74787A] text-4xl font-grotesk-medium "> {serviceTitle} </p>
        </div>
        <div>
          <Image src={servicesArrow}  alt="arrow" />
        </div>
      </div>
    </>
  );
};
