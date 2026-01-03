"use client";
// import type { Metadata } from "next";
import { HomeNav } from "@/components/nav/home-nav";
import Image from "next/image";
import bg_image from "@/assets/images/body_background.png";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Modal } from "antd";
import { useTermsStore } from "@/store/useTermsStore";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
// import { ViewTransitions } from "next-view-transitions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    photoshootTermsAccepted,
    termsAndConditionsAccepted,
    setPhotoshootTermsAccepted,
    setTermsAndConditionsAccepted,
  } = useTermsStore();
  return (
    // <ViewTransitions>
    <>
      <Modal
        open={photoshootTermsAccepted}
        onCancel={() => setPhotoshootTermsAccepted(false)}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={600}
        centered
      >
        <div className="py-8 px-10 w-full">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <span>
                <Image src={bas_thanks} alt="bas" />
              </span>
              <h3 className="font-playfair text-5xl text-white">
                Photo Service Consent
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-sm text-light-brown leading-relaxed">
              By booking, I agree shotbyportable can photograph me and use my
              images for editing, storage, and delivery. I also agree
              shotbyportable can use selected images on the website and social
              media to promote services. I can withdraw marketing consent
              anytime by emailing . Removal of existing posts under
              shotbyportable control will be handled within 21 business days
              where reasonably possible.
            </p>
          </div>
          <div className="my-6">
            <p className="text-[#FFFFFF] font-grotesk-bold text-base">
              Questions
            </p>
            <p className="text-[#FFFFFF] font-grotesk-bold text-base">
              Contact [Bookings@shotbyportable.com].
            </p>
          </div>

          <div className="mt-3">
            <p className="text-light-brown text-sm">yours sincerely</p>
            <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
              shotbyportable
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        open={termsAndConditionsAccepted}
        onCancel={() => setTermsAndConditionsAccepted(false)}
        footer={null}
        className="sessionForm_modal"
        closeIcon={null}
        width={600}
        centered
      >
        <div className="py-8 px-10 w-full">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <span>
                <Image src={bas_thanks} alt="bas" />
              </span>
              <h3 className="font-playfair text-5xl text-white">
                Terms and Condition
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 1 Booking and Image Delivery</p>
            <p className="text-sm text-light-brown">
              - Edited high-resolution images will be delivered within 7 to 10
              business days after you have completed your image selection.
            </p>
            <p className="text-sm text-light-brown">
              - This timeline begins from the date your selections are received.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 2 Cancellations</p>
            <p className="text-sm text-light-brown">
              - To avoid a cancellation fee, clients must notify us at least 48
              hours in advance if they wish to cancel a session.
            </p>
            <p className="text-sm text-light-brown">
              - If full payment has already been made and cancellation occurs
              with less than 48 hours’ notice, a cancellation fee may apply.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 3 Deposits</p>
            <p className="text-sm text-light-brown">
              - All deposits are non-refundable and non-transferable, regardless
              of circumstances
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <p className="text-white"> 4 Late arrivals</p>
            <p className="text-sm text-light-brown">
              - Clients are allowed a 15-minute grace period after the scheduled
              start time.
            </p>
            <p className="text-sm text-light-brown">
              - A late fee of $20 will be added to your total if you arrive more
              than 15 minutes late.
            </p>
            <p className="text-sm text-light-brown">
              - Sessions will be automatically cancelled after 30 minutes of
              no-show, and the deposit
            </p>
          </div>

          <div className="mt-3">
            <p className="text-light-brown text-sm">yours sincerely</p>
            <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
              shotbyportable
            </p>
          </div>
        </div>
      </Modal>
      <div className="relative w-full">
        {/* Top gradient background */}
        <div className="absolute top-0 left-0 w-full h-[100px] pointer-events-none z-0">
          <Image
            src={bg_image}
            alt="Top Background"
            fill
            className="background-blur-3xl"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Actual content */}
        <div className="relative z-10">
          <div className="hidden md:block">
            <HomeNav />
          </div>
          <div className="block md:hidden">
            <MobileNav />
          </div>
          <div className="relative">{children}</div>
        </div>
      </div>
    </>
    // </ViewTransitions>
  );
}
