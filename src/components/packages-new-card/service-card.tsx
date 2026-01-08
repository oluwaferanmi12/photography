import { Service } from "@/app/(user)/packages/page";
import React from "react";
import Image from "next/image";
import { baseUrl } from "@/lib/base-url";

export const NewServiceCard = ({ item }: { item: Service }) => {
  return (
    <div className="bg-[#282824] p-4 rounded-[20px] mb-3">
      <div className="h-100 w-full relative">
        <Image
          layout="fill"
          className="object-cover rounded-2xl"
          src={`${baseUrl + item.images[0].imageUrl}`}
          alt=""
        />
      </div>
      <div>
        <p className="text-3xl font-grotesk-medium text-[#FBFAF7] py-3">
          {item.title}
        </p>
        <p className="text-[#D9C9AE] text-base">{item.description}</p>
        <div className="mt-4">
          <button className="border border-[#FBFAF7] px-12 py-2 rounded-full">
            View packages
          </button>
        </div>
      </div>
    </div>
  );
};
