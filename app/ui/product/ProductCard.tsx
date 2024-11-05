import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/definations';
import Rating from '../rating/Rating';
import { formatTitle } from '@/lib/helpers';

interface ProductCardProps {
    prod: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ prod }) => {
    const imageUrl1 = prod?.images[0];
    const imageUrl2 = prod?.images[1];

    const discountPercentage = prod.originalPrice && prod.sellingPrice
        ? (((prod.originalPrice - prod.sellingPrice) / prod.originalPrice) * 100).toFixed(0)
        : '0';

    return (
        <Link href={`/products/${formatTitle(prod.title)}`} className='relative'>
            <div className='image__hover__main cursor-pointer'>
                <div className='col__1 transition duration-200 ease-in delay-100 h-[40vh] max-sm:h-[30vh]'>
                    <Image
                        src={imageUrl1 || '/e2.jpg'} 
                        alt={prod.title || 'Product image'} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className='col__2 max-md:hidden transition duration-200 ease-in-out delay-100 h-48'>
                    <Image
                        src={imageUrl2 || '/e2.jpg'} // Use a placeholder
                        alt={prod.title || 'Product image'}
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className='absolute top-0 right-0 uppercase bg-[#1b1b1b] px-2 py-1'>
                <p className='text-white text-[13px] font-semibold tracking-tightest z-50'>
                    Save {discountPercentage}%
                </p>
            </div>

            <div className='py-2 text-[15px]'>
                <p>{prod.title}</p>
            </div>
            {prod.rating >= 1 && (
                <div className='flex items-center gap-2 pl-2'>
                    <Rating rating={prod?.rating} />
                    <p className='text-[14px]'>({prod?.review?.length || 0})</p>
                </div>
            )}
            <div className='py-2 flex gap-4'>
                <p className='text-[13px]'>Rs. {prod.sellingPrice.toFixed(2)}</p>
                <p className='text-[13px] line-through'>Rs. {prod.originalPrice.toFixed(2)}</p>
            </div>
        </Link>
    );
};

export default ProductCard;
