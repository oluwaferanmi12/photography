"use client";

import { useState } from "react";
import Image from "next/image";
import playIcon from "@/assets/svgs/video-play.svg";

const VIDEO_ID = "t6TFiOohB-o";

export const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=${
    isPlaying ? 1 : 0
  }&mute=0&loop=0&controls=1&modestbranding=1&rel=0&playsinline=1`;

  return (
    <section className="relative w-full h-screen overflow-hidden rounded-[24px]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={videoSrc}
        title="Shotbyportable banner video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {!isPlaying && (
        <button
          type="button"
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={playIcon}
            alt=""
            aria-hidden="true"
            className="h-20 w-20 md:h-24 md:w-24"
          />
        </button>
      )}
    </section>
  );
};
