"use client";

import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import BaseDataTable from "@/components/data-table/data-table";
import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import Image from "next/image";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import CustomSelect from "@/components/inputs/custom-select/custom-select";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ThumbnailUpload from "@/components/admin-components/sideNav/thumbnailUpload/thumbnail-upload";

interface PortfolioProps {
  id: string;
  portfolioName: string;
  description: string;
  noOfPictures: string;
  status: boolean;
  thumbnail: string;
}

const AdminPortfolio = () => {
  const [openCreatePortfolio, setOpenCreatePortfolio] = useState(false);
  const [createPortfolioLoading, setCreatePortfolioLoading] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [portfolioDescription, setPortfolioDescription] = useState("");
  const [selectedAttachedService, setSelectedAttachedService] = useState("");
  const [portfolioNameError, setPortfolioNameError] = useState("");
  const [thumbnailError, setThumbnailError] = useState("");
  const [portfolioDescriptionError, setPortfolioDescriptionError] =
    useState("");
  const [selectedAttachedServiceError, setSelectedAttachedServiceError] =
    useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [portfolioData, setPortfolioData] = useState<PortfolioProps[]>([]);
  const [attachedServices, setAttachedServices] = useState<
    { label: string; value: string }[]
  >([]);
  const [resetCounter, setResetCounter] = useState(0);

  const router = useRouter();

  const columns: TableColumn<PortfolioProps>[] = [
    {
      name: "Portfolio name",
      cell: (row) => (
        <div className="flex items-center gap-3">
          {/* <div className="h-10 w-10 rounded-full overflow-hidden bg-[#f2f2f2]">
            <Image
              src={`https://olaitanakinlade.com/${row.thumbnail}`} // Adjust the path if necessary
              alt={row.portfolioName}
              width={40}
              height={40}
              className="object-cover h-full w-full"
            />
          </div> */}
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
          className="flex items-center cursor-pointer gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50"
          onClick={() =>
            router.push(
              `/admin-portfolio/${encodeURIComponent(
                row.portfolioName
              )}?&description=${encodeURIComponent(
                row.description
              )}&portfolioId=${encodeURIComponent(row.id)}`
            )
          }
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

  // Fetch services and their packages
  const fetchPortfolio = async () => {
    try {
      const portfolioRes = await apiCall("get", "/Portfolio");
      const formattedData: PortfolioProps[] = portfolioRes.data.map(
        (item: any) => ({
          id: item.id,
          portfolioName: item.title,
          description: item.description,
          noOfPictures: item.imageCount.toString(),
          status: item.isActive,
        })
      );
      setPortfolioData(formattedData);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  // CREATE Portfolio
  const handleCreatePortfolio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatePortfolioLoading(true);

    let hasError = false;

    if (!portfolioName.trim()) {
      setPortfolioNameError("Please include portfolio name");
      hasError = true;
    } else setPortfolioNameError("");

    if (!portfolioDescription.trim()) {
      setPortfolioDescriptionError("Please include service description");
      hasError = true;
    } else setPortfolioDescriptionError("");

    if (!thumbnail) {
      setThumbnailError("Please upload a thumbnail");
      hasError = true;
    } else setThumbnailError("");

    if (!selectedAttachedService) {
      setSelectedAttachedServiceError("Please select a service");
      hasError = true;
    } else setSelectedAttachedServiceError("");

    if (hasError) {
      setCreatePortfolioLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", portfolioName);
      formData.append("Description", portfolioDescription);
      formData.append("ServiceId", selectedAttachedService);
      if (thumbnail) {
        formData.append("Thumbnail", thumbnail as File);
      }

      await apiCall("post", "/Portfolio/Add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Portfolio created successfully");
      setPortfolioName("");
      setPortfolioDescription("");
      setThumbnail(null);
      setSelectedAttachedService("");
      setOpenCreatePortfolio(false);
      setResetCounter((prev) => prev + 1);
      fetchPortfolio();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the portfolio");
    } finally {
      setCreatePortfolioLoading(false);
    }
  };

  const handleUpdatePortfolio = async () => {
    
  };

  const fetchServices = async () => {
    try {
      const res = await apiCall("get", "/Admin/Services");
      const services = res.data.map((service: any) => ({
        label: service.title,
        value: service.id,
      }));
      setAttachedServices(services);
    } catch (error) {
      toast.error("Failed to fetch services");
    }
  };

  useEffect(() => {
    fetchPortfolio();
    fetchServices();
  }, []);

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
      <BaseDataTable columns={columns} data={portfolioData} />

      {/* Create Service DRAWER */}
      <ResponsiveDrawer
        title="Create a portfolio"
        open={openCreatePortfolio}
        onClose={() => setOpenCreatePortfolio(false)}
      >
        <div className="pb-14">
          <form onSubmit={handleCreatePortfolio}>
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
                  placeholder="Wedding"
                />
                {portfolioNameError && (
                  <p className="text-red-700">{portfolioNameError}</p>
                )}
              </div>
              <div className="w-full flex flex-col gap-3">
                <ThumbnailUpload
                  onFileSelect={(files) => {
                    setThumbnail(files[0] || null);
                    setThumbnailError("");
                  }}
                  error={thumbnailError}
                  resetTrigger={resetCounter}
                />
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
                  setSelectedValue={(value) => {
                    setSelectedAttachedService(value);
                    setSelectedAttachedServiceError(""); // Clear error when selected
                  }}
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
