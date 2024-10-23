import React from 'react'

type Props = {}

const DownloadInvoice = (props: Props) => {
  return (
    <div className='flex justify-center items-center bg-[#333] h-full cursor-pointer'>
        <button className='text-[16px] text-gray-100 py-1 font-semibold'>Download Invoice</button>
    </div>
  )
}

export default DownloadInvoice