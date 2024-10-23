import { db } from "@/lib/db";
import { productData } from "@/lib/placeholder_data";

async function seedProducts() {
  try {
    const insertedProducts = await db.product.createMany({
      data: productData,
    });
    return insertedProducts;
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error; // Rethrow to handle it in the GET function
  }
}

export async function GET() {
  try {
    await seedProducts();
    return new Response(JSON.stringify({ message: 'Database seeded successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error seeding database' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
