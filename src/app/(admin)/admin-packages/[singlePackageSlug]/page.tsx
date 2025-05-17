"use client";

import { useParams, useSearchParams } from "next/navigation";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import { Input } from "@/components/inputs/input";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import { Col, Row } from "antd";
import { PlanCardProps } from "@/components/plans-card/PlanCardProps";

export default function SinglePackage() {
  const [openAddPackage, setOpenAddPackage] = useState(false);
  const { singlePackageSlug } = useParams();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const packagesJson = searchParams.get("packages");
  const packages = packagesJson ? JSON.parse(packagesJson) : [];

  const planBenefit = [
    "Consultation call",
    "60 min. session",
    "1 - 2 outfit",
    "max 4 people",
    "10 images professional edited and delivered in an online gallery",
    "$20 per additional image",
    "$50 per additional person",
    "$125 per additional hour",
  ];
  return (
    <AdminPageLayout
    showFilters= {false}
      headerProps={{
        dashTitle: "Services and Packages",
        showDescript: false,
        buttonTitle: "Add a package",
        buttonOnClick: () => setOpenAddPackage(true),
      }}
    >
      <div className="p-4 text-black">
        <div className="flex flex-col gap-5">
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">{singlePackageSlug}</h3>
            <p className="text-base font-normal text-[#333333]">
              prototyping, and UI design, consistently delivering innovative
              solutions that drive tangible results for stakeholders and users.
              Currently, I lead a dynamic 3-person design team{" "}
            </p>
          </div>

          <div>
            <Row gutter={[32, 32]}>
              {packages.map((pkg: any, idx: number) => (
                <Col key={idx} xs={24} md={12} lg={8}>
                  <PlanCardProps
                    variant="admin"
                    planType={pkg.name}
                    planAmount={pkg.price}
                    planBenefits={planBenefit}
                    // planActiveness={status === "true"}
                  />
                </Col>
              ))}
            </Row>
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
          <form>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Package name
                </label>
                <Input variant="admin" placeholder="Wedding" />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="price"
                  className="text-grayish-500 font-semibold"
                >
                  Price
                </label>
                <Input variant="admin" placeholder="Wedding" />
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
                    className="bg-transparent placeholder:text-sm  focus:outline-0  w-full"
                    rows={3}
                  ></textarea>
                </div>
              </div>

              {/*  */}
            </div>
            <div className="mt-5">
              <AdminSubmitButton text="Create a package" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
}
