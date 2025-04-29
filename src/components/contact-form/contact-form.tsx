import React, { useState } from "react";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas from "@/assets/svgs/BAS_modal_icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";
import CustomSelect from "../inputs/custom-select/custom-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ContactFrom = ({
  onSubmit,
  selectedService,
  setSelectedService,
}: {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedService: string;
  setSelectedService: (val: string) => void;
}) => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const services = [
    { label: "Weddings", value: "wedding" },
    { label: "Birthdays", value: "birthday" },
    { label: "Videography", value: "videography" },
    { label: "Kids & infants", value: "kids" },
    { label: "Lifestyle & events", value: "lifestyle" },
    { label: "Make up & Gele", value: "makeup" },
    { label: "Family", value: "family" },
  ];

  const packages = [
    { label: "Basic", value: "Basic ($400 plus tax)" },
    { label: "Premium", value: "Premium ($900 plus tax)" },
    { label: "Pro+", value: "Pro+ ($1500 plus tax)" },
  ];

  const locations = [
    { label: "Montreal", value: "Basic ($400 plus tax)" },
    { label: "Ottawa", value: "Premium ($900 plus tax)" },
    { label: "Whistler+", value: "Pro+ ($1500 plus tax)" },
    { label: "Calgary", value: "Pro+ ($1500 plus tax)" },
    { label: "Toronto", value: "Pro+ ($1500 plus tax)" },
    { label: "Banff", value: "Pro+ ($1500 plus tax)" },
    { label: "Victoria", value: "Pro+ ($1500 plus tax)" },
    { label: "Halifax", value: "Pro+ ($1500 plus tax)" },
    { label: "Churchchill", value: "Pro+ ($1500 plus tax)" },
  ];

  return (
    <div className="py-8 px-10 w-full rounded-[20px] bg-[#282824]">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 place-items-center">
          <span>
            <Image src={bas} alt="bas" />
          </span>
          <h3 className="font-playfair text-yellow-50 text-[40px] text-center">
            Book a session
          </h3>
        </div>
        <span>
          <Image src={rollingImage} className="w-20 h-20" alt="rollingImage" />
        </span>
      </div>
      <div className="forms text-[#BABABA]">
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="firstname">First name</label>
                <Input placeholder="Enter your first name" />
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="lastname">Last name</label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>
            {/* Email */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email">Email address</label>
              <Input placeholder="Example@email.com" />
            </div>
            {/* Phone Number */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Phone number</label>
              <Input placeholder="+1 999-999-999" />
            </div>
            {/* Services */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Select Services</label>
              <CustomSelect
                selectData={services}
                defaultOption="Select services"
                selectValue={selectedService}
                setSelectedValue={setSelectedService}
              />
            </div>
            {/* Package */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Select package</label>
              <CustomSelect
                selectValue={selectedPackage}
                setSelectedValue={setSelectedPackage}
                defaultOption="Select package"
                selectData={packages}
              />
            </div>
            {/* DATE AND PREFERRED TIME */}
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="phone">Date</label>
                {/* <div className="border border-[#575252] rounded-xl px-5 py-2">
                  <input
                    type="date"
                    className="w-full bg-transparent text-[#BABABA] placeholder:text-[#BABABA] focus:outline-none appearance-none"
                    placeholder="Select date"
                  />
                </div> */}
                <div className="border border-[#575252] rounded-xl px-5 py-2 w-full">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select date"
                    className="w-full bg-transparent text-[#BABABA] placeholder:text-[#BABABA] focus:outline-none"
                    calendarClassName="bg-[#1a1a1a] text-[#BABABA] rounded-xl border-[#575252]"
                  />
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="phone">Time</label>
                {/* <div className="border-[#575252] placeholder:text-[#BABABA] border px-5 py-2 rounded-xl ">
                  <input
                    type="time"
                    className="bg-transparent focus:outline-0  w-full"
                    placeholder="Select time"
                  />
                </div> */}
                <div className="border border-[#575252] rounded-xl px-5 py-2 w-full">
                  <DatePicker
                    selected={selectedTime}
                    onChange={(date) => setSelectedTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select time"
                    className="w-full bg-transparent text-[#BABABA] placeholder:text-[#BABABA] focus:outline-none"
                    calendarClassName="bg-[#1a1a1a] text-[#BABABA] rounded-xl border-[#575252]"
                  />
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Location</label>
              <CustomSelect
                selectValue={selectedPackage}
                setSelectedValue={setSelectedPackage}
                defaultOption="Provide your location"
                selectData={locations}
              />
            </div>
          </div>
          <div className="mt-8 lg:w-1/2">
            <Button
              variant="filled"
              widthFull
              size="large"
              text="Reserve a spot"
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
