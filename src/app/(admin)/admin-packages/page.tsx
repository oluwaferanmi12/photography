"use client";

import { TableColumn } from "react-data-table-component";
import { Switch } from "antd";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import BaseDataTable from "@/components/data-table/data-table";
import Image from "next/image";
import dot from "@/assets/svgs/dots.svg";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { useRouter } from "next/navigation";

interface PackageOption {
  name: string;
  price: string;
}

interface Service {
  serviceName: string;
  packages: PackageOption[];
  status: boolean;
  lastUpdated: string;
}

const services: Service[] = [
  {
    serviceName: "Weddings",
    packages: [
      { name: "Basic", price: "200" },
      { name: "Classic", price: "200" },
      { name: "Premium", price: "200" },
    ],
    status: true,
    lastUpdated: "Today",
  },
  {
    serviceName: "Birthdays",
    packages: [
      { name: "Basic", price: "200" },
      { name: "Classic", price: "200" },
      { name: "Premium", price: "200" },
    ],
    status: true,
    lastUpdated: "Today",
  },
  {
    serviceName: "Kids",
    packages: [
      { name: "Basic", price: "200" },
      { name: "Classic", price: "200" },
      { name: "Premium", price: "200" },
    ],
    status: false,
    lastUpdated: "Today",
  },
];


export default function Services() {
  const [openCreateService, setOpenCreateService] = useState(false);
  const router = useRouter();


  const columns: TableColumn<Service>[] = [
  {
    name: "Services",
    selector: (row) => row.serviceName,
    sortable: true,
  },
  {
    name: "Packages",
    minWidth: "500px",
    cell: (row) => (
      <div className="flex  gap-2">
        {row.packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-white font-medium border border-[#D0D5DD] px-2 py-0.5 rounded-md text-[#344054] flex gap-1 items-center"
          >
            <span>
              <Image src={dot} alt="dot" />
            </span>
            {pkg.name} $({pkg.price})
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">
          {row.status ? "Active" : "Inactive"}
        </span>
        <Switch defaultChecked={row.status} className="custom-switch" />
      </div>
    ),
  },
  {
    name: "Last updated",
    selector: (row) => row.lastUpdated,
  },
    {
    name: "",
    cell: (row) => (
      <button
        className="flex items-center cursor-pointer gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50"
        onClick={() =>
          router.push(
            `/admin-packages/${encodeURIComponent(row.serviceName)}?status=${row.status}&packages=${encodeURIComponent(JSON.stringify(row.packages))}`
          )
        }
      >
        <span>
          <Image src={eyeIcon} alt="img" />
        </span>
        Details
      </button>
    ),
  },

];


  return (
    <AdminPageLayout
      headerProps={{
        dashTitle: "Services and Packages",
        dashDescription:
          "Supercharge your workflow and handle repetitive tasks the apps you use every day.",
        buttonTitle: "Create a service",
        buttonOnClick: () => setOpenCreateService(true),
      }}
    >
      <BaseDataTable title="Services" columns={columns} data={services} />

      {/* Create Service DRAWER */}
      <ResponsiveDrawer
        title="Create a service"
        open={openCreateService}
        onClose={() => setOpenCreateService(false)}
      >
        <div className="pb-14">
          <form>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Service name
                </label>
                <Input variant="admin" placeholder="Wedding" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="tag" className="text-grayish-500 font-semibold">
                  Tags
                </label>
                <Input variant="admin" placeholder="Wedding" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="description"
                  className="text-grayish-500 font-semibold"
                >
                  Description
                </label>
                <div className="border-bayfi-grey text-[#868D96] placeholder:text-[#868D96] border py-4 px-3 rounded-lg bg-bayfi-grey-300">
                  <textarea
                    className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              {/*  */}
            </div>
            <div className="mt-5">
              <AdminSubmitButton text="Create Service" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
}
