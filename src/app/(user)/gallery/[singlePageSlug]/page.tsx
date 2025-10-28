"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Row, Col, Modal } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import { apiCall } from "@/axios/axios";
import { baseUrl } from "@/lib/base-url";
import Button from "@/components/button/button";
import { toast } from "sonner";
import selectedIcon from "@/assets/svgs/selectedIcon.svg";
import downloadIcon from "@/assets/svgs/downloadIcon.svg";
import selectedIconActive from "@/assets/svgs/selectedIconActive.svg";
import bas_thanks from "@/assets/svgs/BAS_thanks_modal_icon.svg";
import moment from "moment";

interface ImagesProps {
  id: string;
  galleryId: string;
  selected: string;
  imageUrl: string;
}

const GallerySinglePage = () => {
  const [galleryData, setGalleryData] = useState<ImagesProps[]>([]);
  const [galleryInfo, setGalleryInfo] = useState<any>();
  const [selectedImages, setSelectedImages] = useState<ImagesProps[]>([]);
  const params = useParams();
  const searchParams = useSearchParams();
  const singlePageSlug = params?.singlePageSlug as string;
  const [pageName, setPageName] = useState("");
  const id = searchParams.get("id");
  const imageCount = searchParams.get("imageNo");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showSelectedImages, setShowSelectedImages] = useState(false);
  const [canNotSelect, setCanNotSelect] = useState(false);

  const fetchClient = async () => {
    try {
      const clientRes = await apiCall(
        "get",
        `/Gallery/${id ? id : singlePageSlug}`
      );
      console.log(clientRes, "Client res");
      setGalleryInfo(clientRes.data.gallery);
      setGalleryData(clientRes.data.images);
      setSelectedImages(clientRes.data.filter((item) => item.selected));
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  const handleSelectedImages = (obj: ImagesProps) => {
    let foundIndex = 0;
    const foundImage = selectedImages.find((item, index) => {
      foundIndex = index;
      return item.id === obj.id;
    });
    const selectedImageCopy = [...selectedImages];
    if (foundImage) {
      // remove it from the selected image
      selectedImageCopy.splice(foundIndex, 1);

      setSelectedImages([...selectedImageCopy]);
      return;
    }

    selectedImageCopy.push(obj);
    setSelectedImages(selectedImageCopy);
  };

  useEffect(() => {
    if (
      (galleryInfo?.imageCount ?? 0) &&
      selectedImages.length > +(galleryInfo?.imageCount ?? 0)
    ) {
      setCanNotSelect(true);
      toast.error("You can not select more images");
    } else {
      setCanNotSelect(false);
    }
  }, [selectedImages]);

  const handleRemoveImageFromSelection = (id: string) => {
    const findIndex = selectedImages.findIndex((item) => item.id === id);
    const spreadImages = [...selectedImages];
    spreadImages.splice(findIndex, 1);
    setSelectedImages([...spreadImages]);
  };

  const handleSubmitSelectedImages = async () => {
    try {
      if (canNotSelect) {
        toast.error("Too many images selected");
        return;
      }
      if (!selectedImages.length) {
        toast.error("Kindly select some images");
        return;
      }
      const payload = selectedImages.map((item) => ({
        id: item.id,
        selected: true,
      }));
      setSubmitLoading(true);
      const result = await apiCall(
        "post",
        `/Gallery/SelectImages/${id ? id : singlePageSlug}`,
        payload
      );
      setShowSelectedImages(false);
      toast.success("Selections submitted successfully");
    } catch (e) {
    } finally {
      setSubmitLoading(false);
    }
  };
  const handleGetImageName = (val_: string) => {
    const splitImage = val_.split("/");
    return splitImage[splitImage.length - 1];
  };

  const handleDownloadImage = async (rawUrl: string, fileName: string) => {
    try {
      // encode spaces and other unsafe chars in the *full* URL
      const encodedUrl = encodeURI(rawUrl);

      const res = await fetch(encodedUrl, { credentials: "include" });
      if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`);

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download =
        fileName || encodedUrl.split("/").pop()?.split("?")[0] || "image.png";
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      toast.error("Could not download the image.");
    }
  };

  return (
    <div>
      <Modal
        open={showSelectedImages}
        onCancel={() => setShowSelectedImages(false)}
        footer={null}
        className="sessionForm_modal custom-scroll-modal"
        closeIcon={null}
        width={900}
        centered={true}
      >
        <div className="py-8 px-10 w-full relative z-50">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-2">
              <span>
                <Image src={bas_thanks} alt="bas" />
              </span>
              <h3 className="font-playfair text-3xl text-white">
                Please confirm the selected images
              </h3>
            </div>
          </div>
          <div className="cursor-pointer">
            <Row gutter={24} justify={"center"} className="">
              {selectedImages.map((item) => {
                return (
                  <Col key={item.id} xs={12} className="mb-4">
                    <Image
                      src={`${baseUrl + item.imageUrl}`}
                      className="w-full h-[300px] min-h-[300px] object-cover"
                      alt="img"
                      width={300}
                      height={300}
                    />
                    {handleGetImageName(item.imageUrl)}
                  </Col>
                );
              })}
            </Row>
          </div>
          <div>
            <p className="text-[#D9C9AE]">
              {`Once you confirm it’s an irreversible action, additional image
              edit costs extra $20 per image.`}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => {
                setShowSelectedImages(false);
              }}
              className="border border-[#D9C9AE] px-4 py-2 rounded-full text-[#D9C9AE] cursor-pointer"
            >
              Go back
            </button>
            <button
              disabled={submitLoading}
              className="bg-[#C5B79E] px-4 py-2 rounded-full text-[#151515] cursor-pointer"
              onClick={handleSubmitSelectedImages}
            >
              {submitLoading
                ? "Loading..."
                : `Submit ${selectedImages.length} image(s)`}
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col gap-14 justify-center items-center">
        <div className="flex flex-col gap-28 w-full px-5 lg:px-14 3xl:!px-28 py-28">
          <Row gutter={[16, 16]}>
            {/* Fixed/Sticky Left Column */}
            <Col xs={24} lg={8}>
              <div className="sticky top-28  self-start">
                <h3 className="font-playfair text-5xl mb-8 capitalize">
                  {galleryInfo?.name}
                </h3>
                <span className="text-light-brown rounded-md font-medium text-[12px] border border-light-brown bg-[#252426ED]/93 py-1 px-2">
                  {moment(galleryInfo?.dateModified ?? "").format(
                    "D MMMM YYYY"
                  )}
                </span>
                <div className="mt-5">
                  <p className="text-lg text-[#E2E2E2]">
                    From polished headshots to soulful lifestyle captures, I
                    craft images that do more than just “look good”. They speak
                    volumes. Whether for personal branding, professional needs,
                    or intimate memories, every photo session is a curated
                    experience.
                  </p>
                </div>
                <div className="mt-4 flex justify-center w-full">
                  <Button
                    onClick={() => {
                      setShowSelectedImages(true);
                    }}
                    loading={submitLoading}
                    variant="filled"
                    size="large"
                    text={`Submit ${selectedImages.length} image(s) for Edit`}
                    widthFull
                  />
                </div>
              </div>
            </Col>

            {/* Scrollable Right Column (naturally scrolls with page) */}
            <Col xs={24} lg={16}>
              <Row gutter={[32, 32]}>
                {galleryData.map((item, idx) => (
                  <Col key={idx} xs={24} lg={12}>
                    <div
                      style={{
                        border: selectedImages.find((obj) => obj.id === item.id)
                          ? "8px solid white"
                          : "",
                      }}
                      className="cursor-pointer relative"
                      onClick={() => {
                        if (
                          selectedImages.find(
                            (imageVal) => imageVal.id === item.id
                          )
                        ) {
                          handleRemoveImageFromSelection(item.id);
                          return;
                        }
                        handleSelectedImages(item);
                      }}
                    >
                      <div className="flex items-center gap-2 absolute bottom-4 left-4 z-40">
                        <span>
                          <Image
                            src={
                              selectedImages.some(
                                (slectedImage) => slectedImage.id === item.id
                              )
                                ? selectedIconActive
                                : selectedIcon
                            }
                            alt=""
                          />
                        </span>
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            const imageName = handleGetImageName(item.imageUrl);
                            handleDownloadImage(
                              `${baseUrl + item.imageUrl}`,
                              imageName
                            );
                          }}
                        >
                          <Image src={downloadIcon} alt="" />
                        </span>
                      </div>
                      <Image
                        src={`${baseUrl + item.imageUrl}`}
                        className="w-full h-[500px] min-h-[500px] object-cover"
                        alt="img"
                        width={500}
                        height={500}
                      />
                    </div>
                    {handleGetImageName(item.imageUrl)}
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GallerySinglePage;
