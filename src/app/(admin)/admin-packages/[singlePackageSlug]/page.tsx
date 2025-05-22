"use client";

import { useParams, useSearchParams } from "next/navigation";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useEffect, useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { Col, Row, Spin } from "antd";
import { PlanCardProps } from "@/components/plans-card/PlanCardProps";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";

export default function SinglePackage() {
  const [openAddPackage, setOpenAddPackage] = useState(false);
  const { singlePackageSlug } = useParams();
  const searchParams = useSearchParams();
  const description = searchParams.get("description");
  const serviceId = searchParams.get("serviceId");

  const [packageName, setPackageName] = useState("");
  const [packagePrice, setPackagePrice] = useState<number>();
  const [packageDescription, setPackageDescription] = useState("");
  const [packageNameError, setPackageNameError] = useState("");
  const [packagePriceError, setPackagePriceError] = useState("");
  const [packageDescriptionError, setPackageDescriptionError] = useState("");
  const [createPackageLoading, setCreatePackageLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [packageData, setPackageData] = useState([]);

  // const planBenefit = [
  //   "Consultation call",
  //   "60 min. session",
  //   "1 - 2 outfit",
  //   "max 4 people",
  //   "10 images professional edited and delivered in an online gallery",
  //   "$20 per additional image",
  //   "$50 per additional person",
  //   "$125 per additional hour",
  // ];

  // SINGLE PACKAGES

  const singlePackage = async () => {
    setLoading(true);
    try {
      const response = await apiCall(
        "get",
        `Admin/Services/packages/${serviceId}`
      );
      setPackageData(response.data.data.packages);
    } catch (error) {
      console.log(error);
      toast.error("An error occured while loading data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    singlePackage();
  }, []);

  // CREATE SERVICES
  const handleCreatePackages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatePackageLoading(true);

    let isError = false;

    if (!packageName.trim()) {
      setPackageNameError("Please enter package name");
      isError = true;
    } else {
      setPackageNameError("");
    }
    if (!packageDescription.trim()) {
      setPackageDescriptionError("Please enter package description");
      isError = true;
    } else {
      setPackageDescriptionError("");
    }
    if (!packagePrice) {
      setPackagePriceError("Please enter package price");
      isError = true;
    } else {
      setPackagePriceError("");
    }

    if (isError) {
      setCreatePackageLoading(false);
      return;
    }

    try {
      await apiCall("post", "/Admin/Services/packages", {
        serviceId: serviceId,
        title: packageName,
        description: packageDescription,
        active: true,
        details: "",
        price: packagePrice,
      });
      toast.success("Package Created Successfully");
      setPackageName("");
      setPackageDescription("");
      setPackagePrice(undefined);
      setOpenAddPackage(false);
      singlePackage();
    } catch (error) {
      console.log(error);
      toast.error("An error occured while creating package");
    } finally {
      setCreatePackageLoading(false);
    }
  };

  return (
    <AdminPageLayout
      showFilters={false}
      headerProps={{
        dashTitle: "Services and Packages",
        showDescript: false,
        buttonTitle: "Add a package",
        buttonOnClick: () => setOpenAddPackage(true),
      }}
    >
      <Spin spinning={loading} size="large">
        <div className="p-10 text-black">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {singlePackageSlug}
              </h3>
              <p className="text-base font-normal text-[#333333]">
                {description}
              </p>
            </div>

            <div>
              {!loading ? (
                packageData.length ? (
                  <Row gutter={[32, 32]}>
                    {packageData.map((pkg: any, idx: number) => (
                      <Col key={idx} xs={24} md={12} lg={8}>
                        <PlanCardProps
                          variant="admin"
                          planType={pkg.title}
                          planAmount={pkg.price}
                          planDescription={pkg.description}
                          planActiveness={pkg.active}
                        />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <p className="text-lg text-red-500">
                    No Package is available for this service
                  </p>
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        {/* Create Service DRAWER */}
        <ResponsiveDrawer
          title="Add a package"
          open={openAddPackage}
          onClose={() => setOpenAddPackage(false)}
        >
          <div className="pb-14">
            <form onSubmit={handleCreatePackages}>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Package name
                  </label>
                  <Input
                    value={packageName}
                    onChangeInput={(e) => {
                      setPackageName(e.target.value);
                      if (packageNameError) setPackageNameError("");
                    }}
                    variant="admin"
                    placeholder="Basic"
                  />
                  {packageNameError && (
                    <p className="text-red-700">{packageNameError}</p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="price"
                    className="text-grayish-500 font-semibold"
                  >
                    Price
                  </label>
                  <Input
                    value={packagePrice?.toString() || ""}
                    type="number"
                    onChangeInput={(e) => {
                      const value = parseFloat(e.target.value);
                      setPackagePrice(isNaN(value) ? undefined : value);
                      if (packagePriceError) setPackagePriceError("");
                    }}
                    variant="admin"
                    placeholder="100"
                  />
                  {packagePriceError && (
                    <p className="text-red-700">{packagePriceError}</p>
                  )}
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
                      value={packageDescription}
                      placeholder="Package description"
                      onChange={(e) => {
                        setPackageDescription(e.target.value);
                        if (packageDescriptionError) setPackageDescriptionError("");
                      }}
                      className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                      rows={3}
                    ></textarea>
                  </div>
                  {packageDescriptionError && (
                    <p className="text-red-700">{packageDescriptionError}</p>
                  )}
                </div>

                {/*  */}
              </div>
              <div className="mt-5">
                <AdminSubmitButton
                  loading={createPackageLoading}
                  text="Create a package"
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>
      </Spin>
    </AdminPageLayout>
  );
}
