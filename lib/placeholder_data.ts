import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { TbUsers } from "react-icons/tb";
import { MdOutlineShoppingCart, MdOutlineLocalOffer } from "react-icons/md";
import { HiOutlineDuplicate } from "react-icons/hi";
import { CiCalendar, CiImageOn } from "react-icons/ci";
import { RiCouponLine  } from "react-icons/ri";
import { IoIosStarHalf   } from "react-icons/io";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GoGift } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'


export const userProfileOption = [
  {
    title: "Profile",
    icon: TbUsers,
    url: "/user/profile"
  },
  {
    title: "Cart",
    icon: MdOutlineShoppingCart,
    url: "/cart"
  },
  {
      title: "My Orders",
      icon: GoGift,
      url: "/user/orders"
  },
  
  {
      title: "Addresss",
      icon: IoLocationOutline,
      url: "/user/address"
  },

]

export const sideNavData = [
    {
        title: "Dashboard",
        icon: IoHomeOutline,
        url: "/dashboard"
    },
    {
        title: "Products",
        icon: RxDashboard,
        url: "/dashboard/products"
    },
    {
        title: "Orders",
        icon: MdOutlineShoppingCart,
        url: "/dashboard/orders"
    },
    {
        title: "Events",
        icon: CiCalendar,
        url: "/dashboard/events"
    },
    {
      title: "Coupon",
      icon: RiCouponLine,
      url: "/dashboard/coupon"
    },
    {
      title: "Banner",
      icon: CiImageOn,
      url: "/dashboard/banner"
    },
    {
      title: "Collection",
      icon: HiOutlineDuplicate,
      url: "/dashboard/collection"
    },
    {
      title: "Reviews",
      icon: IoIosStarHalf,
      url: "/dashboard/reviews"
    },
    {
      title: "Customers",
      icon: TbUsers,
      url: "/dashboard/customers"
    },
    {
      title: "Admin",
      icon: MdOutlineAdminPanelSettings,
      url: "/dashboard/admin"
    },

]

export const productData = [
        {
            "title": "iPhone Silicone Case",
            "description": "Soft-touch silicone case for the ultimate comfort and protection.",
            "modelNumber": "IS-001",
            "stock": 120,
            "originalPrice": 29.99,
            "sellingPrice": 24.99,
            "collection": "iPhone",
            "color": "Midnight Blue",
            "model": ["iPhone 14", "iPhone 14 Pro"],
            "feature": ["Soft-touch Finish", "Shock Absorption", "Wireless Charging Compatible"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRruulXFkd2i4WqmxAgYUnJaC6D8SycEoRQMVj",
              "https://utfs.io/f/MqHs9IJPs5ZR9cxIWZvgWw9YRtsQ0Xo2ZfEra7yHk6cBuL4S",
              "https://utfs.io/f/MqHs9IJPs5ZRsT5hg5OzkM9gOBKGTYdf6DNXjCtbecu542yi",
              "https://utfs.io/f/MqHs9IJPs5ZRDT6fhWZmvVlenZ4J1t0PhRU7z5gfAcodMCrE",
              "https://utfs.io/f/MqHs9IJPs5ZROu5sFaUTt4vb9agiXKndy13LMS06wcA57sk2",
            ],
            "id": 6
          },
          {
            "title": "Samsung Galaxy Tough Case",
            "description": "Heavy-duty protection for your Samsung device, designed for rugged use.",
            "modelNumber": "SG-002",
            "stock": 90,
            "originalPrice": 34.99,
            "sellingPrice": 29.99,
            "collection": "Samsung",
            "color": "Graphite",
            "model": ["Samsung Galaxy S22", "Samsung Galaxy S22 Ultra"],
            "feature": ["Dual Layer Protection", "Drop Tested", "Easy Access Ports"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRlUduK8xs0AnWs8lQ2dgMCircKNfPyDSo7Jbk",
              "https://utfs.io/f/MqHs9IJPs5ZRSOSUm2zoiXnjMRk0eW5IrcBSxm3whzDYJd6s",
              "https://utfs.io/f/MqHs9IJPs5ZRMcQnA5JPs5ZRqXdkAHmUlzW9ox4aY7iO632F",
              
            ],
            "id": 7
          },
          {
            "title": "Oppo Slim Fit Case",
            "description": "Ultra-thin case that offers basic protection without bulk.",
            "modelNumber": "OS-003",
            "stock": 150,
            "originalPrice": 19.99,
            "sellingPrice": 15.99,
            "collection": "Oppo",
            "color": "Mint Green",
            "model": ["Oppo Reno 8", "Oppo Find X5"],
            "feature": ["Minimalist Design", "Scratch Resistant", "Easy to Grip"],
            "images": [
             "https://utfs.io/f/MqHs9IJPs5ZRVCqIWJByDUB14hNWEo60GAkQuKmzSJ7xfOXT",
              "https://utfs.io/f/MqHs9IJPs5ZR7jQLb840PHqEO3dlDY1rTwnNRf8IhsyXmSUj",
              "https://utfs.io/f/MqHs9IJPs5ZRDk4vbsUZmvVlenZ4J1t0PhRU7z5gfAcodMCr",
            ],
            "id": 8
          },
          {
            "title": "Vivo Leather Case",
            "description": "Stylish leather case with a premium feel and card slots.",
            "modelNumber": "VL-004",
            "stock": 70,
            "originalPrice": 39.99,
            "sellingPrice": 34.99,
            "collection": "Vivo",
            "color": "Black",
            "model": ["Vivo X80", "Vivo V21"],
            "feature": ["Premium Leather", "Card Holder", "Magnetic Closure"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRjK6us4fsythvU61dKic5PTAzfrXMC2HxEgFS",
              "https://utfs.io/f/MqHs9IJPs5ZRklkJLx3a4vgIiET5cMAlBqwZxoKueCGQmLzb",
            ],
            "id": 9
          },
          {
            "title": "iPhone Floral Case",
            "description": "Beautiful floral design that adds a touch of elegance to your device.",
            "modelNumber": "IF-005",
            "stock": 130,
            "originalPrice": 24.99,
            "sellingPrice": 19.99,
            "collection": "iPhone",
            "color": "Pink Floral",
            "model": ["iPhone 14", "iPhone 13"],
            "feature": ["Unique Design", "Lightweight", "Shock Absorbent"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRFw7EbvXJQNHDPxYCKuRqimAEfVcZ7aWhs9rG",
              "https://utfs.io/f/MqHs9IJPs5ZRPMQtH6lypubmLstCSqFBPawQARcvDdIG6fX0",
              "https://utfs.io/f/MqHs9IJPs5ZROQaDnTUTt4vb9agiXKndy13LMS06wcA57sk2",
              "https://utfs.io/f/MqHs9IJPs5ZRMxn9p2JPs5ZRqXdkAHmUlzW9ox4aY7iO632F"
            ],
            "id": 10
          },
          {
            "title": "Samsung Clear Case",
            "description": "Crystal clear case that showcases your Samsung phone's design.",
            "modelNumber": "SC-006",
            "stock": 110,
            "originalPrice": 19.99,
            "sellingPrice": 15.99,
            "collection": "Samsung",
            "color": "Transparent",
            "model": ["Samsung Galaxy A54", "Samsung Galaxy S23"],
            "feature": ["Clear Protection", "Flexible TPU", "Easy Installation"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRYGkIATPsqGvaUATWy1KV6bw2OZ4RXHdp9LDu",
              "https://utfs.io/f/MqHs9IJPs5ZRvIqtlnVDTNPKfkYA3CptjBMUi7Rnsc4a1uOG",
              "https://utfs.io/f/MqHs9IJPs5ZRsFR3dVOzkM9gOBKGTYdf6DNXjCtbecu542yi",
              "https://utfs.io/f/MqHs9IJPs5ZRApUy1TwyUxMQC9t24JmF0bRwnGAZu75l1Yir",
              "https://utfs.io/f/MqHs9IJPs5ZRyiMKPy5hWmPXIl9UzRSHDeMnbCYZhEpcJf62",
            ],
            "id": 11
          },
          {
            "title": "Oppo Shockproof Case",
            "description": "Designed for ultimate shock protection with a rugged design.",
            "modelNumber": "OS-006",
            "stock": 100,
            "originalPrice": 29.99,
            "sellingPrice": 24.99,
            "collection": "Oppo",
            "color": "Black",
            "model": ["Oppo Reno 9", "Oppo A78"],
            "feature": ["Shock Absorbent", "Anti-slip Texture", "Precision Cutouts"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRc680I27yvGqUdAlCn7DcHPmYSsItjRWO42ao",
              "https://utfs.io/f/MqHs9IJPs5ZRy1dkjYhWmPXIl9UzRSHDeMnbCYZhEpcJf62y",
              "https://utfs.io/f/MqHs9IJPs5ZRRBHcVY6q8fdCkKsJA2pn6TBj7uM14WciyL9m",
            ],
            "id": 12
          },
          {
            "title": "Vivo Silicone Grip Case",
            "description": "Soft silicone case with enhanced grip for better handling.",
            "modelNumber": "VG-007",
            "stock": 140,
            "originalPrice": 22.99,
            "sellingPrice": 18.99,
            "collection": "Vivo",
            "color": "Sky Blue",
            "model": ["Vivo V21e", "Vivo X60"],
            "feature": ["Non-slip Surface", "Flexible Design", "Wireless Charging Compatible"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRoNz7jlFLb3oEwkRQm62D0pGhNi9cJyqAXx8W",
              "https://utfs.io/f/MqHs9IJPs5ZRH2BuX6qHnMxYDRWiFohkLNBmS7jJb6410QvT",
              "https://utfs.io/f/MqHs9IJPs5ZRXca1jdAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
              "https://utfs.io/f/MqHs9IJPs5ZRMfcdvFJPs5ZRqXdkAHmUlzW9ox4aY7iO632F",
            ],
            "id": 13
          },
          {
            "title": "iPhone Clear Bumper Case",
            "description": "Protective bumper case that allows your phone's design to shine.",
            "modelNumber": "IC-008",
            "stock": 160,
            "originalPrice": 24.99,
            "sellingPrice": 19.99,
            "collection": "iPhone",
            "color": "Clear",
            "model": ["iPhone 13 Pro", "iPhone 14 Pro"],
            "feature": ["Durable Bumper", "Scratch Resistant", "Easy Access Ports"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZROKWjPoUTt4vb9agiXKndy13LMS06wcA57sk2",
              "https://utfs.io/f/MqHs9IJPs5ZRayvc4pEpKQ2gTWIZ9A5rlue1ECX0U4owfNcx",
              "https://utfs.io/f/MqHs9IJPs5ZRbdTAodL9DFsaSGig3oK4N2du7rPOHEUzMjJy",
            ],
            "id": 14
          },
          {
            "title": "Samsung Vintage Leather Case",
            "description": "Stylish leather case with a vintage finish and card slots.",
            "modelNumber": "SL-009",
            "stock": 75,
            "originalPrice": 39.99,
            "sellingPrice": 34.99,
            "collection": "Samsung",
            "color": "Dark Brown",
            "model": ["Samsung Galaxy Z Flip 4", "Samsung Galaxy S21"],
            "feature": ["Vintage Style", "Multiple Card Slots", "Magnetic Closure"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRs4jTa6OzkM9gOBKGTYdf6DNXjCtbecu542yi",
              "https://utfs.io/f/MqHs9IJPs5ZR5p4dl0TbFl1Q0U72IPckTmYZnjE3OeBiqRp9",
            ],
            "id": 15
          },
          {
            "title": "Oppo Carbon Fiber Case",
            "description": "Sleek carbon fiber design that offers both protection and style.",
            "modelNumber": "OC-010",
            "stock": 85,
            "originalPrice": 27.99,
            "sellingPrice": 22.99,
            "collection": "Oppo",
            "color": "Carbon Black",
            "model": ["Oppo Find N", "Oppo Reno 8 Pro"],
            "feature": ["Carbon Fiber Texture", "Lightweight", "Shock Resistant"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRRBQwzu6q8fdCkKsJA2pn6TBj7uM14WciyL9m",
              "https://utfs.io/f/MqHs9IJPs5ZRYs4fh6nPsqGvaUATWy1KV6bw2OZ4RXHdp9LD",
            ],
            "id": 16
          },
          {
            "title": "Vivo Designer Series Case",
            "description": "Fashion-forward case with artistic design, perfect for style enthusiasts.",
            "modelNumber": "VD-011",
            "stock": 120,
            "originalPrice": 26.99,
            "sellingPrice": 21.99,
            "collection": "Vivo",
            "color": "Artistic Red",
            "model": ["Vivo X70", "Vivo V21"],
            "feature": ["Unique Art Design", "Durable Material", "Easy to Install"],
            "images": [
             "https://utfs.io/f/MqHs9IJPs5ZRLuFlHgNAfxDm7MjIFPlQiK6XgnCr8UstO5uY",
             "https://utfs.io/f/MqHs9IJPs5ZROKH8pjUTt4vb9agiXKndy13LMS06wcA57sk2",
            ],
            "id": 17
          },
          {
            "title": "Redmi Ultra Slim Case",
            "description": "An ultra-thin case that maintains the phone's original look while providing basic protection.",
            "modelNumber": "RU-001",
            "stock": 150,
            "originalPrice": 18.99,
            "sellingPrice": 14.99,
            "collection": "Redmi",
            "color": "Transparent",
            "model": ["Redmi Note 11", "Redmi 10"],
            "feature": ["Ultra-thin Design", "Scratch Resistant", "Lightweight"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRsszAN2OzkM9gOBKGTYdf6DNXjCtbecu542yi",
              "https://utfs.io/f/MqHs9IJPs5ZRiuaWNpcQQLs8lUdrpM9ytGDARBfEFJxOk2ch",
              "https://utfs.io/f/MqHs9IJPs5ZR0BsCFnSYIsdbLgZpQAHPxUOT7ymlvhRBrKV3",
              "https://utfs.io/f/MqHs9IJPs5ZRPJ3VYTlypubmLstCSqFBPawQARcvDdIG6fX0",
            ],
            "id": 18
          },
          {
            "title": "Redmi Heavy Duty Case",
            "description": "Rugged case designed for heavy protection, perfect for outdoor activities.",
            "modelNumber": "RH-002",
            "stock": 80,
            "originalPrice": 29.99,
            "sellingPrice": 24.99,
            "collection": "Redmi",
            "color": "Black",
            "model": ["Redmi Note 11 Pro", "Redmi K40"],
            "feature": ["Shock Absorbent", "Drop Tested", "Non-slip Grip"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZREiyUAsMBfrn9O0dwKVa7Z6T1Aomjstp823ci",
              "https://utfs.io/f/MqHs9IJPs5ZRiuaWNpcQQLs8lUdrpM9ytGDARBfEFJxOk2ch",
              "https://utfs.io/f/MqHs9IJPs5ZR0BsCFnSYIsdbLgZpQAHPxUOT7ymlvhRBrKV3",
              "https://utfs.io/f/MqHs9IJPs5ZRPJ3VYTlypubmLstCSqFBPawQARcvDdIG6fX0",
            ],
            "id": 19
          },
          {
            "title": "Redmi Leather Wallet Case",
            "description": "Stylish leather wallet case with card slots and a magnetic closure.",
            "modelNumber": "RL-003",
            "stock": 70,
            "originalPrice": 35.99,
            "sellingPrice": 29.99,
            "collection": "Redmi",
            "color": "Brown",
            "model": ["Redmi Note 10", "Redmi 9"],
            "feature": ["Card Slots", "Magnetic Closure", "Premium Leather"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZROAS446UTt4vb9agiXKndy13LMS06wcA57sk2",
              "https://utfs.io/f/MqHs9IJPs5ZRiLJrgsQQLs8lUdrpM9ytGDARBfEFJxOk2chW",
              "https://utfs.io/f/MqHs9IJPs5ZRYBQGGRPsqGvaUATWy1KV6bw2OZ4RXHdp9LDu",
            ],
            "id": 20
          },
          {
            "title": "Redmi Clear Hard Case",
            "description": "Durable hard case that offers full protection while showcasing the phone's design.",
            "modelNumber": "RC-004",
            "stock": 100,
            "originalPrice": 21.99,
            "sellingPrice": 17.99,
            "collection": "Redmi",
            "color": "Clear",
            "model": ["Redmi Note 11", "Redmi 10"],
            "feature": ["Crystal Clear", "Impact Resistant", "Easy Installation"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRyiu6x7AhWmPXIl9UzRSHDeMnbCYZhEpcJf62",
              "https://utfs.io/f/MqHs9IJPs5ZRXc0mGKmAtYuSyZQA0IVwOBNhHdgovU4Fc3PG",
              "https://utfs.io/f/MqHs9IJPs5ZRxXjxnaoykPnS23Omp7d1zvw0uZsrVYJUtMl5",
            ],
            "id": 21
          },
          {
            "title": "Redmi Sports Grip Case",
            "description": "Designed for active users, this case offers enhanced grip and protection.",
            "modelNumber": "RSG-005",
            "stock": 120,
            "originalPrice": 24.99,
            "sellingPrice": 19.99,
            "collection": "Redmi",
            "color": "Blue",
            "model": ["Redmi K40", "Redmi Note 10 Pro"],
            "feature": ["Enhanced Grip", "Water Resistant", "Lightweight"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZROZzNCdyUTt4vb9agiXKndy13LMS06wcA57sk",
              "https://utfs.io/f/MqHs9IJPs5ZR5pCln4TbFl1Q0U72IPckTmYZnjE3OeBiqRp9",
            ],
            "id": 22
          },
          {
            "title": "iPhone MagSafe Compatible Case",
            "description": "MagSafe compatible case for easy attachment of accessories.",
            "modelNumber": "IM-006",
            "stock": 130,
            "originalPrice": 34.99,
            "sellingPrice": 29.99,
            "collection": "iPhone",
            "color": "Rose Gold",
            "model": ["iPhone 14", "iPhone 14 Pro"],
            "feature": ["MagSafe Compatible", "Scratch Resistant", "Easy Access"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRXc0mGKmAtYuSyZQA0IVwOBNhHdgovU4Fc3PG",
              "https://utfs.io/f/MqHs9IJPs5ZRxXjxnaoykPnS23Omp7d1zvw0uZsrVYJUtMl5",
            ],
            "id": 23
          },
          {
            "title": "Samsung Leather Flip Case",
            "description": "Elegant leather flip case with card slots and a magnetic closure.",
            "modelNumber": "SLF-007",
            "stock": 90,
            "originalPrice": 39.99,
            "sellingPrice": 34.99,
            "collection": "Samsung",
            "color": "Navy Blue",
            "model": ["Samsung Galaxy S22", "Samsung Galaxy A53"],
            "feature": ["Card Slots", "Magnetic Closure", "Premium Leather"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRiuaWNpcQQLs8lUdrpM9ytGDARBfEFJxOk2ch",
              "https://utfs.io/f/MqHs9IJPs5ZR0BsCFnSYIsdbLgZpQAHPxUOT7ymlvhRBrKV3",
              "https://utfs.io/f/MqHs9IJPs5ZRPJ3VYTlypubmLstCSqFBPawQARcvDdIG6fX0",
            ],
            "id": 24
          },
          {
            "title": "Oppo Glitter Case",
            "description": "Sparkling glitter case that adds a touch of glamour to your Oppo device.",
            "modelNumber": "OG-008",
            "stock": 150,
            "originalPrice": 22.99,
            "sellingPrice": 17.99,
            "collection": "Oppo",
            "color": "Gold Glitter",
            "model": ["Oppo Reno 8", "Oppo A55"],
            "feature": ["Glitter Finish", "Lightweight", "Easy Access Ports"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRPJ3VYTlypubmLstCSqFBPawQARcvDdIG6fX0",
              "https://utfs.io/f/MqHs9IJPs5ZRzWaNwOtprHNCE5DISVyuGxJT8QvfLkdROjcP",
              "https://utfs.io/f/MqHs9IJPs5ZRXIlhqYAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
              "https://utfs.io/f/MqHs9IJPs5ZR0BsCFnSYIsdbLgZpQAHPxUOT7ymlvhRBrKV3"
            ],
            "id": 25
          },
          {
            "title": "Vivo Smart Cover Case",
            "description": "Smart cover case with an automatic wake/sleep feature.",
            "modelNumber": "VSC-009",
            "stock": 110,
            "originalPrice": 27.99,
            "sellingPrice": 22.99,
            "collection": "Vivo",
            "color": "Charcoal Grey",
            "model": ["Vivo V21", "Vivo X60"],
            "feature": ["Wake/Sleep Function", "Slim Design", "Easy to Use"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZR0BsCFnSYIsdbLgZpQAHPxUOT7ymlvhRBrKV3",
              "https://utfs.io/f/MqHs9IJPs5ZRPJ3VYTlypubmLstCSqFBPawQARcvDdIG6fX0",
            ],
            "id": 26
          },
          {
            "title": "Redmi Armor Case",
            "description": "Heavy-duty armor case designed for maximum protection.",
            "modelNumber": "RA-010",
            "stock": 85,
            "originalPrice": 32.99,
            "sellingPrice": 27.99,
            "collection": "Redmi",
            "color": "Camo Green",
            "model": ["Redmi Note 10 Pro", "Redmi K40"],
            "feature": ["Dual Layer Protection", "Drop Resistant", "Non-slip Grip"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRMPrEC4TJPs5ZRqXdkAHmUlzW9ox4aY7iO632",
              "https://utfs.io/f/MqHs9IJPs5ZRzWaNwOtprHNCE5DISVyuGxJT8QvfLkdROjcP",
              "https://utfs.io/f/MqHs9IJPs5ZRXIlhqYAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
              "https://utfs.io/f/MqHs9IJPs5ZR0ffXUQ5nSYIsdbLgZpQAHPxUOT7ymlvhRBrK",
            ],
            "id": 27
          },
          {
            "title": "AirPods Pro Silicone Case",
            "description": "Soft silicone case for AirPods Pro with a carabiner for easy carrying.",
            "modelNumber": "APSC-011",
            "stock": 200,
            "originalPrice": 15.99,
            "sellingPrice": 12.99,
            "collection": "AirPods",
            "color": "Black",
            "model": ["AirPods Pro"],
            "feature": ["Shock Resistant", "Carabiner Included", "Lightweight"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRdb2qnD9zPFN7ys2wXYVxTctunUomf3vACgD1",
              "https://utfs.io/f/MqHs9IJPs5ZRgASyhJxLN6D0hK5lJxUReH4rSZQtMCyvAFiP",
              "https://utfs.io/f/MqHs9IJPs5ZRV7VbjmByDUB14hNWEo60GAkQuKmzSJ7xfOXT",
              "https://utfs.io/f/MqHs9IJPs5ZRqJnkxZaBbe5GdmkAIvRUosMhZ0yfPcxawVQ8",
            ],
            "id": 2866
          },
          {
            "title": "AirPods 3rd Gen Protective Case",
            "description": "Durable case that offers protection for AirPods 3rd generation.",
            "modelNumber": "AP3-012",
            "stock": 180,
            "originalPrice": 14.99,
            "sellingPrice": 11.99,
            "collection": "AirPods",
            "color": "Pink",
            "model": ["AirPods 3"],
            "feature": ["Scratch Resistant", "Easy Access Charging", "Compact Design"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRsDBZiYlOzkM9gOBKGTYdf6DNXjCtbecu542y",
              "https://utfs.io/f/MqHs9IJPs5ZRMPrEC4TJPs5ZRqXdkAHmUlzW9ox4aY7iO632",
            ],
            "id": 2977
          },
          {
            "title": "iPhone Tough Armor Case",
            "description": "Heavy-duty case that offers maximum protection for your iPhone.",
            "modelNumber": "ITA-013",
            "stock": 110,
            "originalPrice": 39.99,
            "sellingPrice": 34.99,
            "collection": "iPhone",
            "color": "Dark Grey",
            "model": ["iPhone 14 Pro Max", "iPhone 13 Pro Max"],
            "feature": ["Shockproof", "Drop Protection", "Enhanced Grip"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRzWaNwOtprHNCE5DISVyuGxJT8QvfLkdROjcP",
             "https://utfs.io/f/MqHs9IJPs5ZRXIlhqYAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
             "https://utfs.io/f/MqHs9IJPs5ZR0ffXUQ5nSYIsdbLgZpQAHPxUOT7ymlvhRBrK",
            ],
            "id": 30
          },
          {
            "title": "Samsung Clear Slim Case",
            "description": "Sleek and transparent case that showcases your phone's design.",
            "modelNumber": "SCS-014",
            "stock": 150,
            "originalPrice": 19.99,
            "sellingPrice": 15.99,
            "collection": "Samsung",
            "color": "Clear",
            "model": ["Samsung Galaxy S21", "Samsung Galaxy S22"],
            "feature": ["Crystal Clear", "Lightweight", "Flexible TPU"],
            "images": [
             "https://utfs.io/f/MqHs9IJPs5ZR0ffXUQ5nSYIsdbLgZpQAHPxUOT7ymlvhRBrK",
             "https://utfs.io/f/MqHs9IJPs5ZRXIlhqYAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
             "https://utfs.io/f/MqHs9IJPs5ZR0ffXUQ5nSYIsdbLgZpQAHPxUOT7ymlvhRBrK",
             "https://utfs.io/f/MqHs9IJPs5ZR0ffXUQ5nSYIsdbLgZpQAHPxUOT7ymlvhRBrK",
            ],
            "id": 31
          },
          {
            "title": "Oppo Leather Bumper Case",
            "description": "Stylish leather bumper case that provides excellent protection.",
            "modelNumber": "OLB-015",
            "stock": 80,
            "originalPrice": 29.99,
            "sellingPrice": 24.99,
            "collection": "Oppo",
            "color": "Beige",
            "model": ["Oppo Find X3", "Oppo A74"],
            "feature": ["Bumper Protection", "Premium Leather", "Sleek Design"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRywdU6HhWmPXIl9UzRSHDeMnbCYZhEpcJf62y",
              "https://utfs.io/f/MqHs9IJPs5ZRXIlhqYAtYuSyZQA0IVwOBNhHdgovU4Fc3PGk",
            ],
            "id": 32
          },
          {
            "title": "Vivo TPU Shockproof Case",
            "description": "Flexible TPU case designed for shock absorption and comfort.",
            "modelNumber": "VTSC-016",
            "stock": 120,
            "originalPrice": 24.99,
            "sellingPrice": 19.99,
            "collection": "Vivo",
            "color": "Black",
            "model": ["Vivo Y20", "Vivo V23"],
            "feature": ["Shockproof", "Lightweight", "Anti-yellowing"],
            "images": [
             "https://utfs.io/f/MqHs9IJPs5ZRPOUP1m0lypubmLstCSqFBPawQARcvDdIG6fX",
             "https://utfs.io/f/MqHs9IJPs5ZRxIpZ1XoykPnS23Omp7d1zvw0uZsrVYJUtMl5",
             "https://utfs.io/f/MqHs9IJPs5ZRfwYXD5R1Y20NgmF9yIXClZhWUEGOd5zkfwxv",
            ],
            "id": 33
          },
          {
            "title": "Redmi Vintage Case",
            "description": "Classic vintage-style case with a textured finish.",
            "modelNumber": "RVC-017",
            "stock": 95,
            "originalPrice": 27.99,
            "sellingPrice": 22.99,
            "collection": "Redmi",
            "color": "Tan",
            "model": ["Redmi Note 11", "Redmi 9A"],
            "feature": ["Textured Finish", "Sleek Design", "Easy Access Buttons"],
            "images": [
             "https://utfs.io/f/MqHs9IJPs5ZRJIaRBPY7x1UBzRWLM5YqjbIsVkleoZyPAipf",
             "https://utfs.io/f/MqHs9IJPs5ZRdV8NG0V9zPFN7ys2wXYVxTctunUomf3vACgD",
            ],
            "id": 34
          },
          {
            "title": "AirPods Pro Rugged Case",
            "description": "Durable rugged case with enhanced protection for AirPods Pro.",
            "modelNumber": "APR-018",
            "stock": 200,
            "originalPrice": 16.99,
            "sellingPrice": 13.99,
            "collection": "AirPods",
            "color": "Olive Green",
            "model": ["AirPods Pro"],
            "feature": ["Rugged Protection", "Carabiner Included", "Shock Absorbent"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZR7kG1jU0PHqEO3dlDY1rTwnNRf8IhsyXmSUjG",
              "https://utfs.io/f/MqHs9IJPs5ZRHWVSxyqHnMxYDRWiFohkLNBmS7jJb6410QvT",
              "https://utfs.io/f/MqHs9IJPs5ZRfIJDbKR1Y20NgmF9yIXClZhWUEGOd5zkfwxv",
              "https://utfs.io/f/MqHs9IJPs5ZRM80ST9JPs5ZRqXdkAHmUlzW9ox4aY7iO632F",
            ],
            "id": 35888
          },
          {
            "title": "AirPods 2nd Gen Silicone Case",
            "description": "Soft silicone case that provides a snug fit for your AirPods 2.",
            "modelNumber": "APSC2-019",
            "stock": 180,
            "originalPrice": 14.99,
            "sellingPrice": 11.99,
            "collection": "AirPods",
            "color": "Coral",
            "model": ["AirPods 2"],
            "feature": ["Soft Silicone", "Lightweight", "Easy to Carry"],
            "images": [
              "https://utfs.io/f/MqHs9IJPs5ZRAxkorRwyUxMQC9t24JmF0bRwnGAZu75l1Yir",
              "https://utfs.io/f/MqHs9IJPs5ZRkWb04L3a4vgIiET5cMAlBqwZxoKueCGQmLzb",
              "https://utfs.io/f/MqHs9IJPs5ZRZ39mSZjrirzH86MtlQeEm3fVcsqAjxW5PYKC",
              "https://utfs.io/f/MqHs9IJPs5ZRMUSK9FJPs5ZRqXdkAHmUlzW9ox4aY7iO632F",
              "https://utfs.io/f/MqHs9IJPs5ZRtvvfbYTd5jLSQIyiK1N0dEgnBxJ9e2auphZX",
            ],
            "id": 3677
          }
      
]

export const OrderTopNavData = [
  {
      title: "Order Confirmed",
  },
  {
      title: "pickup",
  },
  {
      title: "shipped",
  },
  {
      title: "delivered",
  },
  {
      title: "cancled",
  },
  {
      title: "refunded",
  },
]