import React, { useState } from "react";
import { SelectInput } from "@/components/inputs/selectInput";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas from "@/assets/svgs/BAS_modal_icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";

export const ContactFrom = ({
  onSubmit,
}: {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

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

  return (
    <div className="py-8 px-10 w-full bg-[#282824]">
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
              <SelectInput
                selectValue={selectedService}
                setSelectedValue={setSelectedService}
                defaultOption="Select services"
                selectData={services}
              />
            </div>
            {/* Package */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Select package</label>
              <SelectInput
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
                <SelectInput
                  selectValue={selectedPackage}
                  setSelectedValue={setSelectedPackage}
                  defaultOption="Select date"
                  selectData={packages}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="phone">Time</label>
                <SelectInput
                  selectValue={selectedPackage}
                  setSelectedValue={setSelectedPackage}
                  defaultOption="Select time"
                  selectData={packages}
                />
              </div>
            </div>
            {/* Location */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Location</label>
              <SelectInput
                selectValue={selectedPackage}
                setSelectedValue={setSelectedPackage}
                defaultOption="Provide your location"
                selectData={packages}
              />
            </div>
          </div>
          <div className="mt-8 w-1/2">
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
