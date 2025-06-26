import { rgba } from "framer-motion";
import React, { ReactNode, useEffect } from "react";

export const BackDropWrapper = ({
  children,
  showModal,
  setShowModal,
}: {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (val: boolean) => void;
}) => {
    useEffect(() => {
        console.log(showModal , "Show modual Active")
      document.body.style.overflow = showModal ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [showModal]);
  return (
    <>
      {showModal && (
        <div
        
          className="h-screen border border-[red] flex items-center justify-center w-screen fixed"
          style={{ background: "rgba(0,0,0,0.5)", zIndex:'99999999' }}
          onClick={() => {
            setShowModal(false);
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};
