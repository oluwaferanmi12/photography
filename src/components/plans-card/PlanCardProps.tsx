"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import icon from "@/assets/svgs/plans-icons.svg";
import arrowRight from "@/assets/svgs/right_arrow.svg";
import { Switch, Modal } from "antd";
import stoneDot from "@/assets/svgs/stone-dots.svg";
import { useRouter } from "next/navigation";
import { ModalWrapper } from "../modal-wrapper/modal-wrapper";
import { CustomModal } from "../custom-modail/custom-modal";
import { ContactFrom } from "../contact-form/contact-form";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import { toast } from "sonner";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import moment from "moment-timezone";
import {
  BookedSlotInterface,
  BookingCalendar,
  TimeScheduleInterface,
} from "../../../interface/interface";
import { apiCall } from "@/axios/axios";
import UserCalendar from "../schedule-date/user-pick-date";

type planCardInterface = {
  planType?: string;
  planAmount?: number;
  planDescription?: string;
  variant?: "user" | "admin";
  planActiveness?: boolean;
  packages?: any;
  editClicked?: () => void;
  title?: string;
};

export const PlanCardProps: React.FC<planCardInterface> = ({
  planType,
  planAmount,
  planDescription,
  planActiveness,
  variant = "user",
  packages,
  editClicked,
  title,
}) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<BookingCalendar>();
  const userTimezone = moment.tz.guess();
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const userTimezoneOffset = moment.tz(userTimezone).utcOffset();
  const userTimezoneOffsetInHours = userTimezoneOffset / 60;
  const [selectedDayName, setSelectedDayName] = useState("");
  const [availableTimes, setAvailableTimes] = useState<number[]>([]);
  const [bookedSlots, setBookedSlots] = useState<BookedSlotInterface[]>([]);
  const [slots, setSlots] = useState<BookingCalendar[]>([]);
  const [firstStep, setFirstStep] = useState(true);
  const [selectedDuration, setSelectedDuration] =
    useState<TimeScheduleInterface>();
  const [showTerms, setShowTerms] = useState(false);
  const [payload, setPayload] = useState({
    slotId: "",
    start: "",
    end: "",
    email: "",
    name: "",
    description: "",
    packageId: "",
    phone: "",
    address: "",
    timezone: "",
  });

  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  function toLocalISOString(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
  }

  const handleBookSession = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedDuration) {
      toast.error("Please select a date and time");
      return;
    }
    try {
      const dateObj = new Date(selectedDate);
      dateObj.setHours(
        selectedDuration.start + userTimezoneOffsetInHours,
        0,
        0,
        0
      );
      const payloads = {
        ...payload,
        slotId: selectedSlot?.id || "",
        start: toLocalISOString(dateObj),
        end: toLocalISOString(
          new Date(
            dateObj.setHours(
              selectedDuration.end + userTimezoneOffsetInHours,
              0,
              0,
              0
            )
          )
        ),
        timezone: moment.tz.guess(),
      };
      const result = await apiCall("post", "/Bookings", payloads);
      toast.success("Reservation successful");
      setShowModal(false);
      setIsThankYouModalOpen(true);
    } catch (error) {
      toast.error("Booking failed");
      console.error("Booking error:", error);
    }
  };

  const isTimeBooked = (date: Date, hour: number): boolean => {
    if (!bookedSlots.length) return false;

    const dateString = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    const bookingsForDate = bookedSlots.find(
      (slot) => slot.date === dateString
    );

    if (!bookingsForDate) return false;

    return bookingsForDate.bookings.some((booking) => {
      const bookingHour = new Date(booking.start).getHours();
      return bookingHour === hour;
    });
  };

  const handleDaySelect = (dayName: string, times: number[]) => {
    setSelectedDayName(dayName);
    setAvailableTimes(times);
    console.log("Fixes here, and testing here");
    if (times.length > 0 && !selectedDuration && selectedDate) {
      const firstAvailableTime = times.find(
        (time) => !isTimeBooked(selectedDate, time)
      );

      if (firstAvailableTime !== undefined) {
        setSelectedDuration({
          start: firstAvailableTime,
          end: firstAvailableTime + 1,
        });
      }
    }
  };

  const getBookingSlots = async () => {
    try {
      const result = await apiCall("get", "/Bookings/Calendar");
      // Make sure we're accessing calendar property correctly
      if (result.data?.calendar) {
        setSlots([result.data.calendar]); // Wrap in array to match expected type
        setBookedSlots(result.data.bookedSlots || []);
        setSelectedSlot(result.data.calendar);
      }
    } catch (e) {
      console.error("Error fetching booking slots:", e);
    }
  };

  useEffect(() => {
    getBookingSlots();
  }, []);

  return (
    <div>
      <Modal
        open={isThankYouModalOpen}
        onCancel={() => setIsThankYouModalOpen(false)}
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
                Thank you for your reservation
              </h3>
            </div>
            <span>
              <Image
                src={rollingImage}
                className="w-28 h-28"
                alt="rollingImage"
              />
            </span>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <p className="text-sm text-light-brown">
              Thank you for reserving a spot with me, I will check my
              availability and respond to your booking in less than 24hrs, If
              confirmed you will receive a payment link and a confirmation email
              from me, Please watch out for your junks and texts.
            </p>
            <div>
              <p className="text-light-brown text-sm">yours sincerely</p>
              <p className="text-[#5A5A50] text-sm font-valentiamo-reg">
                shotbyportable
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        className="sessionForm_modal custom-scroll-modal"
        closeIcon={null}
        width={900}
        centered={true}
      >
        <div className="py-8 px-10 w-full relative z-50">
          {firstStep ? (
            <>
              <UserCalendar
                slot={selectedSlot}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                onDaySelect={handleDaySelect}
              />

              {selectedDate && (
                <div className="bg-[#0E0E0E] p-4 rounded-lg border border-[#2D2C2C] mt-4">
                  {availableTimes.length > 0 ? (
                    <>
                      <h3 className="text-lg font-medium mb-2 text-[#F5F5F5]">
                        Available times for {selectedDayName}({userTimezone}):
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {availableTimes.map((time) => {
                          const isBooked = isTimeBooked(selectedDate, time);

                          return (
                            <button
                              type="button"
                              key={time}
                              onClick={() => {
                                if (!isBooked) {
                                  setSelectedDuration({
                                    start: time,
                                    end: time + 1,
                                  });
                                  setFirstStep(false);
                                }
                              }}
                              disabled={isBooked}
                              className={`px-8 py-2 rounded-lg border ${
                                selectedDuration?.start === time
                                  ? "bg-[#D9C9AE] text-[#151515] border-[#D9C9AE]"
                                  : isBooked
                                  ? "border-[#2D2C2C] text-[#2D2C2C] cursor-not-allowed"
                                  : "border-[#2D2C2C] cursor-pointer text-[#BABABA] hover:bg-[#2D2C2C]"
                              }`}
                            >
                              {(time + userTimezoneOffsetInHours)
                                .toString()
                                .padStart(2, "0")}
                              :00
                              {isBooked && (
                                <span className="text-xs block">Booked</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <p className="text-[#BABABA]">
                      {selectedDayName
                        ? `No available times for ${selectedDayName}`
                        : "Please select a date"}
                    </p>
                  )}
                </div>
              )}
            </>
          ) : (
            <ContactFrom
              package_={packages}
              handleCreateBooking={handleBookSession}
              setCreatePayload={setPayload}
              createPayload={payload}
              selectedService={selectedService}
              setSelectedService={() => setSelectedService("")}
              onSubmit={handleReserveSpot}
              setShowTerms={setShowTerms}
              variant2
            />
          )}
        </div>
      </Modal>
      <div
        className={` py-2 px-6  border border-off-white  rounded-3xl ${
          variant === "user"
            ? "text-[#999999] bg-[#F8F8F805] w-full max-w-[500px]"
            : "text-[#F5F5F5] bg-[#0E0E0E]"
        }`}
      >
        {variant === "admin" && (
          <div className="flex justify-between items-center">
            <span>
              <Image src={icon} className=" " alt="icon" />
            </span>
            <div className="flex items-center gap-4">
              <p>{planActiveness ? "Active" : "Inactive"}</p>
              <Switch
                defaultChecked={planActiveness}
                checked={planActiveness}
                className="custom_switch"
              />
            </div>
          </div>
        )}
        <p
          className={`mt-3 ${
            variant === "user" ? "text-[#F8F8F8F2]/95" : ""
          } text-xl text-white`}
        >
          {planType}
        </p>
        {planAmount && (
          <div
            className={`flex items-center text-5xl p-6 rounded-xl ${
              variant === "user"
                ? "border-0 text-[#EAECF0] font-light"
                : "border border-[#E9EBF8] mt-5"
            }  `}
          >
            $ {planAmount} {title === "Events" && "/hr"}
          </div>
        )}

        <div className="">
          {variant === "user" ? (
            <>
              {planDescription?.split("*").map((item, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  <span>
                    <Image src={stoneDot} alt="stoneDot" />
                  </span>
                  <p className="text-[#F8F8F880] text-base font-normal">
                    {item.trim()}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <ul className={`list-disc pl-6 my-4 text-[#F5F5F5]`}>
              {planDescription?.split("*").map((item, index) => (
                <li className="text-base  font-normal" key={index}>
                  {item.trim()}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Ending Buttons */}
        {variant === "user" ? (
          <div className="relative mt-5 inline-block p-[1.5px] rounded-full bg-gradient-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
            <button
              onClick={() => {
                setShowModal(true);
                // router.push(
                //   `/session?serviceId=${packages.serviceId}&packageId=${packages.id}`
                // );
              }}
              className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full"
            >
              Book now
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              if (editClicked) {
                editClicked();
              }
            }}
            className="rounded-full cursor-pointer mt-5 text-[#BABABA]  border  border-off-white py-2 px-6 flex justify-center items-center gap-3"
          >
            <p>Edit package</p>
            <span>
              <Image src={arrowRight} alt="arrow-icon" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
