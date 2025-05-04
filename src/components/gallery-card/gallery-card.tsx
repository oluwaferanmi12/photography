import Image, { StaticImageData } from "next/image";
import React from "react";
import galleryLock from "@/assets/svgs/gallery-lock.svg";

type GalleryCardProps = {
  imgSrc: StaticImageData;
  no_of_photos: number;
  cardTitle: string;
  photoDate: string;
};

export const GalleryCard = ({ imgSrc, no_of_photos, cardTitle, photoDate }: GalleryCardProps) => {
  return (
    <div className="bg-white p-3 rounded-3xl flex flex-col gap-4">
      <div className="relative h-[200px] rounded-[20px]">
        <Image
          src={imgSrc}
          className="w-full h-auto rounded-[20px] object-cover"
          alt="gallery_img"
        />
        <div className="absolute top-2 left-4">
            <span>
                <Image src={galleryLock} alt="gallery_lock" />
            </span>
        </div>
        <div className="absolute bottom-2 right-4">
          <span className="flex justify-center items-center text-white  bg-black/50 px-2 py-1">
            <p>{no_of_photos} photos</p>
          </span>
        </div>
      </div>
      <span>
        <p className="text-darker-grey font-playfair">{cardTitle}</p>
      </span>
      <span>
        <p className="text-darker-grey font-playfair">{photoDate}</p>
      </span>
    </div>
  );
};
