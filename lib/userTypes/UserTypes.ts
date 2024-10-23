export type User = {
    id: number; // Will be created on the database
    fullName: string;
    email: string; // Stored in cents
    password: string | null;
    image: string | null;
    authProviderId: string | null;
    role: string;
    addressId: number | null;
    createdAt: Date;
  };

  export type AuthenticatedUser = {
    id: number;
    fullName: string;
    email: string;
    role: string;
};


export type Address = {
  id: number;
  userId: number | null;
  completeAddress: string;
  nearbyLandmark: string;
  phone: number;
  city: string;
  state: string;
  pinCode: number | null;
};


export type Orders = {
    id: number, 
    subTotal: number | null,
    shippingCharge: number | null,
    totalAmount: number,
    discountPrice: number | null,
    status: string, 
    paymentInfoId: number | null,
    userId: number,
    createdAt: Date,
    deliverAt: Date,
  }
  
  
  export type StatusHistory = {
    id: number;
    orderId: number;
    status: string;
    changedAt: Date;
  }
  
  
  export type Items = {
    id: number;
    orderId: number;
    productId: number;
    title: string;
    price: number;
    stock: number;
    modelNumber: string;
    image: string;
    rating: number;
    color: string;
    model: string;
    quantity: number;
  }

  export type TuserOrder = {
    
  }