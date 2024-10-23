import React from 'react'
import { getEventRunning } from '@/lib/data'
import EventCarousel from './EventCarousel'
import { caveat } from '../../Fonts'
import CountDown from './CountDown'


type Props = {}

const Event = async(props: Props) => {

  const event = await getEventRunning()

  const exists: number = event?.endDate?.getTime() - Date.now();


  if(exists <= 0){
    return null
  }
  

  
  return (
    <div className='bg-gray-200 relative'>
       <div className='w-full py-2 px-12 max-md:px-4 max-sm:px-2 mt-12 mb-8 max-md:my-4'> 
        <div className='flex flex-col justify-center gap-2 items-center'>
          <div className='text-center'>
           <h2 className={`${caveat.className} text-[37px] max-sm:text-[24px] font-bold flex` }>{event.title} 
           <span className='text-red-600 ml-2'>{event.discount.toFixed(0)}% OFF</span></h2>
            <p className='text-[14px] text-gray-600'>{event.description}</p>
          </div>
          <div className='flex items-center gap-2'>
            <h4 className='text-[16px] text-red-600 font-bold'>End In</h4>
           <CountDown endDates={event.endDate}/>
          </div>
        </div>

          <div>
            <EventCarousel event={event} />
          </div>
      </div>
    </div>
  )
}

export default Event