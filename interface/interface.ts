export interface TimeScheduleInterface {
    start: number;
    end: number;
}

export interface DatesTimeInterface {
    day: string,
    timeSchedule: TimeScheduleInterface[]
}

export interface BookingCalendar {
    title: string,
    description: string,
    availability: number,
    dateAvailability: number,
    dates: string,
    dailyLimits: number,
    timezone: string,
    autoConfirm: boolean,
    dateCreated: string,
    dateModified: string,
    deleted: false,
    dateAndTime: DatesTimeInterface[],
    id: string
}

export interface GetBookingInterface {
    address: string
    amount: number
    description: string
    email: number
    end: number
    id: string
    meetingUrl: string | null
    name: string
    package: string
    packageId: string
    paid: boolean
    paymentReference: string
    phone: string
    service: string
    slotId: string
    slotTitle: string
    start: string
    status: number
    timezone: string
}

export interface MainBookingInterface {
    date: string;
    bookings: GetBookingInterface[]
}