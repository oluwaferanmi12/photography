import React from 'react';

export const Checkbox = ({checkboxName}: {checkboxName: string}) => {
  return (
    <>
        <label className="flex items-center gap-2">
            <input type="checkbox" className='rounded-xl w-6 h-6 cursor-pointer bg-[#F5F5F5]' />
            <span className='text-lg font-normal'>{checkboxName}</span>
        </label>
        
    </>
  )
}
