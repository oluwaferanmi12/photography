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

export default function SingleAdminGallery() {
  const [openUploadClient, setOpenUploadClient] = useState(false);
  const { singleClientSlug } = useParams();
  const searchParams = useSearchParams();
  const description = searchParams.get("description");
  const clientId = searchParams.get("clientId");
  const [uploadClientLoading, setUploadClientLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [singleClientData, setSingleClientData] = useState([]);
  const [thumbnails, setThumbnails] = useState<File[]>([]);
  const [thumbnailError, setThumbnailError] = useState("");

  // SINGLE PACKAGES

  const singleUploadClient = async () => {
    setLoading(true);
    try {
      const response = await apiCall("get", `Portfolio/Images/${clientId}`);
      console.log(response);
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

    try {
      const formData = new FormData();

      // Ensure clientId is a string
      if (!clientId) {
        toast.error("Client ID is missing.");
        return;
      }

      formData.append("ClientId", clientId);

      thumbnails.forEach((file) => {
        formData.append("Images", file);
      });

      await apiCall("post", "/Portfolio/Images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Upload successful");
      setThumbnails([]);
      setOpenUploadClient(false);
      singleUploadClient();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while uploading images");
    } finally {
      setUploadClientLoading(false);
    }
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
        <div className="p-10 text-black">
          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <div>
                <Image src={galleryThumbnail} alt="gallery_thumbnail" />
              </div>
              <div>
                {typeof singleClientSlug === "string" && (
                  <h3 className="text-2xl font-semibold mb-4">
                    {decodeURIComponent(singleClientSlug)}
                  </h3>
                )}
                <p className="text-base font-normal text-[#333333]">
                  {description}
                </p>
              </div>
            </div>

            <div>
              {!loading ? (
                singleClientData.length ? (
                  <Row gutter={[32, 32]}>
                    {singleClientData.map(
                      (image: {
                        clientId: string;
                        imageUrl: string;
                        id: string;
                      }) => (
                        <Col key={image.id} xs={24} md={12} lg={8}>
                          <div className="border h-[260px] 3xl:h-[400px] rounded-3xl p-4 bg-[#EFEEEE] overflow-hidden relative">
                            <img
                              src={`http://olaitanakinlade.com/${image.imageUrl}`}
                              alt="client image"
                              className="rounded-3xl object-cover w-full h-full"
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
                />
                {/*  */}
                <div className="flex justify-between items-center">
                  <p className="text-black text-sm">Has Watermark</p>
                  <div>
                    <Switch defaultChecked={true} className="custom-switch" />
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
