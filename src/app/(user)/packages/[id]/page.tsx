"use client";
import React, { useEffect, useState } from "react";
import arrowLeftFaded from "@/assets/svgs/arrow-left-faded.svg";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { apiCall } from "@/axios/axios";
import { Service } from "../page";
import {
  BookedSlotInterface,
  BookingCalendar,
  PackageInterface,
  TimeScheduleInterface,
} from "../../../../../interface/interface";
import { UserPackagesLayout } from "@/components/packages-new-card/packages-new-card";
import { Col, Modal, Row } from "antd";
import stoneDot from "@/assets/svgs/stone-dots.svg";
import { ContactFrom } from "@/components/contact-form/contact-form";
import UserCalendar from "@/components/schedule-date/user-pick-date";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import moment from "moment";
import { toast } from "sonner";
import { ParallaxScrollax } from "@/components/parallax-scrollax-banner/parallax-scrollax";
import { FooterImages } from "@/components/footer-images/footer-images";
import { Footer } from "@/components/footer/footer";
import { baseUrl } from "@/lib/base-url";

function PackageDetail() {
  const params = useParams();
  const [service, setService] = useState<Service | null>();
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showModal, setShowModal] = useState(false);
  const userTimezone = moment.tz.guess();
  const [packages, setPackages] = useState<PackageInterface[]>([]);
  const [firstStep, setFirstStep] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDayName, setSelectedDayName] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<BookingCalendar>();
  const [availableTimes, setAvailableTimes] = useState<number[]>([]);
  const [selectedDuration, setSelectedDuration] =
    useState<TimeScheduleInterface>();
  const [bookedSlots, setBookedSlots] = useState<BookedSlotInterface[]>([]);
  const userTimezoneOffset = moment.tz(userTimezone).utcOffset();
  const [showTerms, setShowTerms] = useState(false);
  const [slots, setSlots] = useState<BookingCalendar[]>([]);
  const [selectedPackage, setSelectedPackage] =
    useState<PackageInterface | null>();
  const userTimezoneOffsetInHours = userTimezoneOffset / 60;
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

  const router = useRouter();
  const getService = async () => {
    try {
      const result = await apiCall("get", `/Admin/Services/${params.id}`);
      setService(result.data);
    } catch (e) {}
  };

  const getServicePackages = async () => {
    try {
      const result = await apiCall(
        "get",
        `/Admin/Services/packages/${params.id}`
      );
      setPackages(result.data.data.packages);
    } catch (e) {}
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

      const { email, address, description, name, phone } = payload;
      if (!email || !address || !description || !name || !phone) {
        toast.error("All fields are required");
        return;
      }
      const result = await apiCall("post", "/Bookings", payloads);
      toast.success("Reservation successful");
      setShowModal(false);
      setIsThankYouModalOpen(true);
    } catch (error) {
      toast.error("Booking failed");
      console.error("Booking error:", error);
    }
  };
  const handleReserveSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    getService();
    getServicePackages();
    getBookingSlots();
  }, []);
  return (
    <>
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
              package_={selectedPackage}
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
      <div>
        <div className="flex justify-center items-center relative bg-transparent ">
          <div className="px-5 lg:px-14 3xl:px-28!">
            <div className="flex flex-col mt-28 lg:mt-48 gap-8 lg:gap-0 lg:flex-row justify-between w-full lg:items-center">
              <div>
                <div className="mb-2">
                  <button
                    onClick={() => {
                      router.push("/packages");
                    }}
                    className="border gap-2 border-[#2D2C2C] flex items-center rounded-3xl px-8 py-4"
                  >
                    <Image src={arrowLeftFaded} alt="" />
                    <p>Go back to packages</p>
                  </button>
                </div>
                <div className="flex flex-col gap-8 lg:w-1/2">
                  <h2 className="text-3xl lg:text-5xl whitespace-nowrap">
                    {service?.title}
                  </h2>
                </div>
              </div>
              <div className="lg:w-[50%] text-xl text-light-brown">
                <p>{service?.description}</p>
              </div>
            </div>

            {/* NEW CARDS */}
            <div className="pb-20 lg:pb-36 flex flex-col gap-20 ">
              {packages.map((item) => {
                return (
                  <div className="my-6" key={item.id}>
                    <UserPackagesLayout>
                      <Row className="px-4">
                        <Col lg={12} xs={24}>
                          <div className="flex flex-col justify-between h-full">
                            <div>
                              <p className="text-[40px] font-grotesk-bold">
                                {item.title}
                              </p>
                              <p className="text-[#D9C9AE] my-2 text-[48px]">
                                ${item.price}
                              </p>
                              {item.description
                                ?.split("*")
                                .map((item, index) => (
                                  <div
                                    className="flex gap-2 items-center"
                                    key={index}
                                  >
                                    <span>
                                      <Image src={stoneDot} alt="stoneDot" />
                                    </span>
                                    <p className="text-[#F8F8F880] text-base font-normal">
                                      {item.trim()}
                                    </p>
                                  </div>
                                ))}
                            </div>
                            <div className="flex">
                              <div className="relative  mt-5 inline-block p-[1.5px] rounded-full bg-linear-to-br from-white/40 via-white/5 to-white/10 shadow-[0px_2px_16px_0px_rgba(248,248,248,0.06)]">
                                <button
                                  onClick={() => {
                                    // setShowModal(true);
                                    // router.push(
                                    //   `/session?serviceId=${packages.serviceId}&packageId=${packages.id}`
                                    // );
                                    setSelectedPackage(item);
                                    setShowModal(true);
                                  }}
                                  className="px-6 py-2 rounded-full bg-black/30 backdrop-blur-md text-white font-semibold h-full"
                                >
                                  Book now
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12} xs={24}>
                          <div className="h-120 relative">
                            <Image
                              layout="fill"
                              alt=""
                              src={baseUrl + item?.thumbnail}
                            />
                          </div>
                        </Col>
                      </Row>
                    </UserPackagesLayout>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ParallaxScrollax />
        <FooterImages />
        <Footer />
      </div>
    </>
  );
}

export default PackageDetail;
