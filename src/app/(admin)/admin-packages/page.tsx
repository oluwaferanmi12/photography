"use client";

import { TableColumn } from "react-data-table-component";
import { Spin, Switch } from "antd";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import BaseDataTable from "@/components/data-table/data-table";
import Image from "next/image";
import dot from "@/assets/svgs/dots.svg";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useEffect, useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { useRouter } from "next/navigation";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import ThumbnailUpload from "@/components/admin-components/sideNav/thumbnailUpload/thumbnail-upload";
import { ModalWrapper } from "@/components/modal-wrapper/modal-wrapper";

interface PackageOption {
  name: string;
  price: string;
}

interface Service {
  id: string;
  serviceName: string;
  packages: PackageOption[];
  status: boolean;
  lastUpdated: string;
  description: string;
}

// const services: Service[] = [
//   {
//     serviceName: "Weddings",
//     packages: [
//       { name: "Basic", price: "200" },
//       { name: "Classic", price: "200" },
//       { name: "Premium", price: "200" },
//     ],
//     status: true,
//     lastUpdated: "Today",
//   },
//   {
//     serviceName: "Birthdays",
//     packages: [
//       { name: "Basic", price: "200" },
//       { name: "Classic", price: "200" },
//       { name: "Premium", price: "200" },
//     ],
//     status: true,
//     lastUpdated: "Today",
//   },
//   {
//     serviceName: "Kids",
//     packages: [
//       { name: "Basic", price: "200" },
//       { name: "Classic", price: "200" },
//       { name: "Premium", price: "200" },
//     ],
//     status: false,
//     lastUpdated: "Today",
//   },
// ];

export default function Services() {
  const [openCreateService, setOpenCreateService] = useState(false);
  const [createServiceLoading, setCreateServiceLoading] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [serviceNameError, setServiceNameError] = useState("");
  const [tagsError, setTagsError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [thumbnails, setThumbnails] = useState<File[]>([]);
  const [thumbnailError, setThumbnailError] = useState("");
  const [resetCounter, setResetCounter] = useState(0);
  const [idSelected, setIdSelected] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const router = useRouter();

  // Fetch services and their packages
  const fetchServices = async () => {
    try {
      const serviceRes = await apiCall("get", "/Admin/Services");
      const servicesData = serviceRes.data;

      // Fetch packages for all services concurrently
      const enrichedServices = await Promise.all(
        servicesData.map(async (service: any) => {
          try {
            const packageRes = await apiCall(
              "get",
              `/Admin/Services/packages/${service.id}`
            );

            const packages = packageRes?.data?.data?.packages || [];

            return {
              id: service.id,
              serviceName: service.title,
              description: service.description,
              packages: packages.map((pkg: any) => ({
                name: pkg.title,
                price: pkg.price,
              })),
              status: true, // Or derive from API if available
              lastUpdated: new Date(service.lastModified).toDateString(),
            };
          } catch (err) {
            console.error("Error fetching packages:", err);
            return {
              id: service.id,
              serviceName: service.title,
              description: service.description,
              packages: [],
              status: true,
              lastUpdated: new Date(service.lastModified).toDateString(),
            };
          }
        })
      );

      setServices(enrichedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  // CREATE SERVICES
  const handleCreateService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateServiceLoading(true);

    let hasError = false;

    if (!serviceName.trim()) {
      setServiceNameError("Please include service name");
      hasError = true;
    } else {
      setServiceNameError("");
    }

    if (!description.trim()) {
      setDescriptionError("Please include service description");
      hasError = true;
    } else {
      setDescriptionError("");
    }

    if (!tags.trim()) {
      setTagsError("Please include tags");
      hasError = true;
    } else {
      setTagsError("");
    }

    if (thumbnails.length === 0) {
      setThumbnailError("Please upload at least one image");
      hasError = true;
    } else setThumbnailError("");

    if (hasError) {
      setCreateServiceLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", serviceName);
      formData.append("Description", description);
      formData.append("Tags", tags);

      thumbnails.forEach((file) => {
        formData.append("Images", file);
      });

      await apiCall("post", "/Admin/Services", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Service Created Successfully");
      setServiceName("");
      setDescription("");
      setTags("");
      setThumbnails([]);
      setResetCounter((prev) => prev + 1);
      setOpenCreateService(false);
      fetchServices();
    } catch (error) {
      console.log(error);
      toast.error("An error occured while creating service");
    } finally {
      setCreateServiceLoading(false);
    }
  };

  const handleDeleteService = async () => {
    try {
      setDeleteLoading(true);
      const result = await apiCall(
        `post`,
        `/Admin/Services/Remove/${idSelected}`
      );
      toast.success("Service deleted");
      setModalActive(false);
      fetchServices();
    } catch (e) {
    } finally {
      setDeleteLoading(false);
    }
  };

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
        <div className="flex flex-wrap gap-2">
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
        <div className="flex items-center gap-2">
          <button
            className="flex items-center cursor-pointer gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50"
            onClick={() =>
              router.push(
                `/admin-packages/${encodeURIComponent(
                  row.serviceName
                )}?&description=${encodeURIComponent(
                  row.description
                )}&serviceId=${encodeURIComponent(row.id)}`
              )
            }
          >
            <span>
              <Image src={eyeIcon} alt="img" />
            </span>
            Details
          </button>
          <p
            onClick={() => {
              setModalActive(true);
              setIdSelected(row.id);
            }}
            className="text-[red] cursor-pointer"
          >
            Delete
          </p>
        </div>
      ),
      right: true,
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
      <ModalWrapper
        onCancel={() => {
          setModalActive(false);
        }}
        open={modalActive}
        headerText="Confirmation Modal"
      >
        <div className="my-3">
          <p className="text-2xl font-grotesk-semi-bold">
            Are you sure you want to delete ?
          </p>
          <div className="flex items-center gap-3 mt-4">
            <button
              disabled={deleteLoading}
              className="bg-[#1B1B1B] cursor-pointer py-2 px-4 rounded-lg text-white"
              onClick={handleDeleteService}
            >
              {deleteLoading ? "Loading..." : "Proceed"}
            </button>
            <button
              onClick={() => {
                setModalActive(false);
              }}
              className="cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
      <Spin spinning={loading} size="large">
        {services.length ? (
          <BaseDataTable title="Services" columns={columns} data={services} />
        ) : (
          <p>No Service data available</p>
        )}

        <ResponsiveDrawer
          title="Create a service"
          open={openCreateService}
          onClose={() => setOpenCreateService(false)}
        >
          <div className="pb-14">
            <form onSubmit={handleCreateService}>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Service name
                  </label>
                  <Input
                    value={serviceName}
                    onChangeInput={(e) => {
                      setServiceName(e.target.value);
                      if (serviceNameError) setServiceNameError("");
                    }}
                    variant="admin"
                    placeholder="Wedding"
                  />
                  {serviceNameError && (
                    <p className="text-red-700">{serviceNameError}</p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="tag"
                    className="text-grayish-500 font-semibold"
                  >
                    Tags
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                        if (descriptionError) setDescriptionError("");
                      }}
                      className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                      rows={3}
                    ></textarea>
                  </div>
                  {descriptionError && (
                    <p className="text-red-700">{descriptionError}</p>
                  )}
                </div>
                {/* Images */}
                <div className="w-full flex flex-col gap-3">
                  <ThumbnailUpload
                    onFileSelect={(files) => {
                      setThumbnails(files);
                      setThumbnailError("");
                    }}
                    error={thumbnailError}
                    multiple={true}
                    resetTrigger={resetCounter}
                  />
                </div>

                {/*  */}
              </div>
              <div className="mt-5">
                <AdminSubmitButton
                  loading={createServiceLoading}
                  text="Create Service"
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>
      </Spin>
    </AdminPageLayout>
  );
}
