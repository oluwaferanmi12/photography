'use client'

import { useState } from 'react'
import { Dropdown, Menu as AntMenu } from 'antd'
import {
  LeftOutlined,
  RightOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?...',
    startDatetime: '2025-05-11T13:00',
    endDatetime: '2025-05-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?...',
    startDatetime: '2025-05-20T09:00',
    endDatetime: '2025-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?...',
    startDatetime: '2025-05-20T17:00',
    endDatetime: '2025-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?...',
    startDatetime: '2025-06-09T13:00',
    endDatetime: '2025-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?...',
    startDatetime: '2025-05-13T14:00',
    endDatetime: '2025-05-13T14:30',
  },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export default function CalendarSchedule() {
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  const previousMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'))
  }

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const selectedDayMeetings = meetings.filter(meeting =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 p-1.5 text-gray-400 hover:text-gray-500"
              >
                <LeftOutlined className="text-lg" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 ml-2 p-1.5 text-gray-400 hover:text-gray-500"
              >
                <RightOutlined className="text-lg" />
              </button>
            </div>

            <div className="grid grid-cols-7 mt-10 text-xs text-center text-gray-500 leading-6">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some(meeting =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Schedule for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map(meeting => (
                  <Meeting key={meeting.id} meeting={meeting} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Meeting({ meeting }: { meeting: any }) {
  const startDateTime = parseISO(meeting.startDatetime)
  const endDateTime = parseISO(meeting.endDatetime)

  const menu = (
    <AntMenu
      items={[
        {
          key: 'edit',
          label: <a href="#">Edit</a>,
        },
        {
          key: 'cancel',
          label: <a href="#">Cancel</a>,
        },
      ]}
    />
  )

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl hover:bg-gray-100">
      <img src={meeting.imageUrl} alt="" className="w-10 h-10 rounded-full flex-none" />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>{format(startDateTime, 'h:mm a')}</time> -{' '}
          <time dateTime={meeting.endDatetime}>{format(endDateTime, 'h:mm a')}</time>
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100">
        <Dropdown overlay={menu} trigger={['click']}>
          <MoreOutlined className="text-gray-500 hover:text-gray-600 text-lg cursor-pointer" />
        </Dropdown>
      </div>
    </li>
  )
}
