import React, { useEffect, useState } from "react";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas from "@/assets/svgs/BAS_modal_icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";
import CustomSelect from "../inputs/custom-select/custom-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { apiCall } from "@/axios/axios";
import { CreateBookingInterface } from "@/app/(user)/session/page";

export const ContactFrom = ({
  onSubmit,
  selectedService,
  setSelectedService,
  createPayload,
  setCreatePayload,
  handleCreateBooking,
  setShowTerms,
}: {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedService: string;
  setSelectedService: (val: string) => void;
  createPayload?: CreateBookingInterface;
  setCreatePayload?: (val: CreateBookingInterface) => void;
  handleCreateBooking?: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowTerms?: (val: boolean) => void;
}) => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [services, setServices] = useState<{ label: string; value: string }[]>(
    []
  );
  const [apiPackages, setApiPackages] = useState<
    { id: string; title: string }[]
  >([]);
  const [apiServices, setApiServices] = useState<
    { id: string; title: string }[]
  >([]);
  const [apiServiceSelected, setApiServiceSelected] = useState("");
  const [packageSelected, setPackageSelected] = useState("");

  const fetchServices = async () => {
    try {
      const res = await apiCall("get", "/Admin/Services");
      const services = res.data.map((service: any) => ({
        label: service.title,
        value: service.id,
      }));
      setApiServices(res.data);
      setServices(services);
    } catch (error) {}
  };

  const getPackages = async () => {
    try {
      const result = await apiCall(
        "get",
        `/Admin/Services/packages/${apiServiceSelected}`
      );
      setApiPackages(result.data.data.packages);
    } catch (e) {}
  };

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const packageId = urlParam.get("packageId");
    const serviceId = urlParam.get("serviceId");
    if (apiServices.length && serviceId) {
      setApiServiceSelected(serviceId ?? "");
    }
    if (apiPackages.length && packageId) {
      setPackageSelected(packageId ?? "");
    }
  }, [apiPackages, apiServices]);

  useEffect(() => {
    if (apiServiceSelected) {
      getPackages();
    }
  }, [apiServiceSelected]);

  useEffect(() => {
    fetchServices();
  }, []);

  // const services = [
  //   { label: "Weddings", value: "wedding" },
  //   { label: "Birthdays", value: "birthday" },
  //   { label: "Videography", value: "videography" },
  //   { label: "Kids & infants", value: "kids" },
  //   { label: "Lifestyle & events", value: "lifestyle" },
  //   { label: "Make up & Gele", value: "makeup" },
  //   { label: "Family", value: "family" },
  // ];

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
        <form onSubmit={handleCreateBooking}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-1/2 flex flex-col gap-3">
                <label htmlFor="firstname">Full Name</label>
                <Input
                  onChangeInput={(e) => {
                    if (setCreatePayload && createPayload) {
                      setCreatePayload({
                        ...createPayload,
                        name: e.target.value,
                      });
                    }
                  }}
                  variant="user"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            {/* Email */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="email">Email address</label>
              <Input
                onChangeInput={(e) => {
                  if (setCreatePayload && createPayload) {
                    setCreatePayload({
                      ...createPayload,
                      email: e.target.value,
                    });
                  }
                }}
                variant="user"
                placeholder="Example@email.com"
              />
            </div>
            {/* Phone Number */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Phone number</label>
              <Input
                onChangeInput={(e) => {
                  if (createPayload && setCreatePayload) {
                    setCreatePayload({
                      ...createPayload,
                      phone: e.target.value,
                    });
                  }
                }}
                variant="user"
                placeholder="+1 999-999-999"
              />
            </div>
            {/* Services */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Select Services</label>
              <div>
                <select
                  onChange={(e) => {
                    setApiServiceSelected(e.target.value);
                    // setCreatePayload({
                    //   ...createPayload,
                    //   : e.target.value,
                    // });
                  }}
                  value={apiServiceSelected}
                  className="w-full border border-[#575252] text-left text-[#BABABA] px-5 py-2 rounded-xl bg-transparent flex justify-between items-center"
                >
                  <option value={""}>Select Services</option>
                  {apiServices.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* Package */}
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="phone">Select package</label>
              <div>
                <select
                  onChange={(e) => {
                    setPackageSelected(e.target.value);
                    if (setCreatePayload && createPayload) {
                      setCreatePayload({
                        ...createPayload,
                        packageId: e.target.value,
                      });
                    }
                  }}
                  value={packageSelected}
                  className="w-full border border-[#575252] text-left text-[#BABABA] px-5 py-2 rounded-xl bg-transparent flex justify-between items-center"
                >
                  <option value={""}>Select package</option>
                  {apiPackages.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.title}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* <CustomSelect
                variant="user"
                selectValue={selectedPackage}
                setSelectedValue={setSelectedPackage}
                defaultOption="Select package"
                selectData={packages}
              /> */}
            </div>
            {/* DATE AND PREFERRED TIME */}
            <div className="flex gap-5">
              {/* Location */}
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Location</label>
                <Input
                  onChangeInput={(e) => {
                    if (setCreatePayload && createPayload) {
                      setCreatePayload({
                        ...createPayload,
                        address: e.target.value,
                      });
                    }
                  }}
                  variant="user"
                  placeholder="Enter location"
                />
                <p className="text-sm text-[#FFFFFF] font-grotesk-regular">
                  Location outside of gta or Toronto may attract extra charges
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              {/* Location */}
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Description</label>
                <Input
                  onChangeInput={(e) => {
                    if (setCreatePayload && createPayload) {
                      setCreatePayload({
                        ...createPayload,
                        description: e.target.value,
                      });
                    }
                  }}
                  variant="user"
                  placeholder="Description"
                />
              </div>
            </div>
            <p className="text-[#D9C9AE]">
              By reserving a spot, you agree to our service terms regarding
              cancellations, deposits, and late arrivals.{" "}
              <span
                className="text-white cursor-pointer"
                onClick={() => {
                  setShowTerms && setShowTerms(true);
                }}
              >
                Read here
              </span>
            </p>
          </div>
          <div className="mt-8 lg:w-1/2">
            <Button
              variant="filled"
              widthFull
              size="large"
              text="Reserve a spot"
              // onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
