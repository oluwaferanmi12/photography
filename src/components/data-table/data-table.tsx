'use client';

import DataTable, { TableColumn } from 'react-data-table-component'

interface BaseDataTableProps<T> {
  title?: string
  columns: TableColumn<T>[]
  data: T[]
}

export default function BaseDataTable<T>({ title, columns, data }: BaseDataTableProps<T>) {
  return (
    <div className="p-4">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
        customStyles={{
          headCells: {
            style: {
              backgroundColor: '#f9fafb',
              fontSize: '14px',
              color: '#6b7280',
              fontWeight: '500',
            },
          },
          cells: {
            style: {
              paddingTop: '1rem',
              paddingBottom: '1rem',
            },
          },
        }}
      />
    </div>
  )
}
