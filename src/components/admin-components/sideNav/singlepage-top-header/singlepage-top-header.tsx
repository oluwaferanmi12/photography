import Image, { StaticImageData } from "next/image";
import React from "react";
import editIcon from "@/assets/svgs/Admin_svgs/admin-edit.svg";

export const SinglePageTopHeader = ({
  img,
  singleComponentSlug,
  description,
  icon = false,
  editHandler
}: {
  img?: StaticImageData;
  singleComponentSlug: string;
  description: string;
  icon?: boolean;
  editHandler ?: () => void
}) => {
  return (
    <div className="flex  justify-between items-start border p-4 rounded-xl">
      <div className="flex gap-2">
        {img && (
          <div>
            <Image src={img ?? ""} alt="gallery_thumbnail" />
          </div>
        )}

        <div>
          {typeof singleComponentSlug === "string" && (
            <h3 className="text-2xl font-semibold mb-4">
              {decodeURIComponent(singleComponentSlug)}
            </h3>
          )}
          <p className="text-base font-normal text-[#333333]">{description}</p>
        </div>
      </div>
      {icon && (
        <div onClick={editHandler} className="border cursor-pointer border-[#EFEEEE] shadow shadow-black/5 rounded-xl flex gap-3 items-center py-2 px-6">
          <Image src={editIcon} alt="edit_icon" />
          <p className="text-base font-normal text-[#615F5F]">Edit</p>
        </div>
      )}
    </div>
  );
};
