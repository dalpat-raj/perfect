// import { db } from "@/lib/db";
// import { productData } from "@/lib/placeholder_data";



// async function main() {
//     // Insert products into the database
//     for (const product of productData) {
//       await db.product.create({
//         data: product
//       });
//     }
  
//     console.log("Seed data inserted");
//   }
  
//   main()
//     .catch((e) => {
//       console.error(e);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });