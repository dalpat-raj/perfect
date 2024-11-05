import React from 'react'
import ProductReview from '@/app/ui/product/productDetails/ProductReview';
import { Product, SessionUser } from '@/lib/definations';
import Rating from '@/app/ui/rating/Rating';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

interface ProductDetailsProps {
    user: SessionUser | undefined;
    product: Product;
  }

const ProdDetailMenu: React.FC<ProductDetailsProps> = ({user, product}) => {

  return (
    <Accordion type='single' collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger><h6 className='text-[13px] uppercase font-extrabold'>Description</h6></AccordionTrigger>
            <AccordionContent>
            <div>
                <div className='text-[14px] text-gray-500 font-semibold'>{product?.description}</div>
                <div className='py-6'>
                    <h4 className='text-[13px] uppercase font-extrabold pb-4'>Feature</h4>
                    <ul className='pl-4 text-[14px] text-gray-500 font-semibold'>
                        {
                            product?.feature?.map((item, i)=>(
                                <li className='list-disc' key={i}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger><h6 className='text-[13px]  uppercase font-extrabold text-left'>Reviews <span><Rating rating={product?.rating}/></span></h6></AccordionTrigger>
            <AccordionContent>
            <ProductReview user={user} product={product}/>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger><h6 className='text-[13px] uppercase font-extrabold'>Shipping Information</h6></AccordionTrigger>
            <AccordionContent>
                <div className='mb-4 text-[14px] text-gray-600'>
                    <p>Shipping Fee:</p>
                    <p className='my-2'>Free Shipping on prepaid orders.</p>
                    <p>₹99 COD Charges on all Cash on Delivery orders.</p>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger><h6 className='text-[13px] uppercase font-extrabold'>Cancellation</h6></AccordionTrigger>
            <AccordionContent>
            <div>
                canncle
            </div>
            </AccordionContent>
        </AccordionItem>

    </Accordion>

  )
}

export default ProdDetailMenu

