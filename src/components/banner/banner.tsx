// import Image from "next/image";
import React from "react";
// import video_icon from "@/assets/svgs/video-play.svg";

export const Banner = () => {

  return (
    <section className="pt-20 relative h-screen overflow-hidden ">
      <div className="flex justify-center">
        <video
          className="absolute top-0 left-0 grayscale overflow-hidden  h-[650px] w-screen object-cover"
          width="640"
          height="360"
          autoPlay
          loop
          muted
          playsInline
          poster={"https://firebasestorage.googleapis.com/v0/b/lacasa-6b23c.appspot.com/o/homeHeaderImage--cropped.jpeg?alt=media&token=b7c9ed97-7637-49e7-99e4-30cc245bbb70"}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/lacasa-6b23c.appspot.com/o/Pastor%20Ken%20Birthday%20Reel.mp4?alt=media&token=de7e00bb-2cda-424a-9583-92eebc40cb63"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* <Image src={video_icon} alt="" className="w-full" /> */}
      </div>
    </section>
  );
};
