import Checkout from '@/app/ui/homePage/cart/checkout/Checkout'
import { auth } from '@/auth';
import React from 'react'

type Props = {}

const page = async(props: Props) => {
    const session = await auth();
    const user = session?.user;
    
  return (
    <div className='w-full px-12 pr-0 max-md:px-4 max-sm:px-2'>
        <Checkout user={user}/>
    </div>
  )
}

export default page