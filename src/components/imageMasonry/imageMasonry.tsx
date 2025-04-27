import Image from "next/image";

import MI1 from "@/assets/svgs/masonryImages/MI1.svg";
import MI2 from "@/assets/svgs/masonryImages/MI2.svg";
import MI3 from "@/assets/svgs/masonryImages/MI3.svg";
import MI4 from "@/assets/svgs/masonryImages/MI4.svg";
import MI5 from "@/assets/svgs/masonryImages/MI5.svg";
import MI6 from "@/assets/svgs/masonryImages/MI6.svg";
import MI7 from "@/assets/svgs/masonryImages/MI7.svg";
import MI8 from "@/assets/svgs/masonryImages/MI8.svg";
import MI9 from "@/assets/svgs/masonryImages/MI9.svg";
import { useRef } from "react";

const columns = [
  [MI1, MI3], // first column
  [MI2, MI7], // second column (staggered)
  [MI4], // middle column (centered vertically)
  [MI5, MI8], // fourth column (staggered)
  [MI6, MI9], // fifth column
];

const cardImageData = [MI1, MI2, MI3, MI4, MI5, MI6, MI7, MI8, MI9];

export default function ImageMasonry() {
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className=" hidden lg:grid grid-cols-5 gap-4 py-10 min-h-screen">
        {columns.map((column, colIndex) => {
          const isOffsetColumn = colIndex === 1 || colIndex === 3;
          const isMiddleColumn = colIndex === 2;
          const firstAndLastColumn = colIndex === 0 || colIndex === 4;

          return (
            <div
              key={colIndex}
              className={`flex flex-col gap-4 w-full ${
                isOffsetColumn ? "mt-20" : ""
              } ${isMiddleColumn ? "justify-center" : "justify-start"}`}
            >
              {column.map((src, idx) => {
                const shouldApplyGrayscale =
                  (colIndex === 1 || colIndex === 4) && idx === 0;

                return (
                  <div
                    key={idx}
                    className={`relative ${
                      firstAndLastColumn
                        ? "aspect-[16/9] lg:aspect-[1/2]"
                        : "lg:aspect-[3/4]"
                    } w-full overflow-hidden rounded-xl shadow-lg h-[400px]`}
                  >
                    <Image
                      src={src}
                      alt={`Image ${idx}`}
                      fill
                      className={`object-cover ${
                        shouldApplyGrayscale ? "grayscale" : ""
                      }`}
                      quality={90}
                      sizes="100vw"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <section
        className="pb-16 lg:hidden flex flex-col justify-center items-center "
        ref={container}
      >
        {cardImageData.map((item, index) => {
          return (
            <div key={index} className="h-screen sticky top-0">
              <div className="w-[300px] h-[300px]">
                <Image
                  src={item}
                  alt={`Image ${index}`}
                  // fill
                  className="object-fill w-[300px] h-[300px]"
                  quality={90}
                  width={300}
                  // sizes="100vw"
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
