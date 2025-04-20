import Image from "next/image";
import HS1 from "@/assets/images/HS1.png";
import HS2 from "@/assets/images/HS2.png";
import HS3 from "@/assets/images/HS3.png";
import HS4 from "@/assets/images/HS4.png";
import HS5 from "@/assets/images/HS5.png";
import HS6 from "@/assets/images/HS6.png";
import HS7 from "@/assets/images/HS7.png";
import HS8 from "@/assets/images/HS8.png";
import HS9 from "@/assets/images/HS9.png";
import { useRef } from "react";

const columns = [
  [HS1, HS2], // first column
  [HS3, HS4], // second column (staggered)
  [HS5], // middle column (centered vertically)
  [HS6, HS7], // fourth column (staggered)
  [HS8, HS9], // fifth column
];

const cardImageData = [HS1, HS2, HS3, HS4, HS5, HS6, HS7, HS8, HS9];

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
              {column.map((src, idx) => (
                <div
                  key={idx}
                  className={`relative ${
                    firstAndLastColumn
                      ? "aspect-[16/9] lg:aspect-[1/2]"
                      : "lg:aspect-[3/4]"
                  }  w-full overflow-hidden rounded-xl shadow-lg  h-[400px]`}
                >
                  <Image
                    src={src}
                    alt={`Image ${idx}`}
                    fill
                    className="object-cover"
                    quality={90}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <section className="pb-16 lg:hidden flex flex-col justify-center items-center " ref={container}>
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
