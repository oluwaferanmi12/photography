"use client";

import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import BaseDataTable from "@/components/data-table/data-table";
import { Switch } from "antd";
import React, { useState } from "react";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import Image from "next/image";

interface PortfolioProps {
  portfolioName: string;
  description: string;
  noOfPictures: string;
  status: boolean;
}

const data: PortfolioProps[] = [
  {
    portfolioName: "Weddings",
    description:
      "Stakeholders and users. Currently, I lead a dynamic 3-person design team ",
    noOfPictures: "52",
    status: true,
  },
  {
    portfolioName: "Birthday",
    description:
      "Stakeholders and users. Currently, I lead a dynamic 3-person design team ",
    noOfPictures: "52",
    status: true,
  },
  {
    portfolioName: "Weddings",
    description:
      "Stakeholders and users. Currently, I lead a dynamic 3-person design team ",
    noOfPictures: "52",
    status: true,
  },
];

const AdminPortfolio = () => {
  const [openCreatePortfolio, setOpenCreatePortfolio] = useState(false);
  const [selectedPortfolioDetail, setSelectedPortfolioDetail] =
    useState<PortfolioProps | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleViewDetails = (row: PortfolioProps) => {
    setSelectedPortfolioDetail(row);
    setDrawerOpen(true);
  };

  const columns: TableColumn<PortfolioProps>[] = [
    {
      name: "Portfolio name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#101010] text-[#FFF0EA] flex items-center justify-center text-xs font-medium">
            {row.portfolioName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-[#292D32]">
              {row.portfolioName}
            </div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Description",
      cell: (row) => <div className="text-[#292D32]">{row.description}</div>,
      grow: 2,
    },

    {
      name: "Number of pictures",
      cell: (row) => (
        <div className="text-[#292D32] text-right">{row.noOfPictures}</div>
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
      grow: 1,
    },
  ];

  return (
    <AdminPageLayout
      headerProps={{
        dashTitle: "Portfolio",
        dashDescription:
          "Supercharge your workflow and handle repetitive tasks the apps you use every day.",
        buttonTitle: "Create a portfolio",
        buttonOnClick: () => setOpenCreatePortfolio(true),
      }}
    >
      <BaseDataTable columns={columns} data={data} />

      
    </AdminPageLayout>
  );
};

export default AdminPortfolio;
