import React from 'react'

type Props = {}

const RingLoader = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-[60px] h-[60px]">
    <div className="loader w-[50px] h-[50px] border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
   </div>
  )
}

export default RingLoader