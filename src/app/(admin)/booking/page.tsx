"use client";

import BaseDataTable from "@/components/data-table/data-table";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import dot from "@/assets/svgs/dots.svg";
import blueDot from "@/assets/svgs/blue-dot.svg";
import Image from "next/image";

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
    status: "Pending",
    created: "Today",
  },
];

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
    cell: () => (
      <button className="flex items-center gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50">
        <span>
          <Image src={eyeIcon} alt="img" />
        </span>
        Details
      </button>
    ),
  },
];

export default function Booking() {
  return <BaseDataTable title="Bookings" columns={columns} data={data} />;
}
