import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// Define a type for the request body for better type safety
interface OrderRequestBody {
  items: any[]; // Replace 'any' with the specific type for your items
  subTotal: number;
  shippingCharge: number;
  totalAmount: number;
  discountPrice: number;
  address: {
    email: string;
    name: string;
    completeAddress: string;
    nearbyLandmark: string;
    city: string;
    state: string;
    pinCode: number;
    phone: number;
  };
  userId?: number; 
  saveAddress?: boolean; 
}

export async function POST(request: Request) {
  try {
    const body: OrderRequestBody = await request.json();
    const {
      items,
      subTotal,
      shippingCharge,
      totalAmount,
      discountPrice,
      address,
      userId,
      saveAddress, 
    } = body;
    console.log(address);
    
    let isId = userId && userId;

    if (saveAddress) {
      const user = await saveAddressForUser(address, userId);
        if(user){
            isId = user.id;            
        }
    }else{
      const existingUser = await db.user.findUnique({ where: { email: address.email } });

      if (!existingUser) {
       const user = await db.user.create({
          data: {
            name: address.name,
            email: address.email,
            address: {
              create: {
                completeAddress: address.completeAddress,
                nearbyLandmark: address.nearbyLandmark,
                city: address.city,
                state: address.state,
                pinCode: Number(address.pinCode),
                phone: Number(address.phone),
              },
            },
          },
        });
        isId = user.id;
      }
    }
    
    const order = await db.order.create({
      data: {
        subTotal,
        shippingCharge,
        totalAmount,
        discountPrice,
        items: {
          create: items,
        },
        userId: isId , // Set userId if available
      },
    });

    await db.statusHistory.create({
      data: {
          orderId: Number(order.id),
          status: order.status,
          changedAt: new Date(), 
      },
    });
    
    return NextResponse.json("order", { status: 201 }); 
  } catch (error) {
    console.error("Error creating the order:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    ); // 500 Internal Server Error
  }
}

// Function to save the address for a user
async function saveAddressForUser(address: {
  email: string;
  name: string;
  completeAddress: string;
  nearbyLandmark: string;
  city: string;
  state: string;
  pinCode: number;
  phone: number;
}, userId?: number) {
  if (userId) {
    await db.user.update({
      where: { id: userId },
      data: {
        address: {
          upsert: { 
            create: {
              completeAddress: address.completeAddress,
              nearbyLandmark: address.nearbyLandmark,
              city: address.city,
              state: address.state,
              pinCode: Number(address.pinCode),
              phone: Number(address.phone),
            },
            update: {
              completeAddress: address.completeAddress,
              nearbyLandmark: address.nearbyLandmark,
              city: address.city,
              state: address.state,
              pinCode: Number(address.pinCode),
              phone: Number(address.phone),
            },
          },
        },
      },
    });
  } else {
    const existingUser = await db.user.findUnique({ where: { email: address.email } });

    if (!existingUser) {
     const user = await db.user.create({
        data: {
          name: address.name,
          email: address.email,
          address: {
            create: {
              completeAddress: address.completeAddress,
              nearbyLandmark: address.nearbyLandmark,
              city: address.city,
              state: address.state,
              pinCode: Number(address.pinCode),
              phone: Number(address.phone),
            },
          },
        },
      });
      return user;
    } else {
      await db.user.update({
        where: { id: existingUser.id },
        data: {
          address: {
            upsert: {
              create: {
                completeAddress: address.completeAddress,
                nearbyLandmark: address.nearbyLandmark,
                city: address.city,
                state: address.state,
                pinCode: Number(address.pinCode),
                phone: Number(address.phone),
              },
              update: {
                completeAddress: address.completeAddress,
                nearbyLandmark: address.nearbyLandmark,
                city: address.city,
                state: address.state,
                pinCode: Number(address.pinCode),
                phone: Number(address.phone),
              },
            },
          },
        },
      });
    }
  }
}



export async function GET(request: Request) {
  try {
    const url = new URL(request.url); 
    const status = url.searchParams.get('status') || 'Order Confirmed';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '6');

    const where: any = {};

    if (status) {
      where.status = status; 
    }

    const orders = await db.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: Object.keys(where).length ? where : undefined,
      include:{
        user: {
          select: {
            name: true,
          }
        },
        paymentInfo: true,
      },
      skip: (page - 1) * limit,
      take: limit, 
    });
    
    const totalOrders = await db.order.count();    

    return NextResponse.json({ orders, totalOrders });
  } catch (error) {
    console.error('Error fetching orders:', error); 
    return NextResponse.json({ message: 'Error fetching orders', error: error }, { status: 500 }); 
  }
}