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
import { SinglePageTopHeader } from "@/components/admin-components/sideNav/singlepage-top-header/singlepage-top-header";
import { PackageInterface } from "../../../../../interface/interface";

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
  const [packagePayload, setPackagePayload] = useState<PackageInterface>({
    active: true,
    description: "",
    details: "",
    id: "",
    lastModified: "",
    price: 0,
    serviceId: "",
    title: "",
  });

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

  const handleCreatePackages = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreatePackageLoading(true);

    let isError = false;

    if (!packagePayload.title.trim()) {
      setPackageNameError("Please enter package name");
      isError = true;
    } else {
      setPackageNameError("");
    }
    if (!packagePayload.description.trim()) {
      setPackageDescriptionError("Please enter package description");
      isError = true;
    } else {
      setPackageDescriptionError("");
    }
    if (!packagePayload.price) {
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
        title: packagePayload.title,
        description: packagePayload.description,
        active: true,
        details: "",
        price: packagePayload.price,
      });
      toast.success("Package Created Successfully");
      setPackageName("");
      setPackageDescription("");
      setPackagePrice(undefined);
      setOpenAddPackage(false);
      singlePackage();
    } catch (error) {
      toast.error("An error occured while creating package");
    } finally {
      setCreatePackageLoading(false);
    }
  };

  const handleEditPackage = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setCreatePackageLoading(true);
      const { id, ...rest } = packagePayload;
      const result = await apiCall(
        "post",
        `/Admin/Services/packages/update/${packagePayload.id}`,
        rest
      );
      setPackagePayload({
        active: true,
        description: "",
        details: "",
        id: "",
        lastModified: "",
        price: 0,
        serviceId: "",
        title: "",
      });
      setOpenAddPackage(false);
      singlePackage();
    } catch (e) {
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
        subNavTitle: "Packages",
        buttonOnClick: () => setOpenAddPackage(true),
      }}
    >
      <Spin spinning={loading} size="large">
        <div className="p-4 text-black">
          <div className="flex flex-col gap-8">
            <SinglePageTopHeader
              description={description || ""}
              singleComponentSlug={
                typeof singlePackageSlug === "string" ? singlePackageSlug : ""
              }
            />

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
                          packages={pkg}
                          editClicked={() => {
                            setOpenAddPackage(true);
                            setPackagePayload(pkg);
                          }}
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
          onClose={() => {
            setOpenAddPackage(false);
            setPackagePayload({
              active: true,
              description: "",
              details: "",
              id: "",
              lastModified: "",
              price: 0,
              serviceId: "",
              title: "",
            });
          }}
        >
          <div className="pb-14">
            <form
              onSubmit={
                packagePayload.id ? handleEditPackage : handleCreatePackages
              }
            >
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col gap-3">
                  <label
                    htmlFor="name"
                    className="text-grayish-500 font-semibold"
                  >
                    Package name
                  </label>
                  <Input
                    value={packagePayload.title}
                    onChangeInput={(e) => {
                      setPackagePayload((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }));
                      if (packageNameError) {
                        setPackagePayload((prev) => ({
                          ...prev,
                          title: "",
                        }));
                      }
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
                    value={String(packagePayload.price)}
                    type="number"
                    onChangeInput={(e) => {
                      const value = parseFloat(e.target.value);
                      setPackagePayload((prev) => ({
                        ...prev,
                        price: value,
                      }));
                      if (packagePriceError) {
                        setPackagePriceError("");
                        setPackagePayload((prev) => ({
                          ...prev,
                          price: 0,
                        }));
                      }
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
                      value={packagePayload.description}
                      placeholder="Package description"
                      onChange={(e) => {
                        setPackagePayload((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }));
                        if (packageDescriptionError)
                          setPackagePayload((prev) => ({
                            ...prev,
                            description: "",
                          }));
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
                  text={packagePayload.id ? "Edit package" : "Create a package"}
                />
              </div>
            </form>
          </div>
        </ResponsiveDrawer>
      </Spin>
    </AdminPageLayout>
  );
}
