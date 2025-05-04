import Image from "next/image";
import React, { useState } from "react";
import video_icon from "@/assets/svgs/video-play.svg";

export const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="homeBanner flex justify-center items-center relative">
      {!showVideo ? (
        <span
          onClick={() => setShowVideo(true)}
          className="cursor-pointer z-10"
        >
          <Image src={video_icon} className="cursor-pointer" alt="video_icon" />
        </span>
      ) : (
        <video
          className="z-10 rounded-xl"
          controls
          autoPlay
          width="640"
          height="360"
        >
          <source src="/videos/pastorKen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
