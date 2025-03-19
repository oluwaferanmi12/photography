"use client";

import { HeaderWrapper } from "@/components/headerWrapper/header-wrapper";
import React, { useState } from "react";
import image1 from "@/assets/images/Frame1.png";
import image2 from "@/assets/images/Frame2.png";
import image3 from "@/assets/images/Frame3.png";
import image4 from "@/assets/images/Frame4.png";
import image5 from "@/assets/images/Frame5.png";
import image6 from "@/assets/images/Frame6.png";
import image7 from "@/assets/images/Frame7.png";
import image8 from "@/assets/images/Frame8.png";
import image9 from "@/assets/images/Frame9.png";
import image10 from "@/assets/images/Frame10.png";
import image11 from "@/assets/images/Frame11.png";
import image12 from "@/assets/images/Frame12.png";
import image13 from "@/assets/images/Frame13.png";
import image14 from "@/assets/images/Frame14.png";
import image15 from "@/assets/images/Frame15.png";
import image16 from "@/assets/images/Frame16.png";
import image17 from "@/assets/images/Frame17.png";
import image18 from "@/assets/images/Frame18.png";
import Image from "next/image";
import { Footer } from "@/components/footer/footer";


const catalogueData = [
  {
    catalogueName: "BEST OF",
    catalogueImage: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
  },
  {
    catalogueName: "ARCHITECTUAL",
    catalogueImage: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
  },
  {
    catalogueName: "LIFESTYLE",
    catalogueImage: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
  },
  {
    catalogueName: "AERIAL",
    catalogueImage: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
  },
  {
    catalogueName: "FOOD & BEVERAGE",
    catalogueImage: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
    ],
  },
];

const Catalogue = () => {
  const [catalogueTab, setCatalogueTab] = useState('BEST OF');

   
    const selectedCatalogue = catalogueData.find(
      (item) => item.catalogueName === catalogueTab
    );

  return (
    <div>
      <HeaderWrapper headerTitle="About Portable hub" landingBg="catalogueBG" />
      <div className="p-7">
        <div className="bg-white rounded-2xl py-3 px-8 flex gap-5 justify-center items-center h-[200px] ">
          {catalogueData.map((item) => (
            <>
              <button
              key={item.catalogueName}
              onClick={() => setCatalogueTab(item.catalogueName)}
              className={` xl:w-56 flex justify-center items-center text-base font-grotesk-medium rounded-full py-2 px-8 transition-all ${
                catalogueTab === item.catalogueName
                  ? "bg-white text-black border border-black"
                  : "bg-black text-white"
              }`}
            >
              {item.catalogueName}
            </button>
            </>
          ))}
        </div> 
      </div>
      <div className="p-7 mb-24 grid grid-cols-3 gap-12">
      {selectedCatalogue?.catalogueImage.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            className="w-full h-[700px] object-cover"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Catalogue;
