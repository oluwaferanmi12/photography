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