import React from "react";
import mail from "@/assets/svgs/mail.svg";
import arrowRight from "@/assets/svgs/footer-send-arrow.svg";
import Image from "next/image";

export const FooterTwo = () => {
  return (
    <div className="bg-[#282824] w-full p-28">
      <div className="flex justify-between">
        <div className="flex w-1/2 flex-col gap-3">
          <h3 className="text-5xl font-normal">Your moment, forever </h3>
          <p className="text-base text-white/60">
            From first call to final gallery, I’m here to make it easy and
            meaningful.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#FFF8F2] text-xl font-semibold">
            Subscribe to our newletter
          </p>
          <div className="w-full items-center flex gap-4 border-b-2 border-bayfi-grey pb-3">
            <div className="flex gap-3 w-full items-center">
              <span>
                <Image src={mail} className="w-4 h-4" alt="mail" />
              </span>
              <input
                type="text"
                placeholder="Enter your email"
                className="border-0 focus:border-0 text-[#FFF8F2] text-xl placeholder:text-[#FFF8F2] focus:outline-none bg-transparent"
              />
            </div>

            <span>
              <Image src={arrowRight} alt="arrowRight" />
            </span>
          </div>
        </div>
      </div>
      <hr className="border-white/10 my-16" />
    </div>
  );
};
