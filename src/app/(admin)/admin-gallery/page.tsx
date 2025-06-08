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

interface ClientProps {
  id: string;
  clientName: string;
  clientEmail: string;
  password: string;
  links: string;
  description: string;
  noOfPictures: string;
  status: boolean;
  thumbnail: string;
}

const AdminGallery = () => {
  const [openCreateGallery, setOpenCreateGallery] = useState(false);
  const [createGalleryLoading, setCreateGalleryLoading] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [clientDescription, setClientDescription] = useState("");
  const [noOfPictures, setNoOfPictures] = useState<number>();
  const [clientNameError, setClientNameError] = useState("");
  const [clientEmailError, setClientEmailError] = useState("");
  const [thumbnailError, setThumbnailError] = useState("");
  const [clientDescriptionError, setClientDescriptionError] = useState("");
  const [noOfPicturesError, setNoOfPicturesError] = useState("");

  const [loading, setLoading] = useState<boolean>(true);
  const [clientData, setClientData] = useState<ClientProps[]>([]);
  const [resetCounter, setResetCounter] = useState(0);

  const router = useRouter();

  const columns: TableColumn<ClientProps>[] = [
    {
      name: "Clients",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div>
            <div className="font-medium text-[#292D32]">{row.clientName}</div>
          </div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Email",
      cell: (row) => <div className="text-[#292D32]">{row.clientEmail}</div>,
      grow: 2,
    },
    // {
    //   name: "Description",
    //   cell: (row) => <div className="text-[#292D32]">{row.description}</div>,
    //   grow: 2,
    // },

    {
      name: "Password",
      cell: (row) => (
        <div className="text-[#292D32] text-right">{row.password}</div>
      ),
    },

    {
      name: "Links",
      cell: (row) => (
        <div className="text-[#292D32] text-right">{row.links}</div>
      ),
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
              `/admin-gallery/${encodeURIComponent(
                row.clientName
              )}?&description=${encodeURIComponent(
                row.description
              )}&clientId=${encodeURIComponent(row.id)}`
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
  const fetchClient = async () => {
    try {
      const clientRes = await apiCall("get", "/Gallery");
      console.log(clientRes);

      const formattedData: ClientProps[] = clientRes.data.data.gallery.map(
        (item: any) => ({
          id: item.id,
          clientName: item.name,
          clientEmail: item.email,
          description: item.description,
          noOfPictures: item.imageCount.toString(),
          status: item.isActive,
        })
      );
      setClientData(formattedData);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  // CREATE Client
  const handleCreateClient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateGalleryLoading(true);

    let hasError = false;

    if (!clientName.trim()) {
      setClientNameError("Please include client name");
      hasError = true;
    } else setClientNameError("");

    if (!clientEmail.trim()) {
      setClientEmailError("Please include client email");
      hasError = true;
    } else setClientEmailError("");

    if (!clientDescription.trim()) {
      setClientDescriptionError("Please include service description");
      hasError = true;
    } else setClientDescriptionError("");

    if (!thumbnail) {
      setThumbnailError("Please upload a thumbnail");
      hasError = true;
    } else setThumbnailError("");

    if (!noOfPictures) {
      setNoOfPicturesError("Please enter package price");
      hasError = true;
    } else {
      setNoOfPicturesError("");
    }

    if (hasError) {
      setCreateGalleryLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Name", clientName);
      formData.append("Email", clientEmail);
      formData.append("Description", clientDescription);
      if (noOfPictures !== undefined) {
        formData.append("ImageCount", noOfPictures.toString());
      }
      if (thumbnail) {
        formData.append("Thumbnail", thumbnail as File);
      }

      await apiCall("post", "/Gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Client created successfully");
      setClientName("");
      setClientEmail("");
      setClientDescription("");
      setThumbnail(null);
      setNoOfPictures(undefined);
      setOpenCreateGallery(false);
      setResetCounter((prev) => prev + 1);

      fetchClient();
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creating the client");
    } finally {
      setCreateGalleryLoading(false);
    }
  };

  // const fetchServices = async () => {
  //   try {
  //     const res = await apiCall("get", "/Admin/Services");
  //     const services = res.data.map((service: any) => ({
  //       label: service.title,
  //       value: service.id,
  //     }));
  //     setAttachedServices(services);
  //   } catch (error) {
  //     toast.error("Failed to fetch services");
  //   }
  // };

  useEffect(() => {
    fetchClient();
    // fetchServices();
  }, []);

  return (
    <AdminPageLayout
      headerProps={{
        dashTitle: "Client's gallery",
        dashDescription:
          "Supercharge your workflow and handle repetitive tasks the apps you use every day.",
        buttonTitle: "Create a gallery",
        buttonOnClick: () => setOpenCreateGallery(true),
      }}
    >
      <BaseDataTable columns={columns} data={clientData} />

      {/* Create Service DRAWER */}
      <ResponsiveDrawer
        title="Create a client"
        open={openCreateGallery}
        onClose={() => setOpenCreateGallery(false)}
      >
        <div className="pb-14">
          <form onSubmit={handleCreateClient}>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Client&apos;s name
                </label>
                <Input
                  value={clientName}
                  onChangeInput={(e) => {
                    setClientName(e.target.value);
                    if (clientNameError) setClientNameError("");
                  }}
                  variant="admin"
                  placeholder="Desire Birthday"
                />
                {clientNameError && (
                  <p className="text-red-700">{clientNameError}</p>
                )}
              </div>
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-grayish-500 font-semibold"
                >
                  Email
                </label>
                <Input
                  value={clientEmail}
                  onChangeInput={(e) => {
                    setClientEmail(e.target.value);
                    if (clientEmailError) setClientEmailError("");
                  }}
                  variant="admin"
                  placeholder="desire@example.com"
                />
                {clientEmailError && (
                  <p className="text-red-700">{clientEmailError}</p>
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
                    value={clientDescription}
                    placeholder="client's description"
                    onChange={(e) => {
                      setClientDescription(e.target.value);
                      if (clientDescriptionError) setClientDescriptionError("");
                    }}
                    className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                    rows={3}
                  ></textarea>
                </div>
                {clientDescriptionError && (
                  <p className="text-red-700">{clientDescriptionError}</p>
                )}
              </div>

              <div className="w-full flex flex-col gap-3">
                <label htmlFor="phone">Number of edited images</label>
                <Input
                  value={noOfPictures?.toString() || ""}
                  type="number"
                  onChangeInput={(e) => {
                    const value = parseFloat(e.target.value);
                    setNoOfPictures(isNaN(value) ? undefined : value);
                    if (noOfPicturesError) setNoOfPicturesError("");
                  }}
                  variant="admin"
                  placeholder="20"
                />
              </div>

              {/*  */}
            </div>
            <div className="mt-5">
              <AdminSubmitButton
                loading={createGalleryLoading}
                text="Create Gallery"
              />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
};

export default AdminGallery;
