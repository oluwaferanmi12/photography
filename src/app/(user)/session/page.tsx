"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import HS4 from "@/assets/images/HS4.png";
import calendar from "@/assets/svgs/calendar_template.svg";
import { Col, Modal, Row } from "antd";
import { ContactFrom } from "@/components/contact-form/contact-form";
import { ContactBanner } from "@/components/banner/contact-banner";
import { Footer } from "@/components/footer/footer";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import UserCalendar from "@/components/schedule-date/user-pick-date";
import { apiCall } from "@/axios/axios";
import {
  BookedSlotInterface,
  BookingCalendar,
  TimeScheduleInterface,
} from "../../../../interface/interface";
import moment from "moment-timezone";
import { toast } from "sonner";

export interface CreateBookingInterface {
  slotId: string;
  start: string;
  end: string;
  email: string;
  name: string;
  description: string;
  packageId: string;
  phone: string;
  address: string;
  timezone: string;
}

const SessionPage = () => {
  const [selectedService, setSelectedService] = useState("");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false)
  const [slots, setSlots] = useState<BookingCalendar[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<BookingCalendar>();
  const [packages, setPackages] = useState();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [bookedSlots, setBookedSlots] = useState<BookedSlotInterface[]>([])
  const [availableTimes, setAvailableTimes] = useState<number[]>([]);
  const [selectedDayName, setSelectedDayName] = useState("");
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
  const [selectedDuration, setSelectedDuration] =
    useState<TimeScheduleInterface>();

  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsThankYouModalOpen(true); // Open the thank you modal
  };

  // New handler for day selection
  // const handleDaySelect = (dayName: string, times: number[]) => {
  //   setSelectedDayName(dayName);
  //   setAvailableTimes(times);

  //   // Auto-select first time if available
  //   if (times.length > 0 && !selectedDuration) {
  //     setSelectedDuration({
  //       start: times[0],
  //       end: times[0] + 1
  //     });
  //   }
  // };


  const isTimeBooked = (date: Date, hour: number): boolean => {
    if (!bookedSlots.length) return false;

    const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    const bookingsForDate = bookedSlots.find(slot => slot.date === dateString);

    if (!bookingsForDate) return false;

    return bookingsForDate.bookings.some(booking => {
      const bookingHour = new Date(booking.start).getHours();
      return bookingHour === hour;
    });
  };

  const handleDaySelect = (dayName: string, times: number[]) => {
    setSelectedDayName(dayName);
    setAvailableTimes(times);

    if (times.length > 0 && !selectedDuration && selectedDate) {
      const firstAvailableTime = times.find(time =>
        !isTimeBooked(selectedDate, time)
      );

      if (firstAvailableTime !== undefined) {
        setSelectedDuration({
          start: firstAvailableTime,
          end: firstAvailableTime + 1
        });
      }
    }
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




  const getBookingSlots = async () => {
    try {
      const result = await apiCall("get", "/Bookings/Calendar");
      console.log("API Response:", result.data);

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

  // Update the handleBookSession function to use calendar data
  const handleBookSession = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedDuration) {
      toast.error("Please select a date and time");
      return;
    }

    try {
      const dateObj = new Date(selectedDate);
      dateObj.setHours(selectedDuration.start, 0, 0, 0);

      const payloads = {
        ...payload,
        slotId: selectedSlot?.id || "",
        start: toLocalISOString(dateObj),
        end: toLocalISOString(new Date(dateObj.setHours(selectedDuration.end, 0, 0, 0))),
        timezone: moment.tz.guess()
      };

      const result = await apiCall("post", "/Bookings", payloads);
      toast.success("Reservation successful");
      setIsThankYouModalOpen(true);
    } catch (error) {
      toast.error("Booking failed");
      console.error("Booking error:", error);
    }
  };



  return (
    <div>
      <div className="flex justify-center items-center relative bg-transparent ">
        <div className="px-5 lg:px-14 3xl:!px-28 py-14 flex flex-col gap-14">
          <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <h2 className="text-7xl">Book a</h2>
              <div className="flex gap-5 items-center">
                <span>
                  <Image
                    src={HS4}
                    className="rounded-full object-cover w-[150px] h-[80px]"
                    alt="img"
                  />
                </span>
                <h2 className=" italic text-7xl ">session</h2>
              </div>
            </div>
            <div className="lg:w-[70%] text-xl text-light-brown">
              <p>
                From polished headshots to soulful lifestyle captures, I craft
                images that do more than just “look good” . They speak volumes.
                Whether for personal branding, professional needs, or intimate
                memories, every photo session is a curated experience.
              </p>
            </div>
          </div>

          {/* Next Section */}
          <Row gutter={[24, 24]} className="mb-14">
            <Col xs={24} md={12}>
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
                        Available times for {selectedDayName}:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {availableTimes.map((time) => {
                          const isBooked = isTimeBooked(selectedDate, time);

                          return (
                            <button
                              type="button"
                              key={time}
                              onClick={() => !isBooked && setSelectedDuration({
                                start: time,
                                end: time + 1
                              })}
                              disabled={isBooked}
                              className={`px-8 py-2 rounded-lg border ${selectedDuration?.start === time
                                  ? "bg-[#D9C9AE] text-[#151515] border-[#D9C9AE]"
                                  : isBooked
                                    ? "border-[#2D2C2C] text-[#2D2C2C] cursor-not-allowed"
                                    : "border-[#2D2C2C] cursor-pointer text-[#BABABA] hover:bg-[#2D2C2C]"
                                }`}
                            >
                              {time.toString().padStart(2, '0')}:00
                              {isBooked && <span className="text-xs block">Booked</span>}
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
            </Col>
            <Col xs={24} md={12}>
              <ContactFrom
                handleCreateBooking={handleBookSession}
                setCreatePayload={setPayload}
                createPayload={payload}
                selectedService={selectedService}
                setSelectedService={() => setSelectedService("")}
                onSubmit={handleReserveSpot}
                setShowTerms={setShowTerms}
              />
            </Col>
          </Row>

          {/* Next Section */}
          <ContactBanner />
        </div>
      </div>
      <ParallaxScrollax />
      <FooterImages />
      <Footer />
      {/* AFTER FORM FILLING MODAL */}
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
        open={showTerms}
        onCancel={() => setShowTerms(false)}
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
    </div>
  );
};

export default SessionPage;
