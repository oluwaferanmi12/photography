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
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
        customStyles={{
          headCells: {
            style: {
              backgroundColor: '#F6F6F6',
              fontSize: '14px',
              color: '#667085',
              fontWeight: '400',
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
