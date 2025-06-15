"use client";

import { useEffect, useState } from "react";
import { ResponsiveDrawer } from "@/components/admin-components/sideNav/responsive-drawer/responsive-drawer";
import AdminPageLayout from "@/adminLayouts/admin-page-layout";
import { Input } from "@/components/inputs/input";
import "react-datepicker/dist/react-datepicker.css";
import { AdminSubmitButton } from "@/components/admin-components/sideNav/SubmitButtons/Button";
import CalendarSchedule from "@/components/admin-components/sideNav/calendar-view/calendarView";
import { WeeklyCalendar } from "@/components/admin-components/sideNav/weekly-view/weekly-view";
import { TimeSchedule } from "@/components/admin-components/time-schedule/time-schedule";
import moment from "moment-timezone";
import { apiCall } from "@/axios/axios";
import { toast } from "sonner";
import Image from "next/image";
import { BookingCalendar } from "../../../../interface/interface";
import DataTable, { TableColumn } from "react-data-table-component";
import eyeIcon from "@/assets/svgs/eyeIcon.svg";

const sampleEvents = [
  {
    id: 1,
    title: "Wedding",
    tag: "Premium",
    startDatetime: "2025-06-05T10:44:00",
    endDatetime: "2025-06-05T12:00:00",
  },
];

type DaysType = "Saturday" | "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
export interface Scheduletype {
  timeSchedule: { from: number; end: number };
  day: DaysType;
  included?: boolean;
}


export type UpdateType = "start" | "end" | "checked";

export default function AdminCalendar() {
  const [openCalendarDetails, setOpenCalendarDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar-view");
  const days: DaysType[] = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [scheduleDate, setScheduleDate] = useState<Scheduletype[]>([
    { timeSchedule: { from: 0, end: 0 }, day: "Saturday" },
  ]);
  const [editScheduleDate, setEditScheduleDate] = useState<Scheduletype[]>([
    { timeSchedule: { from: 0, end: 0 }, day: "Saturday" },
  ]);
  const [availability, setAvailability] = useState(60);
  const [calendarLoading, setCalendarLoading] = useState(true);
  const [bookingCalendars, setBookingCalendars] = useState<BookingCalendar[]>(
    []
  );
  const [title, setTitle] = useState("");
  const [showEditCalendar, setShowEditCalendar] = useState(false);
  const [selectedBookingCalendar, setSelectedBookingCalendar] =
    useState<BookingCalendar>();
  const handleViewDetails = () => {};

  const getBookingCalender = async () => {
    try {
      setCalendarLoading(true);
      const result = await apiCall("get", "/Bookings/Calendar");
      setBookingCalendars(result.data);
    } catch (e) {
    } finally {
      setCalendarLoading(false);
    }
  };

  const resolveNextDay = (day: DaysType) => {
    const foundIndex = days.indexOf(day);
    if (days.length === foundIndex + 1) {
      return days[0];
    }
    return days[foundIndex + 1];
  };

  const handleUpdateObject = (
    index: number,
    type: UpdateType,
    value: number | boolean,
    editType?: boolean
  ) => {
    const splittedArray = editType ? [...editScheduleDate] : [...scheduleDate];
    if (type === "checked") {
      splittedArray[index].included = value as boolean;
    } else if (type === "end") {
      splittedArray[index].timeSchedule.end = value as number;
    } else if (type === "start") {
      splittedArray[index].timeSchedule.from = value as number;
    }

    setScheduleDate([...splittedArray]);
  };
  const handleAddNextObject = (indexClicked: number, editType?: boolean) => {
    // Check the schedule date to resolve the next value, get the last date and then do the needful
    const lastObject = scheduleDate[indexClicked];
    if(editType){
      setEditScheduleDate((prev) => [
        ...prev,
        {
          day: resolveNextDay(lastObject.day),
          timeSchedule: { from: 0, end: 0 },
          included: true,
        },
      ]);
    }else{
      setScheduleDate((prev) => [
        ...prev,
        {
          day: resolveNextDay(lastObject.day),
          timeSchedule: { from: 0, end: 0 },
          included: true,
        },
      ]);
    }
       
       
  };

  const handleRemove = (index: number, editType?: boolean) => {
    const splittedArray = editType ? [...editScheduleDate] : [...scheduleDate];
    splittedArray.splice(index, 1);
    setScheduleDate(splittedArray);
  };

  const handleEditBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...selectedBookingCalendar,
      dates: editScheduleDate
        .filter((item) => item.included)
        .map((item) => ({
          day: item.day,
          timeSchedule: [
            { start: item.timeSchedule.from, end: item.timeSchedule.end },
          ],
        })),
    };
    // Now w etry to update the slot
    try {
      const result = await apiCall(
        "post",
        `/Bookings/UpdateSlot/${selectedBookingCalendar?.id}`,
        payload
      );
      getBookingCalender();
      toast.success("Slot updated");
    } catch (e) {}
  };

  const handleCreateCalendar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      title: title,
      description: " ",
      availability: availability,
      dateAvailability: 2,
      dailyLimits: 24,
      timezone: moment.tz.guess(),
      autoConfirm: false,
      dates: scheduleDate
        .filter((item) => item.included)
        .map((item) => ({
          day: item.day,
          timeSchedule: [
            { start: item.timeSchedule.from, end: item.timeSchedule.end },
          ],
        })),
    };
    try {
      const result = await apiCall("post", "Bookings/Calendar", payload);
      toast.success("Success");
      getBookingCalender();
    } catch (e) {}
  };

  useEffect(() => {
    getBookingCalender();
  }, []);

  const columns: TableColumn<BookingCalendar>[] = [
    {
      name: "Title",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div>
            <div className="font-medium text-[#292D32]">{row.title}</div>
          </div>
        </div>
      ),
      sortable: true,
      grow: 2,
    },
    {
      name: "Slot Type",
      cell: (row) => (
        <div className="text-[#292D32]">
          {Math.ceil(row.availability / 60)} hr
        </div>
      ),
    },
    {
      name: "Timezone",
      cell: (row) => (
        <div>
          <div className="flex items-center gap-1 text-xs mt-1">
            <div className="bg-white font-medium border border-[#D0D5DD] px-2 py-0.5 rounded-md text-[#344054] flex gap-1 items-center">
              {row.timezone}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Daily Limits",
      cell: (row) => <div className="text-[#292D32]">{row.dailyLimits} hr</div>,
    },
    {
      name: "Auto Confirm",
      cell: (row) => (
        <div className="inline-flex gap-1 items-center border border-[#B2DDFF] px-2 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] text-xs font-medium">
          {row.autoConfirm ? "Active" : "Inactive"}
        </div>
      ),
    },

    {
      name: "",
      cell: (row) => (
        <button
          className="flex cursor-pointer items-center gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50"
          onClick={() => {
            setShowEditCalendar(true);
            // re organixe the data
            const spreadData = [...row.dateAndTime];
            const editedData = spreadData.map((item) => ({
              day: item.day,
              timeSchedule: {
                from: item.timeSchedule[0].start,
                end: item.timeSchedule[0].end,
              },
              included: true,
            }));
            setEditScheduleDate(editedData as unknown as Scheduletype[]);
            setSelectedBookingCalendar(row);
          }}
        >
          Edit
        </button>
      ),
      right: true,
    },
  ];


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
      {/* <div className="p-4">
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
          <div className="mt-5">
            {activeTab === "calendar-view" ? (
              <div>
                <CalendarSchedule />
              </div>
            ) : activeTab === "weekly-view" ? (
              <div>
                <WeeklyCalendar />
              </div>
            ) : (
              <div>
                <h3 className="text-5xl text-amber-600">Client Selections</h3>
              </div>
            )}
          </div>
        </div>
      </div> */}

      <div className="p-4">
        <DataTable
          columns={columns}
          data={bookingCalendars}
          pagination
          highlightOnHover
          responsive
          customStyles={{
            headCells: {
              style: {
                backgroundColor: "#F6F6F6",
                fontSize: "14px",
                color: "#667085",
                fontWeight: "400",
              },
            },
            cells: {
              style: {
                paddingTop: "1rem",
                paddingBottom: "1rem",
              },
            },
          }}
        />
      </div>

      {/* CALENDER DETAILS DRAWER */}
      <ResponsiveDrawer
        title="Create a booking link"
        open={openCalendarDetails}
        onClose={() => {
          setTitle("");
          setOpenCalendarDetails(false);
        }}
      >
        <div className="pb-14">
          <form onSubmit={handleCreateCalendar}>
            <div className="flex flex-col">
              <p className="text-[#344054] text-base mb-1 font-grotesk-medium">
                Title
              </p>
              <div>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="bg-[#F6F3EF] px-4 py-3 text-[#667085] rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#344054] text-base mb-1 font-grotesk-medium">
                Timer count
              </p>
              <div>
                <select
                  value={availability}
                  onChange={(e) => {
                    setAvailability(+e.target.value);
                  }}
                  className="bg-[#F6F3EF] px-4 py-3 text-[#667085] rounded-lg w-full"
                >
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hour</option>
                  <option value={180}>3 hour</option>
                  <option value={240}>4 hour</option>
                  <option value={300}>5 hour</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[#344054]  text-base mb-1 font-grotesk-medium">
                Date Availability
              </p>
              <div className="bg-[#ECECEB] p-4 rounded-lg">
                <div className="bg-[#FFFFFF] p-4 rounded-lg">
                  {scheduleDate.map((item, index, root) => {
                    return (
                      <TimeSchedule
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdateObject}
                        key={index}
                        objectLength={root.length}
                        schedule={item}
                        handleAddNextObject={handleAddNextObject}
                        index={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <AdminSubmitButton text="Create availability" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
      {/* Edit Booking calendar  */}
      <ResponsiveDrawer
        title="Edit booking link"
        open={showEditCalendar}
        onClose={() => {
          setShowEditCalendar(false);
        }}
      >
        <div className="pb-14">
          <form onSubmit={handleEditBooking}>
            <div className="flex flex-col">
              <p className="text-[#344054] text-base mb-1 font-grotesk-medium">
                Title
              </p>
              <div>
                <input
                  value={selectedBookingCalendar?.title}
                  onChange={(e) => {
                    if (selectedBookingCalendar) {
                      setSelectedBookingCalendar({
                        ...selectedBookingCalendar,
                        title: e.target.value,
                      });
                    }
                    setTitle(e.target.value);
                  }}
                  className="bg-[#F6F3EF] px-4 py-3 text-[#667085] rounded-lg w-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[#344054] text-base mb-1 font-grotesk-medium">
                Timer count
              </p>
              <div>
                <select
                  value={selectedBookingCalendar?.availability}
                  onChange={(e) => {
                    if (selectedBookingCalendar) {
                      setSelectedBookingCalendar({
                        ...selectedBookingCalendar,
                        availability: +e.target.value,
                      });
                    }
                  }}
                  className="bg-[#F6F3EF] px-4 py-3 text-[#667085] rounded-lg w-full"
                >
                  <option value={60}>1 hour</option>
                  <option value={120}>2 hour</option>
                  <option value={180}>3 hour</option>
                  <option value={240}>4 hour</option>
                  <option value={300}>5 hour</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[#344054]  text-base mb-1 font-grotesk-medium">
                Date Availability
              </p>
              <div className="bg-[#ECECEB] p-4 rounded-lg">
                <div className="bg-[#FFFFFF] p-4 rounded-lg">
                  {editScheduleDate.map((item, index, root) => {
                    return (
                      <TimeSchedule
                        handleRemove={handleRemove}
                        handleUpdate={handleUpdateObject}
                        key={index}
                        objectLength={root.length}
                        schedule={item}
                        handleAddNextObject={handleAddNextObject}
                        index={index}
                        updateType
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <AdminSubmitButton text="Update" />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </AdminPageLayout>
  );
}
