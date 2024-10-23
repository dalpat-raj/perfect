'use client'
import React, { useEffect, useState } from 'react'
import CheckoutItems from './checkoutItems.tsx/CheckoutItems'
import CheckoutForm from './checkoutForm/CheckoutForm'
import { useAppSelector } from '@/lib/store/hooks'
import { CartItem, User } from '@/lib/definations'
import axios from 'axios'

type Props = {}

const Checkout = ({user}: {user: User | any}) => {

  const cart: CartItem[] = useAppSelector((state) => state.cart.items);

  const [subTotal, setSubTotal] = useState<number>(0)
  const [shippingCharge, setShippingCharge] = useState<number>(0)
  const [discountPrice, setDiscountPrice] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [coupon, setCoupon] = useState<string>('')
  const [paymentInfo, setPaymentInfo] = useState({
    type: 'cash',
    status: 'pending',
  })
  const [saveAddress, setSaveAddress] = useState<boolean>(false)
  const [couponApplyed, setCouponApplyed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState({
    email: '',
    country: '',
    name: '',
    lastName: '',
    completeAddress: '',
    nearbyLandmark: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
  });
  
    const paymentInfoHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
      const {name, value} = e.target;
      if (value === 'cash') {
        setShippingCharge(99);
        setPaymentInfo((prev) => ({
          ...prev,
          type: value,
        }));
      } else {
        setShippingCharge(0);
        setPaymentInfo((prev) => ({
          ...prev,
          type: value,
        }));
      }
    }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkCoupon=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.get(`/api/coupon/checkCoupon/${coupon}`)
      if(response.data.discount){
        const discountAmount = (subTotal * response.data.discount) / 100;
        setDiscountPrice(discountAmount)
        setCouponApplyed(true)
      }
      
    } catch (error: any) {
      console.error('Error applying coupon:', error);
      setCouponApplyed(false)
      alert(error.message);
    } finally {
      setCoupon('');
      setLoading(false);
    }
  }

  const orderHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const orderData = {
        items: cart.map(item => ({
          productId: item.productId,
          title: item.title,
          price: item.price,
          stock: item.stock,
          modelNumber: item.modelNumber,
          image: item.image,
          color: item.color,
          rating: item.rating,
          model: item.model,
          quantity: item.quantity,
        })),
        paymentInfo: paymentInfo,
        subTotal: subTotal,
        shippingCharge: shippingCharge,
        totalAmount: totalPrice || subTotal,
        discountPrice: discountPrice,
        address: address,
        saveAddress: saveAddress,
        userId: Number(user?.id) || null,
      };

    const response = await axios.post("/api/createOrder",orderData)
    
    if(response){
        alert("order confirm")
    }
  };

  useEffect(()=>{
    setSubTotal(cart?.length !== 0
      ? cart?.reduce((acc, item) => acc + item.quantity * item.price, 0)
      : cart?.reduce((acc, item) => acc + item.quantity * item.price, 0))

      setTotalPrice(subTotal ? subTotal + shippingCharge - discountPrice : 0)
  },[subTotal, shippingCharge, discountPrice])

  return (
    <div className='grid grid-cols-2 grid-rows-subgrid max-lg:grid-rows-none h-[80vh] max-lg:h-full max-lg:grid-cols-1'>
        <div className='col-span-1 border-r max-lg:border-0 border-gray-200 p-10 max-sm:px-0 overflow-scroll no-scrollbar'>
            <CheckoutForm address={address} handleInputChange={handleInputChange} orderHandler={orderHandler} paymentInfoHandler={paymentInfoHandler} saveAddress={saveAddress} setSaveAddress={setSaveAddress}/>
        </div>
        <div className='col-span-1 bg-[#FAFAFA] p-10 max-sm:px-0'>
            <CheckoutItems setCoupon={setCoupon} checkCoupon={checkCoupon} shippingCharge={shippingCharge} discountPrice={discountPrice} subTotal={subTotal} totalPrice={totalPrice} loading={loading} couponApplyed={couponApplyed}/>
        </div>
    </div>
  )
}

export default Checkout