"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ImageSkeleton } from '@/app/ui/skeletons';

const ProductImage = ({ productImages }: { productImages: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    let interval: NodeJS.Timeout | null = null;

    const changeImage = (index: number) => {
        setCurrentIndex(index);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    };

    const startInterval = () => {
        if (!isHovered) {
            interval = setInterval(nextImage, 3000);
        }
    };

    const stopInterval = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    };

    useEffect(() => {
        startInterval();

        return () => {
            stopInterval(); // Clean up on component unmount
        };
    }, [isHovered]); // Restart interval if hovered state changes

    return (
        <div 
            className="w-full relative flex flex-col"
            onMouseEnter={() => {
                setIsHovered(true);
                stopInterval(); // Stop the interval when hovered
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                startInterval(); // Restart the interval when not hovered
            }}
        >
            <div className="overflow-hidden">
                <div 
                    className="flex transition-transform duration-500" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {productImages.map((image, index) => (
                        <Image 
                            key={index}
                            src={image} 
                            alt={`Image ${index + 1}`} 
                            width={500}
                            height={300}
                            sizes='100vw'
                            className="w-full cursor-default" 
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-2 mt-4 overflow-x-scroll no-scrollbar">
                {productImages.map((image, index) => (
                    <div className='w-[80px] h-[90px]' key={index}>
                        {imageLoading && <ImageSkeleton/>}
                        <Image 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`} 
                        width={0}
                        height={0}
                        sizes='100vw'
                        style={{width: "100%", height: "100%", objectFit: 'cover'}}
                        className={`cursor-pointer ${currentIndex === index ? 'border-2 border-[#333]' : ''}`} 
                        onClick={() => changeImage(index)} 
                        onLoad={()=>setImageLoading(false)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImage;




// "use client"      
// import { useEffect, useState } from 'react';

// const ProductImage = ({productImages}:{productImages:string[]}) => {    
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const changeImage = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             nextImage();
//         }, 3000); 

//         return () => clearInterval(interval); 
//     }, []);

//     return (
//         <div className="w-full relative flex flex-col">
//             <div className="overflow-hidden">
//                 <div 
//                     className="flex transition-transform duration-500" 
//                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 >
//                     {productImages.map((image, index) => (
//                         <img 
//                             key={index}
//                             src={image} 
//                             alt={`Image ${index + 1}`} 
//                             className="w-full cursor-default" 
//                         />
//                     ))}
//                 </div>
//             </div>
//             <div className="flex gap-2 mt-4 overflow-x-scroll no-scrollbar">
//                 {productImages.map((image, index) => (
//                     <img 
//                         key={index}
//                         src={image} 
//                         alt={`Thumbnail ${index + 1}`} 
//                         className={`w-24 h-24 cursor-pointer ${currentIndex === index ? 'border-2 border-[#333]' : ''}`} 
//                         onClick={() => changeImage(index)} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProductImage;