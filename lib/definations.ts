


export interface User {
    id: string; // Will be created on the database
    name: string;
    email: string; // Stored in cents
    emailVerified: Date | null,
    password: string | null;
    image: string | null;
    role: string | any;
    addressId: number | null;
    createdAt: Date,
    updatedAt: Date,
  };

  export interface AuthenticatedUser {
    id: string;
    name: string;
    email: string;
    role: string;
};


export interface Address {
  id: number;
  userId: number | null;
  completeAddress: string;
  nearbyLandmark: string;
  phone: number;
  city: string;
  state: string;
  pinCode: number | null;
};

export type CustomerWithOrderCount = {
  id: number;
  name: string | any;
  email: string;
  password: string | null;
  image: string | null;
  role: string | null;
  createdAt: Date;
  addressId: number | null;
  _count: string[] | any; // Adding the order count
};


export interface InputProps {
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];  // Standard input types
  placeholder?: string;  // Placeholder text is optional
  name?: string;  // Name attribute is optional
  id?: React.InputHTMLAttributes<HTMLInputElement>['id'];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export interface LabelProps {
  htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];  // Standard input types
  title?: string;  // Name attribute is optional
}

export interface FormData {
  title: string;
  description: string;
  modelNumber: string;
  stock: number;
  originalPrice: number;
  sellingPrice: number;
  collection: string;
  color: string;
  model: string[];
  feature: string[];
  images: File[]; 
}

export interface Product {
  id: number;
  title: string;
  description: string;
  modelNumber: string;
  stock: number;
  originalPrice: number;
  sellingPrice: number;
  collection: string;
  color: string;
  model: string[];
  feature: string[];
  images: string[];
  rating: number;
  reviewId: number | null;
  createdAt: string;
  updatedAt: string;
  review: Review[];
}

export interface Review {
  id: number;
  name: string;
  email: string;
  message: string;
  image: string | null;
  productId: number;
  rating: number;
  createdAt: Date;
}

export interface CustomFormData {
  title: string;
  description: string;
  modelNumber: string;
  stock: number;
  originalPrice: number;
  sellingPrice: number;
  collection: string;
  color: string;
  model: string[];
  feature: string[];
  images: File[]; 
}

export interface SelectModelProps {
  selectedCollection: string;  // assuming it's a string (e.g., "iphone", "samsung")
  formData: {
    model: string[];
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // typing for input change handler
  setFormData: React.Dispatch<React.SetStateAction<any>>;  // typing for state setter
}

export interface AddFeaturelProps {
  formData: {
   feature: string[],
  };
}


export interface Collections {
  id: number,
  collection: string,
  images: string[]
}


export interface CartItem {
  productId: number;
  title: string;
  price: number;
  stock: number;
  modelNumber: string;
  image: string; 
  color: string;
  rating: number,
  model: string | undefined;
  quantity: number;
}


export interface Orders {
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


export interface StatusHistory {
  id: number;
  orderId: number;
  status: string;
  changedAt: Date;
}


export interface Items {
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



export interface UserOrders {
  id: number,
  subTotal: number | null,
  shippingCharge: number | null,
  totalAmount: number,
  discountPrice: number | null,
  status: string,
  paymentInfoId: number | null,
  userId: number | any,
  createdAt: Date,
  deliverAt: Date,
  statusHistory: Array<{
    id: number,
    orderId: number,
    status: string,
    changedAt: Date,
  }> | [],
  items: Array<{
      id: number,
      orderId: number,
      productId: number,
      title: string,
      price: number,
      stock: number,
      modelNumber: string,
      image: string,
      color: string,
      rating: number,
      model: string,
      quantity: number,
    }>,
  user: {
    id: number,
    name: string | null,
    email: string,
    password: string | null,
    image: string | null,
    role: string | null,
    createdAt: Date,
    addressId: number | null,
  } | null,
}



export interface AdminOrders {
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
  user: {
    name: string,
  } | null,
}

export interface AllEventData {
  id: number,
  title: string,
  description: string,
  discount: number,
  endDate: Date,
  createdAt: Date,
  products: Array<{
    id: number,
    eventId: number,
    productId: number,
    Product: Array<{
      id: number;
      title: string;
      description: string;
      modelNumber: string;
      stock: number;
      originalPrice: number;
      sellingPrice: number;
      collection: string;
      color: string;
      model: string[];
      feature: string[];
      images: string[];
      rating: number;
      reviewId: number | null;
      createdAt: string;
      updatedAt: string;
      review: Review[];
    }>
  }>
}

export interface AllCouponData {
  id: number,
  code: string,
  discount: number,
  isActive: Date,
  expirationDate: Date,
  createdAt: Date,
  updatedAt: Date,

}

export interface BannerData {
  id: number,
  url: string,
  images: string[],
}