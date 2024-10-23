import { auth } from "@/auth";
import { db } from "./db";
import { Collections, FormData, Product} from "./definations";

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

// remove later
export const getVerificationTokenByToken = async (
  token: string
) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {token}
    });
    return verificationToken;
  } catch (error) {
    return null
  }
}

// remove later
export const getVerificationTokenByEmail = async (
  email: string
) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {email}
    });
    return verificationToken;
  } catch (error) {
    return null
  }
}


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

  return session?.user;
}

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
}

export async function getProductDetails(title: string){
  const originalTitle = title.replace(/-/g, ' ');

  try {
    const product = await db.product.findFirst({
      where: {
        title: {
            equals: originalTitle,
            mode: 'insensitive', // Make the search case-insensitive
        },
      },
  
      include: {
        review: true,
      }
    })
  
    if(!product){
      throw new Error('Product not found')
    }
  
    return product;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Product details.');
  }
  
}

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

export async function getCollections() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await db.product.findMany({
    select: {
      id: true,
      collection: true,
      images: true, 
    },
  });

  return products
  
}

export async function getUniqueCollections(){
  const products = await getCollections()
  const uniqueCollections = products.reduce<Collections[]>((acc, product) => { 
    if (!acc.some(item => item.collection === product.collection)) {
      acc.push(product);
    }
    return acc;
  }, [] as Collections[]);

  return uniqueCollections;
}

export async function getProductByCollection(titles: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const products = await db.product.findMany({
    where: {
      collection: titles, // Filter by collection
    },
    select: {
      id: true,
      title: true,
      images: true,
    },
    take: 4,
  });
  return products;
}

export async function FetchSimilarProducts(collection: string | undefined): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
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
    console.error("Error fetching orders:", error);
      throw new Error("Failed to fetch orders");
  }
}

export async function getOrderDetails(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
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

export async function getOrderByType(ordersType: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const orders = await db.order.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        status: ordersType,
      },
      include:{
        user: {
          select: {
            name: true,
          }
        },
        paymentInfo: true,
      },
      take: 7, 
    });

    return orders;

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

      if(!events){
        throw new Error("no event");
      }

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