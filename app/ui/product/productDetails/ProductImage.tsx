"use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { ProductDetailsImageSkeleton, ProductDetailsMiniImageSkeleton } from '../../skeletons'

// const ProductImage = ({productImages}:{productImages:string[]}) => {
//     const [showImg, setShowImg] = useState<string>(productImages[0])
//     const [active, setActive] = useState<Number>(0)

//   return (
//     <div>
//         <div className=''>
//         <Image
//             src={showImg}
//             alt={showImg}
//             width={0}
//             height={0}
//             sizes='100vw'
//             style={{width: '100%', height: 'auto', objectFit:'cover'}}
//         />
//         </div>

//         <div className='flex justify-start gap-4 my-4'>
//             {
//                 productImages?.map((item, i)=>(
//                     <div onClick={()=>{setShowImg(item); setActive(i)}} className={active === i ? "border-2 border-[#333333] cursor-pointer" : "cursor-pointer"} key={i}>
//                         <Image
//                             src={item}
//                             alt={item}
//                             width={0}
//                             height={0}
//                             sizes='100vw'
//                             style={{width: '70px', height: '100px', objectFit:'cover'}}
//                         />
//                     </div>
//                 )) 
//             }
//         </div>
//     </div>
//   )
// }

// export default ProductImage



       
       
import { useEffect, useState } from 'react';

const ProductImage = ({productImages}:{productImages:string[]}) => {
 
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (index: number) => {
        setCurrentIndex(index);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="w-full relative flex flex-col">
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {productImages.map((image, index) => (
                        <img 
                            key={index}
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            className="w-full cursor-default" 
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mt-4">
                {productImages.map((image, index) => (
                    <img 
                        key={index}
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        className={`w-24 h-24 cursor-pointer hover:scale-110 transition-transform duration-200 ${currentIndex === index ? 'border-2 border-[#333]' : ''}`} 
                        onClick={() => changeImage(index)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImage;