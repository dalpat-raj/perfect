import { getMyOrders } from '@/lib/data';
import OrderCard from '@/app/ui/homePage/profile/orders/OrderCard';
import { auth } from '@/auth';



const Orders = async() => {
    const session = await auth()
    const orders = await getMyOrders(session?.user?.id as string);
    
  return (
    <div className='h-full'>
        <div className='py-2 shadow-lg mb-4'>
            <div className='grid grid-cols-4 max-sm:grid-cols-3 px-4'>
                <div className='col-span-1 text-[14px] font-semibold'>Product</div>
                <div className='col-span-1 text-[14px] font-semibold max-sm:hidden'>Price</div>
                <div className='col-span-1 text-[14px] font-semibold'>Date</div>
                <div className='col-span-1 text-[14px] font-semibold'>Status</div>
            </div>
        </div> 
        <div className='px-2'>
        {
            orders.map((item,i)=>(
                <div key={i}>
                    <OrderCard order={item}/>         
                </div>
            ))
            }
        </div>
    
    </div>
  )
}

export default Orders