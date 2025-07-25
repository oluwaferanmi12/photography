/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams, useSearchParams } from "next/navigation";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useEffect, useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { Col, Row, Spin, Switch } from "antd";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import Image from "next/image";
import galleryThumbnail from "@/assets/svgs/Admin_svgs/single_gallery_thumbnail.svg";
import ThumbnailUpload from "@/components/admin-components/sideNav/thumbnailUpload/thumbnail-upload";
import trashBin from "@/assets/svgs/Admin_svgs/light-bg-trash-bin.svg";
import editIcon from "@/assets/svgs/Admin_svgs/admin-edit.svg";
import { SinglePageTopHeader } from "@/components/admin-components/sideNav/singlepage-top-header/singlepage-top-header";
import { baseUrl } from "@/lib/base-url";

export default function SingleAdminGallery() {
  const [openUploadClient, setOpenUploadClient] = useState(false);
  const { singleClientSlug } = useParams();
  const searchParams = useSearchParams();
  const description = searchParams.get("description");
  const clientId = searchParams.get("clientId");
  const [uploadClientLoading, setUploadClientLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [singleClientData, setSingleClientData] = useState<
    { galleryId: string; selected: boolean; id: string; imageUrl: string }[]
  >([]);
  const [thumbnails, setThumbnails] = useState<File[]>([]);
  const [thumbnailError, setThumbnailError] = useState("");
  const [activeTab, setActiveTab] = useState("uploads");
  const [resetCounter, setResetCounter] = useState(0);
  const [hasWatermark, setHasWaterMark] = useState(true);

  // SINGLE PACKAGES
  const singleUploadClient = async () => {
    setLoading(true);
    try {
      const response = await apiCall("get", `Gallery/${clientId}`);
      setSingleClientData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("An error occured while loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singleUploadClient();
  }, []);

  // UPLOAD IMAGES
  const handleUploadImages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploadClientLoading(true);

    let isError = false;

    if (thumbnails.length === 0) {
      setThumbnailError("Please upload at least one image");
      isError = true;
    } else setThumbnailError("");

    if (isError) {
      setUploadClientLoading(false);
      return;
    }

    if (!clientId) {
      toast.error("Client ID is missing.");
      setUploadClientLoading(false);
      return;
    }

    try {
      for (const file of thumbnails) {
        const formData = new FormData();
        formData.append("GalleryId", clientId);
        formData.append("HasWatermark", hasWatermark.toString());
        formData.append("Images", file);

        await apiCall("post", "/Gallery/Images", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      toast.success("All images uploaded successfully");
      setThumbnails([]);
      setOpenUploadClient(false);
      setResetCounter((prev) => prev + 1);
      singleUploadClient();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading images");
    } finally {
      setUploadClientLoading(false);
    }
  };

  const handleGetImageName = (val_: string) => {
    const splitImage = val_.split("/");
    return splitImage[splitImage.length - 1];
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      const result = await apiCall(
        "post",
        `/Gallery/Images/Remove/${clientId}/${imageId}`
      );
      toast.success("Removed successfully");
      singleUploadClient();
    } catch (e) {}
  };
  return (
    <AdminPageLayout
      showFilters={false}
      headerProps={{
        dashTitle: "Client's Gallery",
        showDescript: false,
        buttonTitle: "Upload a picture",
        subNavTitle: "Gallery",
        buttonOnClick: () => setOpenUploadClient(true),
      }}
    >
      <Spin spinning={loading} size="large">
        <div className="p-4 text-black">
          <div className="flex flex-col gap-8">
            <SinglePageTopHeader
              icon
              img={galleryThumbnail}
              description={description || ""}
              singleComponentSlug={
                typeof singleClientSlug === "string" ? singleClientSlug : ""
              }
            />

            {/* SECOND SECTION */}
            <div>
              <div className="flex w-full justify-between border-b border-[#F3F0EB]">
                <div
                  onClick={() => setActiveTab("uploads")}
                  className={`${
                    activeTab === "uploads"
                      ? "text-base lg:text-lg font-semibold border-b-2 border-[#090909] cursor-pointer text-[#090909]"
                      : "text-[#757575] text-sm lg:text-base border-[#F3F0EB] "
                  } w-full flex justify-center items-center`}
                >
                  <p className="py-3 cursor-pointer">Uploads</p>
                </div>
                <div
                  onClick={() => setActiveTab("selections")}
                  className={`${
                    activeTab === "selections"
                      ? "text-base lg:text-lg font-semibold border-b-2 border-[#090909] cursor-pointer text-[#090909]"
                      : "text-[#757575] text-sm lg:text-base border-[#F3F0EB]"
                  } w-full flex justify-center items-center `}
                >
                  <p className="py-3  cursor-pointer">
                    Client&apos;s Selections
                  </p>
                </div>
              </div>
              {/* TABS OUTPUT */}
              <div className="mt-5">
                {activeTab === "uploads" ? (
                  <div>
                    {!loading ? (
                      singleClientData.length ? (
                        <Row gutter={[32, 32]}>
                          {singleClientData.map((image) => (
                            <Col key={image.id} xs={24} md={12} lg={8}>
                              <div className="border h-[260px] 3xl:h-[400px] rounded-3xl p-4 bg-[#EFEEEE] overflow-hidden relative">
                                <img
                                  src={` ${baseUrl + image.imageUrl}`}
                                  alt="client image"
                                  className="rounded-3xl object-cover w-full h-full"
                                />
                                <span className="absolute right-14 bottom-14">
                                  <Image
                                    onClick={() => {
                                      handleDeleteImage(image.id);
                                    }}
                                    src={trashBin}
                                    className="cursor-pointer"
                                    alt="bin"
                                  />
                                </span>
                              </div>
                              <p>{handleGetImageName(image.imageUrl)}</p>
                            </Col>
                          ))}
                        </Row>
                      ) : (
                        <p className="text-lg text-red-500">
                          No Image(s) uploaded
                        </p>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div>
                    {!loading ? (
                      singleClientData.filter((item) => item.selected)
                        .length ? (
                        <Row gutter={[32, 32]}>
                          {singleClientData
                            .filter((item) => item.selected)
                            .map((image) => (
                              <Col key={image.id} xs={24} md={12} lg={8}>
                                <div className="border h-[260px] 3xl:h-[400px] rounded-3xl p-4 bg-[#EFEEEE] overflow-hidden relative">
                                  <img
                                    src={` ${baseUrl + image.imageUrl}`}
                                    alt="client image"
                                    className="rounded-3xl object-cover w-full h-full"
                                  />
                                  <span className="absolute right-14 bottom-14">
                                    <Image
                                      onClick={() => {
                                        handleDeleteImage(image.id);
                                      }}
                                      src={trashBin}
                                      className="cursor-pointer"
                                      alt="bin"
                                    />
                                  </span>
                                  <p>{handleGetImageName(image.imageUrl)}</p>
                                </div>
                              </Col>
                            ))}
                        </Row>
                      ) : (
                        <p className="text-lg text-red-500 text-center">
                          No Image(s) selected by client
                        </p>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Create Service DRAWER */}
        <ResponsiveDrawer
          title="Upload image"
          open={openUploadClient}
          onClose={() => setOpenUploadClient(false)}
        >
          <div className="pb-14">
            <form onSubmit={handleUploadImages}>
              <div className="flex flex-col gap-4">
                <ThumbnailUpload
                  labelTitle="Gallery images"
                  onFileSelect={(files) => {
                    setThumbnails(files);
                    setThumbnailError("");
                  }}
                  error={thumbnailError}
                  multiple={true}
                  resetTrigger={resetCounter}
                />
                {/*  */}
                <div className="flex justify-between items-center">
                  <p className="text-black text-sm">Has Watermark</p>
                  <div>
                    <Switch
                      checked={hasWatermark}
                      onChange={() => setHasWaterMark(!hasWatermark)}
                      className="custom-switch"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <AdminSubmitButton
                  loading={uploadClientLoading}
                  text="upload picture"
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>
      </Spin>
    </AdminPageLayout>
  );
}
