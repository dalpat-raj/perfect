'use client';

import Pagination from '@/app/(dashboard)/dashboard/pagination/Pagination';
import { Product } from '@/lib/definations';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductsCard from './ProductsCard';
import LoaderBall from '../../loader/BallLoader';


const Products = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const limit = 8;
  const [loading, setLoading] = useState<boolean>(false)
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | unknown>('');

  const fetchProducts = async (currentPage: number) => {
    if (isFetching) return;
    setIsFetching(true);

    const query = new URLSearchParams();
    query.append('page', currentPage.toString());
    query.append('limit', limit.toString());

    try {
      const response = await fetch(`/api/products?${query.toString()}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.totalProducts / limit)); 
    } catch (error) {
      setError('Failed to fetch products');
    } finally {
      setIsFetching(false);
    }
  };



  useEffect(() => {
    fetchProducts(page);
  }, [page]);




  return (
    <div className="bg-white rounded-md relative">

      <div className="py-2 shadow-lg mb-4">
        <div className="grid grid-cols-8 max-sm:grid-cols-4 px-4">
          <div className="col-span-2 max-sm:col-span-1 text-[14px] font-semibold max-sm:hidden">Image</div>
          <div className="col-span-1 text-[14px] font-semibold">Id</div>
          <div className="col-span-1 text-[14px] font-semibold">Price</div>
          <div className="col-span-1 text-[14px] font-semibold max-sm:hidden">Collection</div>
          <div className="col-span-1 text-[14px] font-semibold">Model</div>
          <div className="col-span-1 text-[14px] font-semibold ">Date</div>
          <div className="col-span-1 text-[14px] font-semibold max-sm:hidden">Action</div>
        </div>
      </div>

 
    {
      isFetching || loading ? (
        <LoaderBall/>
      ) : (
      <div className="px-2">
        {products.map((item, i) => (
          <ProductsCard product={item} key={i}/>
        ))}
      </div>
      )
    }

      
    {
      !isFetching && (
        <div className='w-full bg-white py-6'>
        <div className='absolute bottom-0 left-[50%] transform -translate-x-1/2'>
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      )
    }
    </div>
  );
}

export default Products;


