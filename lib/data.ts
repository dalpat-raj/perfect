import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Collections, FormData, Product} from "./definations";
import { subMonths, format } from 'date-fns';

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({where: {email}});
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findUnique({where: {id}});
    return user;
  } catch (error) {
    return null;
  }
};


export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordToken = await db.passwordResetToken.findUnique({
      where: {token}
    })
    return passwordToken
  } catch (error) {
    return null
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordToken = await db.passwordResetToken.findFirst({
      where: {email}
    })
    return passwordToken
  } catch (error) {
    return null
  }
}

export const currentUser = async () => {
  const session = await auth();

  return session?.user || null;
}

export const getCurrentUser = async () => {
  const session = await auth();
  const email = session?.user.email
  const user = await db.user.findFirst({
      where: {
        email: email
      },
      include: {
        address: true,
      }
    })

  return user;
}
export const getCurrentUserReviews = async () => {
  const session = await auth();
  const email = session?.user.email
  const user = await db.user.findFirst({
      where: {
        email: email
      },
      include: {
        reviews: true,
      }
    })

  return user;
}

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
}

export async function getProducts () {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const products = await db.product.findMany({
    include: {
      review: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  return products
}

export async function getProductDetails(title: string){
  const originalTitle = title.replace(/-/g, ' ');

  try {
    const product = await db.product.findFirst({
      where: {
        title: {
          equals: originalTitle,
          mode: 'insensitive',
        },
      },
      include: {
        review: {
          orderBy: [
            {
              createdAt: 'desc',
            },
          ],
          take: 10,
        },
      },
    });

    if (!product) {
      return { error: 'Product not found' };
    }

    // Sort reviews manually after fetching them
    product.review.sort((a, b) => {
      const aHasImages = a.images.length > 0 ? 1 : 0;
      const bHasImages = b.images.length > 0 ? 1 : 0;

      // Sort by presence of images first, then by createdAt
      return bHasImages - aHasImages || new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return product;
  } catch (error) {
    return({error: 'Failed to fetch Product details.'});
  }
  
}

export async function editProducts({id,formData}: {id: number, formData: FormData}){
  try {
    const updatedProduct = db.product.update({
      where: { id: Number(id) },
      data: {
        title: formData.title,
        description: formData.description,
        modelNumber: formData.modelNumber,
        stock: formData.stock,
        originalPrice: formData.originalPrice,
        sellingPrice: formData.sellingPrice,
        collection: formData.collection,
        model: formData.model,
        color: formData.color,
        feature: formData.feature,
        images: formData.images.map(item=>item.name),
      },
    });

    const data = await Promise.all([
      updatedProduct,
    ]);
    
    return data
    
  } catch (error) {
    console.error('Error updating product:', error);
  } 
}


// // please delete this function in production
// export async function getUniqueCollections(){
//   const products = await getCollections()
//   const uniqueCollections = products.reduce<Collections[]>((acc, product) => { 
//     if (!acc.some(item => item.collection === product.collection)) {
//       acc.push(product);
//     }
//     return acc;
//   }, [] as Collections[]);

//   return uniqueCollections;
// }

export async function getCollections(){
  try {
    const collections = await db.collection.findMany()
    if(!collections) throw new Error("Something went wrong plasea retry")
    return collections
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw new Error("Failed to fetch collections");
  }
}

export async function getProductByCollection(titles: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await db.product.findMany({
    where: {
      collection: titles, // Filter by collection
    },
    include:{
      review: true,
    },
    take: 10,
  });
  return products;
}

export async function FetchSimilarProducts(collection: string | undefined): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const where: any = {};
  
  try {
    if (collection) {
      where.collection = collection; 
    }
    
    const products: Product[] | any = await db.product.findMany({
      where: Object.keys(where).length ? where : undefined,
      include: {review: true},
      take: 10,
    });
    
    return products; // Returning a Product[] array
  } catch (error) {
    console.error(error); // Log the error for debugging
    return []; // Return an empty array on error
  }
}


export async function getCustomers() {
  try {

    const customers = await db.user.findMany({
      include: {
        _count: {
          select: { orders: true }, 
        },
      },
      orderBy: {
        orders: {
          _count: "desc", 
        },
      },
      take: 32, 
    });

    return customers;

  } catch (error) {
    console.error("Error fetching customers:", error);
    throw new Error("Failed to fetch customers");
  }
}

export async function getMyOrders(id: string){
  await new Promise((resolve) => setTimeout(resolve, 100));
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {userId: id},
      include: {
        statusHistory: true,
        items: true,
        user: true,
      }
    })

    if(!orders) throw new Error("Something went wrong plasea retry")

    return orders
  } catch (error) {
    throw new Error("Failed to fetch orders");
  }
}

export async function getOrderDetails(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const order = await db.order.findUnique({
      where: {
        id: Number(id),
      }, 
      include: {
        statusHistory: true, 
        items: true,        
        user: true,
      }
    });

    const address = await db.address.findUnique({
      where: {
        id: Number(order?.user?.addressId),
      }
    })
    

    return {
      order,
      address
    }

  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
}


export async function getReviews(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const reviews = await db.review.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 6,
      })
      
      return reviews;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw new Error("Failed to fetch reviews");
    }
}


export async function getAdminCollctions(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
    const collections = await db.collection.findMany()
    
    if(!collections) throw new Error("Fiailed to fetch Collction!")
    return collections;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
}

export async function getEvents(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
      const events = await db.event.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        include:{
          products: {
            include: {
              product: true,
            }
          }
        }
      })

      if(!events){
        throw new Error("User does not exists");
      }

    return events;
  } catch (error) {
    console.error("events does not exists:", error);
    throw new Error("events does not exists");
  } 
  
}

export async function getEventRunning(){
  try {
      const events = await db.event.findFirst({
        orderBy: {
          createdAt: 'desc',
        },
        include:{
          products: {
            include: {
              product: {
                include: {
                  review: true,
                }
              },
              
            }
          }
        }
      })

    return events;
  } catch (error) {
    console.error("events does not exists:", error);
    throw new Error("events does not exists");
  } 
  
}

export async function getCoupons(){
  await new Promise((resolve) => setTimeout(resolve, 3000));
  try {
      const coupons = await db.coupon.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })

      if(!coupons){
        throw new Error("no coupon founds");
      }

    return coupons;
  } catch (error) {
    console.error("coupon does not exists:", error);
    throw new Error("coupons does not exists");
  } 
}

export async function deactivateCoupons(){
  try {
    const currentDate = new Date();

    const result = await db.coupon.updateMany({
      where: {
        expirationDate: {
          lt: currentDate, 
        },
      },
      data: {
        isActive: false, 
      },
    });



    return "coupons";
  } catch (error) {
    console.error("coupon does not exists:", error);
    throw new Error("coupons does not exists");
  } 
}


export async function getBanner(){
  try {
      const banners = await db.banner.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })

      if(!banners){
        throw new Error("no banner founds");
      }

    return banners;
  } catch (error) {
    console.error("banner does not exists:", error);
    throw new Error("banner does not exists");
  } 
  
}

export async function getBannerForHome(){
  try {
      const banners = await db.banner.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 5,
      })

      if(!banners){
        throw new Error("no banner founds");
      }

    return banners;
  } catch (error) {
    console.error("banner does not exists:", error);
    throw new Error("banner does not exists");
  } 
  
}



// dashboard 
export async function fetchCardData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const totalProductsPromiss = db.product.count()
      const totalCustomersPromiss = db.user.count()
      const totalOrdersPromiss = db.order.count()
  
      const data = await Promise.all([
        totalProductsPromiss,
        totalCustomersPromiss,
        totalOrdersPromiss,
      ]);
      
      const totalProducts = Number(data[0] ?? '0');
      const totalCustomers = Number(data[1] ?? '0');
      const totalOrders = Number(data[2] ?? '0');
      
      return {
        totalProducts,
        totalCustomers,
        totalOrders
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
}

export async function OrderCountAdmin() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    const totalConfirmPromiss = db.order.count({where: { status: 'Order Confirmed' }})
    const totalPickupPromiss = db.order.count({where: { status: 'pickup' }})
    const totalShippedPromiss = db.order.count({where: { status: 'shipped' }})
    const totalDeliverdPromiss = db.order.count({where: { status: 'delivered' }})
    const totalCnacledPromiss = db.order.count({where: { status: 'cancled' }})
    const totalRefuncPromiss = db.order.count({where: { status: 'refunded' }})


    const data = await Promise.all([
      totalConfirmPromiss,
      totalPickupPromiss,
      totalShippedPromiss,
      totalDeliverdPromiss,
      totalCnacledPromiss,
      totalRefuncPromiss,
    ]);
    

    
    const totalConfirm = Number(data[0] ?? '0');
    const totalPickup = Number(data[1] ?? '0');
    const totalShipped = Number(data[2] ?? '0');
    const totalDelivered = Number(data[3] ?? '0');
    const totalCancled = Number(data[4] ?? '0');
    const totalRefunded = Number(data[5] ?? '0');
    
    return {
      totalConfirm,
      totalPickup,
      totalShipped,
      totalDelivered,
      totalCancled,
      totalRefunded,
    };
  } catch (error) {
    return ({error: 'Failed to fetch card data.'})
  }
}

export async function getMonthlyRevenueLast12Months() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const twelveMonthsAgo = subMonths(new Date(), 12);
  const now = new Date();

  // Generate an array of months for the last 12 months
  const months = Array.from({ length: 12 }, (_, i) => {
    const month = subMonths(now, i);
    return format(month, 'yyyy-MM');
  }).reverse(); // Reverse to start from the oldest month

  const orders = await db.order.findMany({
    where: {
      status: 'delivered',
      deliverAt: {
        gte: twelveMonthsAgo,
      },
    },
  });

  // Initialize revenue data
  const revenueData = months.map(month => ({ month, totalRevenue: 0 }));

  // Calculate total revenue for each month
  orders.forEach(order => {
    const orderMonth = format(order.deliverAt, 'yyyy-MM');
    const monthData = revenueData.find(data => data.month === orderMonth);
    if (monthData) {
      monthData.totalRevenue += order.totalAmount;
    }
  });

  return revenueData;
}