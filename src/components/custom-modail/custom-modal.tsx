import { BackDropWrapper } from "@/components/custom-modail/backdrop-wrapper";
import { ReactNode } from "react";

export const CustomModal = ({
  modalActive,
  setModalActive,
  children
}: {
  modalActive: boolean;
  setModalActive: (val: boolean) => void;
  children: ReactNode
}) => {
  return (
    <BackDropWrapper showModal={modalActive} setShowModal={setModalActive}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-[#282824] rounded-lg p-4 border border-[red] "
      >
        {children}
      </div>
    </BackDropWrapper>
  );
};
