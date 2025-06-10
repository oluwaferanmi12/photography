"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import galleryLock from "@/assets/svgs/gallery-lock.svg";
import { useRouter } from "next/navigation";

type GalleryCardProps = {
  imgSrc: string;
  no_of_photos: string;
  cardTitle: string;
  photoDate: string;
};

export const GalleryCard = ({
  imgSrc,
  no_of_photos,
  cardTitle,
  photoDate,
}: GalleryCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    const gallerySlug = encodeURIComponent(cardTitle.toLowerCase().replace(/ /g, "-"));
    router.push(`/gallery/gallery-access/${gallerySlug}`);
  };

  return (
    <div
      className="bg-white p-3 w-full rounded-3xl flex flex-col gap-4 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-[250px] rounded-[20px]">
        <img
          src={`https://olaitanakinlade.com/${imgSrc}`}
          className="w-full  object-cover max-h-[250px] rounded-[20px]"
          alt="gallery_img"
          // fill
        />
        <div className="absolute top-2 left-2">
          <span>
            <Image src={galleryLock} alt="gallery_lock" />
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="flex justify-center rounded-[12px] items-center text-white bg-black/50 px-2 py-1">
            <p>{no_of_photos} photos</p>
          </span>
        </div>
      </div>
      <span>
        <p className="text-darker-grey font-playfair text-2xl">{cardTitle}</p>
      </span>
      <span>
        <p className="text-darker-grey font-playfair text-lg">{photoDate}</p>
      </span>
    </div>
  );
};
