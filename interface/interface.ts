import { DaysType } from "@/app/(admin)/calendar/page";

export interface TimeScheduleInterface {
  start: number;
  end: number;
}

export interface DatesTimeInterface {
  day: DaysType;
  timeSchedule: TimeScheduleInterface[];
}

export interface Scheduletype {
  day: DaysType;
  timeSchedule: TimeScheduleInterface[];
}

export interface BookingCalendar {
  title: string;
  description: string;
  availability: number;
  dateAvailability: number;
  dates: string;
  dailyLimits: number;
  timezone: string;
  autoConfirm: boolean;
  dateCreated: string;
  dateModified: string;
  deleted: false;
  dateAndTime: DatesTimeInterface[];
  id: string;
}

export interface GetBookingInterface {
  address: string;
  amount: number;
  description: string;
  email: number;
  end: number;
  id: string;
  meetingUrl: string | null;
  name: string;
  package: string;
  packageId: string;
  paid: boolean;
  paymentReference: string;
  phone: string;
  service: string;
  slotId: string;
  slotTitle: string;
  start: string;
  status: number;
  timezone: string;
}

export interface MainBookingInterface {
  date: string;
  bookings: GetBookingInterface[];
}

export interface BookedSlotInterface {
  date: string;
  bookings: SlotBookingInterface[];
}

export interface SlotBookingInterface {
  start: string;
  end: string;
}
export interface PackageInterface {
  active: boolean;
  description: string;
  details: string;
  id: string;
  lastModified: string;
  price: number;
  serviceId: string;
  title: string;
  thumbnail: string;
}

export interface GalleryItem {
  galleryId: string;
  selected: boolean;
  imageUrl: string;
  finalImage: boolean;
  id: string;
}
