import Image from "next/image";
import mouseIcon from "@/assets/svgs/mouse-simple.svg";

// components/ScrollDownCard.tsx
export default function ScrollDownCard() {
  return (
    <div className="navBg w-[120px] h-[101px] rounded-[22px] flex flex-col items-center justify-center gap-[10px] text-white">
      <Image src={mouseIcon} alt="" />
      <span className="text-white/95 text-sm leading-none">
        Scroll Down
      </span>
    </div>
  );
}
