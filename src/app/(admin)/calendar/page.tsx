"use client";

import { useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { Input } from "@/components/inputs/input";
import "react-datepicker/dist/react-datepicker.css";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import CalendarSchedule from "@/components/admin-components/sideNav/calendar-view/page";

export default function AdminCalendar() {
  const [openCalendarDetails, setOpenCalendarDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar-view");

  return (
    <AdminPageLayout
      headerProps={{
        dashTitle: "Calendar",
        dashDescription:
          "Supercharge your workflow and handle repetitive tasks the apps you use every day.",
        buttonTitle: "Calendar settings",
        buttonOnClick: () => setOpenCalendarDetails(true),
      }}
    >
      <div className="p-4">
        {/* SECOND SECTION */}
        <div>
          <div className="flex w-full justify-between border-b border-[#F3F0EB]">
            <div
              onClick={() => setActiveTab("calendar-view")}
              className={`${
                activeTab === "calendar-view"
                  ? "text-base lg:text-lg font-semibold border-b-2 border-purple-secondary-600 cursor-pointer text-purple-secondary-600"
                  : "text-gray-500 text-sm lg:text-base border-[#F3F0EB] "
              } w-full flex justify-center items-center`}
            >
              <p className="py-3 cursor-pointer">Calendar View</p>
            </div>
            <div
              onClick={() => setActiveTab("weekly-view")}
              className={`${
                activeTab === "weekly-view"
                  ? "text-base lg:text-lg font-semibold border-b-2 border-purple-secondary-600 cursor-pointer text-purple-secondary-600"
                  : "text-gray-500 text-sm lg:text-base border-[#F3F0EB]"
              } w-full flex justify-center items-center `}
            >
              <p className="py-3  cursor-pointer">Weekly View</p>
            </div>
            <div
              onClick={() => setActiveTab("setup")}
              className={`${
                activeTab === "setup"
                  ? "text-base lg:text-lg font-semibold border-b-2 border-purple-secondary-600 cursor-pointer text-purple-secondary-600"
                  : "text-gray-500 text-sm lg:text-base border-[#F3F0EB]"
              } w-full flex justify-center items-center `}
            >
              <p className="py-3  cursor-pointer">Setup</p>
            </div>
          </div>
          {/* TABS OUTPUT */}
          <div className="mt-5">
            {activeTab === "calendar-view" ? (
              <div>
                <CalendarSchedule />
              </div>
            ) : (
              <div>
                <h3 className="text-5xl text-amber-600">Client Selections</h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CALENDER DETAILS DRAWER */}
      <ResponsiveDrawer
        title="Create a booking link"
        open={openCalendarDetails}
        onClose={() => setOpenCalendarDetails(false)}
      >
        <div className="pb-14">
          <form>
            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-grayish-500 font-semibold"
                >
                  Full Name
                </label>
                <Input variant="admin" placeholder="First name and Last name" />
              </div>
              {/*  */}
            </div>

            <div className="mt-5">
              <AdminSubmitButton text="Create availability" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
}
