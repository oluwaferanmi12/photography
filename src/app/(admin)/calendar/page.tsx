"use client";

import { useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { Input } from "@/components/inputs/input";
import "react-datepicker/dist/react-datepicker.css";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import CalendarSchedule from "@/components/admin-components/sideNav/calendar-view/page";



export default function CalendarInterface() {
  const [openCalendarDetails, setOpenCalendarDetails] = useState(false);
 
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
        <CalendarSchedule />
      </div>

      {/* BOOKING DETAILS DRAWER */}
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
