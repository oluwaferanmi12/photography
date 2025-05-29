/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams, useSearchParams } from "next/navigation";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useEffect, useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { Col, Row, Spin } from "antd";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import Image from "next/image";
import galleryThumbnail from "@/assets/svgs/Admin_svgs/single_gallery_thumbnail.svg";
import ThumbnailUpload from "@/components/admin-components/sideNav/thumbnailUpload/thumbnail-upload";
import trashBin from "@/assets/svgs/Admin_svgs/light-bg-trash-bin.svg";
import { SinglePageTopHeader } from "@/components/admin-components/sideNav/singlepage-top-header/singlepage-top-header";

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

  // SINGLE PACKAGES

  const singleUploadPortfolio = async () => {
    setLoading(true);
    try {
      const response = await apiCall("get", `Portfolio/Images/${portfolioId}`);
      console.log(response);
      setSinglePortfolioData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("An error occured while loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singleUploadPortfolio();
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
      singleUploadPortfolio();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading images");
    } finally {
      setUploadPortfolioLoading(false);
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
        <div className="p-10 text-black">
          <div className="flex flex-col gap-8">
            <SinglePageTopHeader
              img={galleryThumbnail}
              description={description || ""}
              singleComponentSlug={
                typeof singlePortfolioSlug === "string"
                  ? singlePortfolioSlug
                  : ""
              }
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
                              src={`http://olaitanakinlade.com/${image.imageUrl}`}
                              alt="portfolio image"
                              className="rounded-3xl object-cover w-full h-full"
                              // width={400} // or any width you want
                              // height={300} // or adjust as needed
                              // style={{ objectFit: "cover" }}
                            />
                            <span className="absolute right-14 bottom-14">
                              <Image
                                src={trashBin}
                                className="cursor-pointer"
                                alt="bin"
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
      </Spin>
    </AdminPageLayout>
  );
}
