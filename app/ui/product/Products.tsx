"use client"
import { useEffect, useState, ChangeEvent, useRef } from 'react';
import FilterButton from '@/app/ui/collections/FilterButton';
import ProductCard from '@/app/ui/product/ProductCard';
import { Product } from '@/lib/definations';
import { ProductFilterSkeletons } from '@/app/ui/skeletons';
import { useDebouncedCallback } from 'use-debounce';


const Products = ({ titles }: { titles: string }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    collection: titles,
    minPrice: 0,
    maxPrice: 500,
    stock: undefined,
  });

  const [page, setPage] = useState(1);  
  const [totalProducts, setTotalProducts] = useState(0);
  const [isFetching, setIsFetching] = useState(false); 
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const limit = 8; 
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const scrollPositionRef = useRef(0); 

  const debouncedFetchProducts = useDebouncedCallback((currentPage: number) => {
    fetchProducts(currentPage);
  }, 1000); 

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));

    if (name === 'minPrice' || name === 'maxPrice') {
      debouncedFetchProducts(1); 
    }
   
    setPage(1);
    setProducts([]); 
  };

  const fetchProducts = async (currentPage: number) => {
    
    if (isFetching) return;
    setIsFetching(true);  
    setOpenFilter(false)
    scrollPositionRef.current = window.scrollY;
    
    const query = new URLSearchParams();
    if (filters.collection) query.append('collection', filters.collection);
    if (filters.minPrice) query.append('minPrice', filters.minPrice.toString());
    if (filters.maxPrice) query.append('maxPrice', filters.maxPrice.toString());
    query.append('page', currentPage.toString());
    query.append('limit', limit.toString());
    
    if (filters.stock === 'inStock') {
      query.append('stock', 'true'); 
    } else if (filters.stock === 'outOfStock') {
      query.append('stock', 'false'); 
    }

    try {
      const response = await fetch(`/api/products?${query.toString()}`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
  
      setProducts(prevProducts => [...prevProducts, ...data.products]);
      setTotalProducts(data.totalProducts);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching products');
    } finally {
      setIsFetching(false);
      if (isFirstLoad) setIsFirstLoad(false);
      window.scrollTo(0, scrollPositionRef.current);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [filters.collection, filters.stock, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && !isFetching && products.length < totalProducts) {
        setPage(prevPage => prevPage + 1);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 200);
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll); 
    };
  }, [isFetching, products.length, totalProducts]);

  function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  return (
    <div>
      <div>
        <FilterButton setOpenFilter={setOpenFilter} openFilter={openFilter} handleFilterChange={handleFilterChange} totalProducts={totalProducts} filters={filters} isFetching={isFetching}/>
      </div>

      <div className='mt-4'>
      {
        error && (
          <div className='w-full h-[60vh] flex justify-center items-center'>
            <h2 className='text-[20px] text-red-500'>{error}</h2>
          </div>
        )
      }

      {
        !isFirstLoad && !isFetching && !products.length && !error && (
          <div className='w-full h-[60vh] flex justify-center items-center'>
            <h2 className='text-[20px] text-gray-500'>Products not found! 🤷‍♂️</h2>
          </div>
        )
      }
        <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
          {!isFirstLoad && products.map((item, i) => (
            <ProductCard key={i} prod={item} />
          ))}

          {isFirstLoad && Array(8).fill(0).map((_, i) => (
            <ProductFilterSkeletons key={i} />
          ))}

          {!isFirstLoad && isFetching && Array(8).fill(0).map((_, i) => (
            <ProductFilterSkeletons key={i} />
          ))}

        </div>
      </div>

      <div ref={loadMoreRef}></div>
    </div>
  );
}

export default Products;












// "use client"
// import dynamic from 'next/dynamic';
// import { useEffect, useState, ChangeEvent, useRef } from 'react';
// const FilterButton = dynamic(()=> import('@/app/ui/collections/FilterButton'), {ssr: false})
// import ProductCard from '@/app/ui/product/ProductCard';
// import { Product } from '@/lib/definations';
// import { ProductFilterSkeletons } from '@/app/ui/skeletons';
// import { useDebouncedCallback } from 'use-debounce';


// const Products = ({ titles }: { titles: string }) => {
//   const [openFilter, setOpenFilter] = useState(false);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filters, setFilters] = useState({
//     collection: titles,
//     minPrice: 0,
//     maxPrice: 500,
//   });

//   const [page, setPage] = useState(1);  
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [isFetching, setIsFetching] = useState(false); 
//   const [isFirstLoad, setIsFirstLoad] = useState(true); 
//   const limit = 8; 
//   const loadMoreRef = useRef<HTMLDivElement | null>(null);
//   const scrollPositionRef = useRef(0); 

//   const handleFilterChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value
//     }));
//     setPage(1);  
//     setProducts([]); 
//   };

//   const fetchProducts = async (currentPage: number) => {
//     if (isFetching) return;

//     setIsFetching(true);  
//     scrollPositionRef.current = window.scrollY;
    
//     const query = new URLSearchParams();
//     if (filters.collection) query.append('collection', filters.collection);
//     if (filters.minPrice) query.append('minPrice', filters.minPrice.toString());
//     if (filters.maxPrice) query.append('maxPrice', filters.maxPrice.toString());
//     query.append('page', currentPage.toString());
//     query.append('limit', limit.toString());
    
//     const response = await fetch(`/api/products?${query.toString()}`);
//     const data = await response.json();

//     setProducts(prevProducts => [...prevProducts, ...data.products]);
//     setTotalProducts(data.totalProducts);
//     setIsFetching(false);
    
//     if (isFirstLoad) setIsFirstLoad(false); 
//     window.scrollTo(0, scrollPositionRef.current);
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [filters.collection, filters.minPrice, filters.maxPrice, page]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 500 && !isFetching && products.length < totalProducts) {
//         setPage(prevPage => prevPage + 1);
//       }
//     };

//     const debouncedHandleScroll = debounce(handleScroll, 200);
//     window.addEventListener('scroll', debouncedHandleScroll);

//     return () => {
//       window.removeEventListener('scroll', debouncedHandleScroll); 
//     };
//   }, [isFetching, products.length, totalProducts]);

//   function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
//     let timeout: ReturnType<typeof setTimeout>;
//     return function (...args: Parameters<T>) {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), wait);
//     };
//   }

//   return (
//     <div>
//       <div>
//         <FilterButton setOpenFilter={setOpenFilter} openFilter={openFilter} handleFilterChange={handleFilterChange} totalProducts={totalProducts} filters={filters}/>
//       </div>

//       <div className='mt-4'>
//         <div className='grid grid-cols-4 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
          
//           {!isFirstLoad && products.map((item, i) => (
//             <ProductCard key={i} prod={item} />
//           ))}

//           {isFirstLoad && Array(8).fill(0).map((_, i) => (
//             <ProductFilterSkeletons key={i} />
//           ))}

//           {!isFirstLoad && isFetching && Array(8).fill(0).map((_, i) => (
//             <ProductFilterSkeletons key={i} />
//           ))}

//         </div>
//       </div>

//       <div ref={loadMoreRef}></div>
//     </div>
//   );
// }

// export default Products;
