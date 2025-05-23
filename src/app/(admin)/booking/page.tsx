"use client";

import BaseDataTable from "@/components/data-table/data-table";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import dot from "@/assets/svgs/dots.svg";
import blueDot from "@/assets/svgs/blue-dot.svg";
import Image from "next/image";
import { useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Col, Row } from "antd";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { Input } from "@/components/inputs/input";
import CustomSelect from "@/components/inputs/custom-select/custom-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";

interface Booking {
  name: string;
  email: string;
  phone: string;
  packageType: string;
  packageName: string;
  dateBooked: string;
  status: string;
  created: string;
}

const data: Booking[] = [
  {
    name: "Stephen curry",
    email: "Stephen@portable.com",
    phone: "(416) 7311 793",
    packageType: "Wedding",
    packageName: "Basic ($200)",
    dateBooked: "July - 28 - 2025",
    status: "Pending",
    created: "Today",
  },
  {
    name: "Stephen curry",
    email: "Stephen@portable.com",
    phone: "(416) 7311 793",
    packageType: "Wedding",
    packageName: "Basic ($200)",
    dateBooked: "July - 28 - 2025",
    status: "Awaiting",
    created: "Today",
  },
  {
    name: "Stephen curry",
    email: "Stephen@portable.com",
    phone: "(416) 7311 793",
    packageType: "Wedding",
    packageName: "Basic ($200)",
    dateBooked: "July - 28 - 2025",
    status: "Confirmed",
    created: "Today",
  },
  {
    name: "Stephen curry",
    email: "Stephen@portable.com",
    phone: "(416) 7311 793",
    packageType: "Wedding",
    packageName: "Basic ($200)",
    dateBooked: "July - 28 - 2025",
    status: "Declined",
    created: "Today",
  },
  {
    name: "Stephen curry",
    email: "Stephen@portable.com",
    phone: "(416) 7311 793",
    packageType: "Wedding",
    packageName: "Basic ($200)",
    dateBooked: "July - 28 - 2025",
    status: "Resceduled",
    created: "Today",
  },
];

export default function Booking() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [openBookingDetails, setOpenBookingDetails] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleViewDetails = (row: Booking) => {
    setSelectedBooking(row);
    setDrawerOpen(true);
  };

  const columns: TableColumn<Booking>[] = [
    {
      name: "Name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#101010] text-[#FFF0EA] flex items-center justify-center text-xs font-medium">
            {row.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-[#292D32]">{row.name}</div>
            <div className="text-admin-grey text-xs">{row.email}</div>
          </div>
        </div>
      ),
      sortable: true,
      grow: 2,
    },
    {
      name: "Phone number",
      cell: (row) => <div className="text-[#292D32]">{row.phone}</div>,
    },
    {
      name: "Package",
      cell: (row) => (
        <div>
          <div className="text-[#292D32]">{row.packageType}</div>
          <div className="flex items-center gap-1 text-xs mt-1">
            <div className="bg-white font-medium border border-[#D0D5DD] px-2 py-0.5 rounded-md text-[#344054] flex gap-1 items-center">
              <span>
                <Image src={dot} alt="dot" />
              </span>
              {row.packageName}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Date booked",
      cell: (row) => <div className="text-[#292D32]">{row.dateBooked}</div>,
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="inline-flex gap-1 items-center border border-[#B2DDFF] px-2 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] text-xs font-medium">
          <span>
            <Image src={blueDot} alt="dot" />
          </span>
          {row.status}
        </div>
      ),
    },
    {
      name: "Date created",
      cell: (row) => <div className="text-[#292D32]">{row.created}</div>,
    },
    {
      name: "",
      cell: (row) => (
        <button
          className="flex cursor-pointer items-center gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50"
          onClick={() => handleViewDetails(row)}
        >
          <span>
            <Image src={eyeIcon} alt="img" />
          </span>
          Details
        </button>
      ),
      right: true,
    },
  ];

  // booking
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
    <AdminPageLayout
      headerProps={{
        dashTitle: "My Bookings",
        dashDescription:
          "Supercharge your workflow and handle repetitive tasks the apps you use every day.",
        buttonTitle: "Create a booking Link",
        buttonOnClick: () => setOpenBookingDetails(true),
      }}
    >
      <BaseDataTable columns={columns} data={data} />

      {/* INDIVIDUAL DETAILS DRAWER */}
      <ResponsiveDrawer
        title="Booking details"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {selectedBooking && (
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900 to-black text-white p-5 rounded-xl">
              <div className="p-4 flex justify-between rounded-xl bg-[#756C6C47]/30 text-sm text-gray-300">
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] text-white">Service booked</p>
                  <p className="text-lg font-semibold">
                    {selectedBooking.packageType}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] text-white text-right">Status</p>
                  <div className="inline-flex gap-1 items-center border border-[#B2DDFF] px-2 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] text-xs font-medium">
                    <span>
                      <Image src={blueDot} alt="dot" />
                    </span>
                    {selectedBooking.status}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 mt-5">
                <div className="flex gap-2 text-xs">
                  <div className="bg-white font-medium border border-[#D0D5DD] px-2 py-0.5 rounded-md text-[#344054] flex gap-1 items-center">
                    <span>
                      <Image src={dot} alt="dot" />
                    </span>
                    {selectedBooking.packageName}
                  </div>
                  <div className="bg-white font-medium border border-[#D0D5DD] px-2 py-0.5 rounded-md text-[#344054] flex gap-1 items-center">
                    <span>
                      <Image src={dot} alt="dot" />
                    </span>
                    Make up ($50)
                  </div>
                </div>
                <p className="text-3xl font-bold my-2">$1200.00</p>
                <p className="text-base text-white">
                  On the 20th February 2025, 12:00PM
                </p>
              </div>
            </div>
            <div className="bg-white-100 border border-bayfi-grey rounded-xl p-5">
              <div className="">
                <Row className="border-b border-bayfi-grey p-3 mb-2">
                  <Col span={12}>
                    <p className="text-[13px] text-black font-normal">Name</p>
                  </Col>
                  <Col span={12}>
                    <p className="text-right text-[#494949] text-sm font-medium">
                      {selectedBooking.name}
                    </p>
                  </Col>
                </Row>
                <Row className="border-b border-bayfi-grey p-3 mb-2">
                  <Col span={12}>
                    <p className="text-[13px] text-black font-normal">Email</p>
                  </Col>
                  <Col span={12}>
                    <p className="text-right text-[#494949] text-sm font-medium">
                      {selectedBooking.email}
                    </p>
                  </Col>
                </Row>
                <Row className="border-b border-bayfi-grey p-3 mb-2">
                  <Col span={12}>
                    <p className="text-[13px] text-black font-normal">Phone</p>
                  </Col>
                  <Col span={12}>
                    <p className="text-right text-[#494949] text-sm font-medium">
                      {selectedBooking.phone}
                    </p>
                  </Col>
                </Row>
                <Row className="border-b border-bayfi-grey p-3 mb-2">
                  <Col span={12}>
                    <p className="text-[13px] text-black font-normal">
                      Date Created
                    </p>
                  </Col>
                  <Col span={12}>
                    <p className="text-right text-[#494949] text-sm font-medium">
                      02-14-2025 9:30
                    </p>
                  </Col>
                </Row>
                <Row className="p-3 mb-2">
                  <Col span={12}>
                    <p className="text-[13px] text-black font-normal">
                      Reference
                    </p>
                  </Col>
                  <Col span={12}>
                    <p className="text-right text-[#494949] text-sm font-medium">
                      0998709888776
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <button className="bg-[#058503] text-white p-4 rounded-full w-full">
                Confirm booking
              </button>
              <button className="bg-[#F4F3EA] text-black p-4 rounded-full w-full">
                Reschedule
              </button>
              <button className="border border-[#D80027] text-[#D80027] p-4 rounded-full w-full">
                Decline
              </button>
            </div>
          </div>
        )}
      </ResponsiveDrawer>

      {/* BOOKING DETAILS DRAWER */}
      <ResponsiveDrawer
        title="Create a booking link"
        open={openBookingDetails}
        onClose={() => setOpenBookingDetails(false)}
      >
        <div className="pb-14">
          <form>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Full Name
                </label>
                <Input variant="admin" placeholder="First name and Last name" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-grayish-500 font-semibold"
                >
                  Email address
                </label>
                <Input variant="admin" placeholder="example@email.com" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Phone number</label>
                <Input variant="admin" placeholder="+1 999-999-999" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Date and time</label>
                <div className="bg-bayfi-grey-300 border-bayfi-grey text-[#868D96] placeholder:text-[#868D96] border py-4 px-3 rounded-lg flex justify-between items-center w-full">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select date"
                    className="!w-full bg-transparent text-[#BABABA] placeholder:text-[#BABABA] focus:outline-none"
                    calendarClassName="bg-[#1a1a1a] text-[#BABABA] !w-full rounded-xl border-[#575252]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Select Services</label>
                <CustomSelect
                  variant="admin"
                  selectData={services}
                  defaultOption="Select Services"
                  selectValue={selectedService}
                  setSelectedValue={setSelectedService}
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Select Package</label>
                <CustomSelect
                  variant="admin"
                  selectData={packages}
                  defaultOption="Select Package"
                  selectValue={selectedPackage}
                  setSelectedValue={setSelectedPackage}
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="location">Location</label>
                <Input variant="admin" placeholder="Enter location" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Select Add ons(optional)</label>
                <CustomSelect
                  variant="admin"
                  selectData={packages}
                  defaultOption="Make up"
                  selectValue={selectedPackage}
                  setSelectedValue={setSelectedPackage}
                />
              </div>

              {/*  */}
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-[#292D32] text-xl font-normal">Total</p>
              <p className="text-black text-2xl font-medium">$1200.00</p>
            </div>
            <div className="mt-5">
              <AdminSubmitButton text="Send booking link" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
}
