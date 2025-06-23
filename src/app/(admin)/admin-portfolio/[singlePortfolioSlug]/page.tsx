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
import { SinglePageTopHeader } from "@/components/admin-components/sideNav/singlepage-top-header/singlepage-top-header";
import { baseUrl } from "@/lib/base-url";
import { Input } from "@/components/inputs/input";

export default function SingleUploadPortfolio() {
  const [openUploadPortfolio, setOpenUploadPortfolio] = useState(false);
  const { singlePortfolioSlug } = useParams();
  const searchParams = useSearchParams();
  const description = searchParams.get("description");
  const portfolioId = searchParams.get("portfolioId");
  const [uploadPortfolioLoading, setUploadPortfolioLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [singlePortfolioData, setSinglePortfolioData] = useState([]);
  const [thumbnails, setThumbnails] = useState<File[]>([]);
  const [thumbnailError, setThumbnailError] = useState("");
  const [resetCounter, setResetCounter] = useState(0);
  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const [title, setTitle] = useState("");
  const [apiDescription, setApiDescription] = useState(description);
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  // SINGLE PACKAGES

  const GetSinglePortfolio = async () => {
    setLoading(true);
    try {
      const response = await apiCall("get", `Portfolio/Images/${portfolioId}`);
      setSinglePortfolioData(response.data);
    } catch (error) {
      toast.error("An error occured while loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetSinglePortfolio();
  }, []);

  // UPLOAD IMAGES
  const handleUploadImages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploadPortfolioLoading(true);
    let isError = false;
    if (thumbnails.length === 0) {
      setThumbnailError("Please upload at least one image");
      isError = true;
    } else setThumbnailError("");

    if (isError) {
      setUploadPortfolioLoading(false);
      return;
    }

    try {
      const formData = new FormData();

      // Ensure portfolioId is a string
      if (!portfolioId) {
        toast.error("Portfolio ID is missing.");
        return;
      }

      formData.append("PortfolioId", portfolioId);

      thumbnails.forEach((file) => {
        formData.append("Images", file);
      });

      await apiCall("post", "/Portfolio/Images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Upload successful");
      setThumbnails([]);
      setOpenUploadPortfolio(false);
      setResetCounter((prev) => prev + 1);
      GetSinglePortfolio();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading images");
    } finally {
      setUploadPortfolioLoading(false);
    }
  };

  const handleRemoveImage = async (imageId: string) => {
    try {
      await apiCall(
        "post",
        `/Portfolio/Images/Remove/${portfolioId}/${imageId}`
      );

      toast.success("Image Deleted successfully");
      GetSinglePortfolio();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting images");
    }
  };

  const handleUpdatePortfolio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setUpdateLoading(true);
      const formData = new FormData();
      formData.append("Id", portfolioId!);
      formData.append("Title", title);
      formData.append("Description", apiDescription!);
      formData.append("IsActive", `${portfolioActive}`);
      formData.append("VideoLink", videoLink);
      const result = await apiCall("post", "/Portfolio/Update", formData);
      toast.success("Updated successfully");
    } catch (e) {
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <AdminPageLayout
      showFilters={false}
      headerProps={{
        dashTitle: "Portfolio",
        showDescript: false,
        buttonTitle: "Upload a picture",
        subNavTitle: "Gallery",
        buttonOnClick: () => setOpenUploadPortfolio(true),
      }}
    >
      <Spin spinning={loading} size="large">
        <div className="p-4 text-black">
          <div className="flex flex-col gap-8">
            <SinglePageTopHeader
              img={galleryThumbnail}
              description={description || ""}
              singleComponentSlug={
                typeof singlePortfolioSlug === "string"
                  ? singlePortfolioSlug
                  : ""
              }
              icon
              editHandler={() => setShowEditDrawer(true)}
            />
            <div>
              {!loading ? (
                singlePortfolioData.length ? (
                  <Row gutter={[32, 32]}>
                    {singlePortfolioData.map(
                      (image: {
                        portfolioId: string;
                        imageUrl: string;
                        id: string;
                      }) => (
                        <Col key={image.id} xs={24} md={12} lg={8}>
                          <div className="border h-[260px] 3xl:h-[400px] rounded-3xl p-4 bg-[#EFEEEE] overflow-hidden relative">
                            <img
                              src={`${baseUrl + image.imageUrl}`}
                              alt="portfolio image"
                              className="rounded-3xl object-cover w-full h-full"
                            />
                            <span className="absolute right-14 bottom-14">
                              <Image
                                src={trashBin}
                                className="cursor-pointer"
                                alt="bin"
                                onClick={() => handleRemoveImage(image.id)}
                              />
                            </span>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                ) : (
                  <p className="text-lg text-red-500">No Image(s) uploaded</p>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* Create Service DRAWER */}
        <ResponsiveDrawer
          title="Upload image"
          open={openUploadPortfolio}
          onClose={() => setOpenUploadPortfolio(false)}
        >
          <div className="pb-14">
            <form onSubmit={handleUploadImages}>
              <div className="flex flex-col gap-4">
                <ThumbnailUpload
                  onFileSelect={(files) => {
                    setThumbnails(files);
                    setThumbnailError("");
                  }}
                  error={thumbnailError}
                  multiple={true}
                  resetTrigger={resetCounter}
                />
                {/*  */}
              </div>
              <div className="mt-5">
                <AdminSubmitButton
                  loading={uploadPortfolioLoading}
                  text="upload picture"
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>

        {/* Edit Package Drawer  */}

        <ResponsiveDrawer
          title="Edit page"
          open={showEditDrawer}
          onClose={() => setShowEditDrawer(false)}
        >
          <div className="pb-14">
            <form onSubmit={handleUpdatePortfolio}>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Title
                  </label>
                  <Input
                    onChangeInput={(e) => {
                      setTitle(e.target.value);
                    }}
                    variant="admin"
                    placeholder="Wedding"
                  />
                </div>
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Description
                  </label>
                  <Input
                    onChangeInput={(e) => {
                      setApiDescription(e.target.value);
                    }}
                    variant="admin"
                    placeholder="Wedding"
                  />
                </div>

                <div className="w-full flex justify-between items-center gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Active
                  </label>
                  <Switch
                    checked={portfolioActive}
                    onChange={(checked) => {
                      setPortfolioActive(checked);
                    }}
                  />
                </div>

                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Video Link
                  </label>
                  <Input
                    onChangeInput={(e) => {
                      setVideoLink(e.target.value);
                    }}
                    variant="admin"
                    placeholder="Wedding"
                  />
                </div>

                {/* <ThumbnailUpload
                  onFileSelect={(files) => {
                    setThumbnails(files);
                    setThumbnailError("");
                  }}
                  error={thumbnailError}
                  multiple={true}
                  resetTrigger={resetCounter}
                /> */}
                {/*  */}
              </div>
              <div className="mt-5">
                <AdminSubmitButton
                  loading={updateLoading}
                  text="Edit"
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>
      </Spin>
    </AdminPageLayout>
  );
}
