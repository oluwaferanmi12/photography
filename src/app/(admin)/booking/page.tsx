"use client"

import BaseDataTable from "@/components/data-table/data-table";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
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
        <div className="h-10 w-10 rounded-full bg-admin-black-100 text-white flex items-center justify-center text-xs font-medium">
          {row.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()}
        </div>
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-admin-grey text-xs">{row.email}</div>
        </div>
      </div>
    ),
    sortable: true,
    grow: 2,
  },
  {
    name: "Phone number",
    selector: (row) => row.phone,
  },
  {
    name: "Package",
    cell: (row) => (
      <div>
        <div>{row.packageType}</div>
        <div className="flex items-center gap-1 text-xs mt-1">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          <span className="bg-gray-100 px-2 py-0.5 rounded-md text-gray-700">
            {row.packageName}
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Date booked",
    selector: (row) => row.dateBooked,
  },
  {
    name: "Status",
    cell: (row) => (
      <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
        <span className="w-2 h-2 mr-1 rounded-full bg-blue-500"></span>
        {row.status}
      </span>
    ),
  },
  {
    name: "Date created",
    selector: (row) => row.created,
  },
  {
    name: "",
    cell: () => (
      <button className="flex items-center gap-1 px-4 py-1.5 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">
        <span>
          <Image src={eyeIcon}  alt="img" />
        </span>
        Details
      </button>
    ),
  },
];

export default function Booking() {
  return <BaseDataTable title="Bookings" columns={columns} data={data} />;
}
