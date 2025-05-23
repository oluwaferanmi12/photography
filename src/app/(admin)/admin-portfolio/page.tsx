"use client";

import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import BaseDataTable from "@/components/data-table/data-table";
import { Switch } from "antd";
import React, { useState } from "react";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import Image from "next/image";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import CustomSelect from "@/components/inputs/custom-select/custom-select";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";

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
  const [createPortfolioLoading, setCreatePortfolioLoading] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [tags, setTags] = useState("");
  const [portfolioDescription, setPortfolioDescription] = useState("");
  const [selectedAttachedService, setSelectedAttachedService] = useState("");
  const [portfolioNameError, setPortfolioNameError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [portfolioDescriptionError, setPortfolioDescriptionError] =
    useState("");
  const [selectedAttachedServiceError, setSelectedAttachedServiceError] =
    useState("");

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

  // CREATE SERVICES
  const handleCreateService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatePortfolioLoading(true);

    let hasError = false;

    if (!portfolioName.trim()) {
      setPortfolioNameError("Please include portfolio name");
      hasError = true;
    } else {
      setPortfolioNameError("");
    }

    if (!portfolioDescription.trim()) {
      setPortfolioDescriptionError("Please include service description");
      hasError = true;
    } else {
      setPortfolioDescriptionError("");
    }

    if (!tags.trim()) {
      setTagsError("Please include tags");
      hasError = true;
    } else {
      setTagsError("");
    }

    if (!selectedAttachedService) {
      setSelectedAttachedServiceError("Please include attached service");
      hasError = true;
    } else {
      setSelectedAttachedServiceError("");
    }

    if (hasError) {
      setCreatePortfolioLoading(false);
      return;
    }

    try {
      await apiCall("post", "/Portfolio/Add", {
        title: portfolioName,
        description: portfolioDescription,
        tags: tags,
        serviceId: selectedAttachedService,
      });
      toast.success("Service Created Successfully");
      setPortfolioName("");
      setPortfolioDescription("");
      setTags("");
      setSelectedAttachedService("")
      setOpenCreatePortfolio(false);
      // fetchServices();
    } catch (error) {
      console.log(error);
      toast.error("An error occured while creating service");
    } finally {
      setCreatePortfolioLoading(false);
    }
  };

  // attached services
  const attachedServices = [
    { label: "Weddings", value: "wedding" },
    { label: "Birthdays", value: "birthday" },
    { label: "Videography", value: "videography" },
    { label: "Kids & infants", value: "kids" },
    { label: "Lifestyle & events", value: "lifestyle" },
    { label: "Make up & Gele", value: "makeup" },
    { label: "Family", value: "family" },
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

      {/* Create Service DRAWER */}
      <ResponsiveDrawer
        title="Create a portfolio"
        open={openCreatePortfolio}
        onClose={() => setOpenCreatePortfolio(false)}
      >
        <div className="pb-14">
          <form onSubmit={handleCreateService}>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Portfolio name
                </label>
                <Input
                  value={portfolioName}
                  onChangeInput={(e) => {
                    setPortfolioName(e.target.value);
                    if (portfolioNameError) setPortfolioNameError("");
                  }}
                  variant="admin"
                  placeholder="Basic"
                />
                {portfolioNameError && (
                  <p className="text-red-700">{portfolioNameError}</p>
                )}
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="tag" className="text-grayish-500 font-semibold">
                  Thumbnail
                </label>
                <Input
                  value={tags}
                  onChangeInput={(e) => {
                    setTags(e.target.value);
                    if (tagsError) setTagsError("");
                  }}
                  variant="admin"
                  placeholder="Wedding"
                />
                {tagsError && <p className="text-red-700">{tagsError}</p>}
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
                    value={portfolioDescription}
                    placeholder="Portfolio description"
                    onChange={(e) => {
                      setPortfolioDescription(e.target.value);
                      if (portfolioDescriptionError)
                        setPortfolioDescriptionError("");
                    }}
                    className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                    rows={3}
                  ></textarea>
                </div>
                {portfolioDescriptionError && (
                  <p className="text-red-700">{portfolioDescriptionError}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Attach service</label>
                <CustomSelect
                  variant="admin"
                  selectData={attachedServices}
                  defaultOption="Wedding"
                  selectValue={selectedAttachedService}
                  setSelectedValue={setSelectedAttachedService}
                />
                {selectedAttachedServiceError && (
                  <p className="text-red-700">{selectedAttachedServiceError}</p>
                )}
              </div>

              {/*  */}
            </div>
            <div className="mt-5">
              <AdminSubmitButton
                loading={createPortfolioLoading}
                text="Create portfolio"
              />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
};

export default AdminPortfolio;
