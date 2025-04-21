'use client'

import { TableColumn } from 'react-data-table-component'
import { Switch } from 'antd'
import eyeIcon from "@/assets/svgs/eyeIcon.svg";
import BaseDataTable from '@/components/data-table/data-table';
import Image from 'next/image';

interface PackageOption {
  name: string
  price: string
}

interface Service {
  serviceName: string
  packages: PackageOption[]
  status: boolean
  lastUpdated: string
}

const services: Service[] = [
  {
    serviceName: 'Weddings',
    packages: [
      { name: 'Basic', price: '$200' },
      { name: 'Classic', price: '$200' },
      { name: 'Premium', price: '$200' },
    ],
    status: true,
    lastUpdated: 'Today',
  },
  {
    serviceName: 'Birthdays',
    packages: [
      { name: 'Basic', price: '$200' },
      { name: 'Classic', price: '$200' },
      { name: 'Premium', price: '$200' },
    ],
    status: true,
    lastUpdated: 'Today',
  },
  {
    serviceName: 'Kids',
    packages: [
      { name: 'Basic', price: '$200' },
      { name: 'Classic', price: '$200' },
      { name: 'Premium', price: '$200' },
    ],
    status: false,
    lastUpdated: 'Today',
  },
]

const columns: TableColumn<Service>[] = [
  {
    name: 'Services',
    selector: row => row.serviceName,
    sortable: true,
  },
  {
    name: 'Packages',
    minWidth: '500px',
    cell: row => (
      <div className="flex  gap-2">
        {row.packages.map((pkg, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 text-xs bg-gray-100 text-gray-800 px-2 py-2 rounded-md"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400"></span>
            {pkg.name} ({pkg.price})
          </div>
        ))}
      </div>
    ),
  },
  {
    name: 'Status',
    cell: row => (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700">
          {row.status ? 'Active' : 'Inactive'}
        </span>
        <Switch defaultChecked={row.status} />
      </div>
    ),
  },
  {
    name: 'Last updated',
    selector: row => row.lastUpdated,
  },
  {
    name: '',
    cell: () => (
        <button className="flex items-center gap-2 px-4 py-3 border border-[#EFEEEE] rounded-md text-sm text-[#615F5F] hover:bg-gray-50">
        <span>
          <Image src={eyeIcon} alt="img" />
        </span>
        Details
      </button>
    ),
  },
]

export default function Services() {
  return <BaseDataTable title="Services" columns={columns} data={services} />
}
