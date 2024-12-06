import React from 'react'
import { getEventRunning } from '@/lib/data'
import EventCarousel from '@/app/ui/homePage/event/EventCarousel'
import { caveat } from '@/app/ui/Fonts'
import CountDown from '@/app/ui/homePage/event/CountDown'

const Event = async() => {
  const event = await getEventRunning()
  
  return (
    <div className='bg-gray-200 relative'>
      {
        event?.title && (
          <div className='w-full py-2 px-12 max-md:px-4 max-sm:px-2 mt-12 mb-8 max-md:my-4'> 
          <div className='flex flex-col justify-center gap-2 items-center'>
            <div className='text-center'>
             <h2 className={`${caveat.className} text-[37px] max-sm:text-[24px] font-bold flex` }>{event?.title} 
             <span className='text-red-600 ml-2'>{event?.discount.toFixed(0)}% OFF</span></h2>
              <p className='text-[14px] text-gray-600'>{event?.description}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h4 className='text-[16px] text-red-600 font-bold'>End In</h4>
             <CountDown endDates={event?.endDate}/>
            </div>
          </div>
  
            <div>
              <EventCarousel event={event && event} />
            </div>
        </div>
        )
      }
    </div>
  )
}

export default Event