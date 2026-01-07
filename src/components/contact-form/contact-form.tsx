import React, { useEffect, useState } from "react";
import Image from "next/image";
import rollingImage from "@/assets/svgs/rollingImage.svg";
import bas from "@/assets/svgs/BAS_modal_icon.svg";
import { Input } from "@/components/inputs/input";
import Button from "@/components/button/button";
import "react-datepicker/dist/react-datepicker.css";
import { apiCall } from "@/axios/axios";
import { CreateBookingInterface } from "@/app/(user)/session/page";
import { useTermsStore } from "@/store/useTermsStore";
import checkedIcon from "@/assets/svgs/ticked-icon.svg";
import uncheckedIcon from "@/assets/svgs/empty-check.svg";

export const ContactFrom = ({
  onSubmit,
  selectedService,
  setSelectedService,
  createPayload,
  setCreatePayload,
  handleCreateBooking,
  setShowTerms,
  variant2,
  package_,
}: {
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedService: string;
  setSelectedService: (val: string) => void;
  createPayload?: CreateBookingInterface;
  setCreatePayload?: (val: CreateBookingInterface) => void;
  handleCreateBooking?: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowTerms?: (val: boolean) => void;
  variant2?: boolean;
  package_?: any;
}) => {
  const [services, setServices] = useState<{ label: string; value: string }[]>(
    []
  );
  const [apiPackages, setApiPackages] = useState<
    { id: string; title: string }[]
  >([]);
  const [apiServices, setApiServices] = useState<
    { id: string; title: string }[]
  >([]);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [apiServiceSelected, setApiServiceSelected] = useState("");
  const [packageSelected, setPackageSelected] = useState("");
  const {
    photoshootTermsAccepted,
    termsAndConditionsAccepted,
    setPhotoshootTermsAccepted,
    setTermsAndConditionsAccepted,
  } = useTermsStore();

  

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
    if (package_ && setCreatePayload && createPayload) {
      setCreatePayload({ ...createPayload, packageId: package_.id });
      setApiServiceSelected(package_.serviceId);
    }
  }, [package_]);

  useEffect(() => {
    if (apiServiceSelected) {
      getPackages();
    }
  }, [apiServiceSelected]);

  useEffect(() => {
    fetchServices();
  }, []);




  return (
    <div className="py-8 lg:px-10  w-full rounded-[20px] bg-[#282824]">
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
      {package_ && (
        <div className="mb-6 flex items-center gap-2">
          <p className="text-white font-grotesk-medium text-4xl">
            {package_.name}
          </p>
          <p className="text-[#D9C9AE] text-5xl">${package_.price}/hr</p>
        </div>
      )}

      <div className="forms text-[#BABABA]">
        <form onSubmit={handleCreateBooking}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-3">
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
            {!variant2 && (
              <>
                {/* Services */}
                <div className="w-full flex flex-col gap-3">
                  <label htmlFor="phone">Select Services</label>
                  <div>
                    <select
                      onChange={(e) => {
                        setApiServiceSelected(e.target.value);
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
                </div>
              </>
            )}

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
            <div className="flex items-center gap-2">
              <span
                onClick={() => {
                  setTermsAgreed((prev) => !prev);
                }}
              >
                <Image
                  src={termsAgreed ? checkedIcon : uncheckedIcon}
                  alt="checked"
                />
              </span>
              <p className="text-[#D9C9AE]">
                By reserving a spot, you agree to our service terms regarding{" "}
                <span
                  onClick={() => {
                    setPhotoshootTermsAccepted(true);
                  }}
                  className="text-white underline cursor-pointer"
                >
                  Consent Agreement
                </span>{" "}
                cancellations, deposits, and late arrivals.{" "}
                <span
                  onClick={() => {
                    setTermsAndConditionsAccepted(true);
                  }}
                  className="text-white cursor-pointer underline"
                >
                  Agreement
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8 lg:w-1/2">
            <Button
              variant="filled"
              widthFull
              size="large"
              disabled={!termsAgreed}
              text="Reserve a spot"
              // onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
