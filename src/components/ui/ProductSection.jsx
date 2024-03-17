import ProductSlider from "../utils/ProductSlider";

const ProductSection = () => {
  return (
    <div className="border-2">
      <h4 className="text-xl my-2 lg:my-5 md:text-2xl font-semibold lg:text-3xl capitalize">
        Recommended for you
      </h4>
      <div>
        {/* {products?.map((product, idx) => (
          <ProductSlider key={product?.title + idx} product={product} />
        ))} */}
        {allCategoriesProducts?.map(singleCategoryProducts => (
          <ProductSlider
            key={singleCategoryProducts.category}
            singleCategoryProducts={singleCategoryProducts}
          />
        ))}
      </div>
    </div>
  );
};

const allCategoriesProducts = [
  {
    category: "Gadget",
    products: [
      {
        title: "Wireless Bluetooth Earphones",
        "regular-price": 850,
        "discount-price": 750,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description:
          "High-quality wireless earphones with Bluetooth connectivity.",
        "available-quantity": 100,
        isSold: false,
      },
      {
        title: "Portable Power Bank",
        "regular-price": 700,
        "discount-price": null,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description: "Compact power bank with fast charging capability.",
        "available-quantity": 80,
        isSold: false,
      },
      {
        title: "Foldable Laptop Stand",
        "regular-price": 550,
        "discount-price": 500,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description:
          "Adjustable and portable laptop stand for ergonomic usage.",
        "available-quantity": 120,
        isSold: false,
      },
      {
        title: "Waterproof DSLR Camera Backpack",
        "regular-price": 1200,
        "discount-price": 1000,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description:
          "Durable and waterproof backpack specifically designed for DSLR cameras.",
        "available-quantity": 50,
        isSold: false,
      },
      {
        title: "Smartphone Gimbal Stabilizer",
        "regular-price": 1400,
        "discount-price": 1200,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description:
          "3-axis smartphone gimbal stabilizer for smooth video recording.",
        "available-quantity": 60,
        isSold: false,
      },
      {
        title: "Bluetooth Speaker",
        "regular-price": 950,
        "discount-price": null,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description:
          "Portable Bluetooth speaker with high-quality sound output.",
        "available-quantity": 90,
        isSold: false,
      },
      {
        title: "Fitness Tracker Smartwatch",
        "regular-price": 1800,
        "discount-price": null,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description:
          "Smartwatch with fitness tracking features including heart rate monitoring and step counting.",
        "available-quantity": 40,
        isSold: false,
      },
      {
        title: "Compact Digital Camera",
        "regular-price": 1350,
        "discount-price": 1200,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description:
          "High-quality digital camera with compact design and multiple shooting modes.",
        "available-quantity": 70,
        isSold: false,
      },
      {
        title: "Foldable Bluetooth Keyboard",
        "regular-price": 750,
        "discount-price": 650,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description:
          "Portable and foldable keyboard compatible with smartphones and tablets.",
        "available-quantity": 110,
        isSold: false,
      },
      {
        title: "Compact Binoculars",
        "regular-price": 900,
        "discount-price": null,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description:
          "Compact binoculars with high magnification power and lightweight design.",
        "available-quantity": 85,
        isSold: false,
      },
    ],
  },
  {
    category: "Clothing",
    products: [
      {
        title: "Men's Casual Shirt",
        regularPrice: 1200,
        discountPrice: 1000,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description: "Comfortable and stylish casual shirt for men.",
        availableQuantity: 150,
        isSold: false,
      },
      {
        title: "Women's Denim Jeans",
        regularPrice: 950,
        discountPrice: 800,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description: "Classic denim jeans designed for women.",
        availableQuantity: 120,
        isSold: false,
      },
      {
        title: "Kids' Summer Dress",
        regularPrice: 600,
        discountPrice: null,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description: "Adorable summer dress for girls.",
        availableQuantity: 200,
        isSold: false,
      },
      {
        title: "Men's Formal Suit",
        regularPrice: 2500,
        discountPrice: 2000,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description: "Elegant formal suit for men's occasions.",
        availableQuantity: 100,
        isSold: false,
      },
    ],
  },
  {
    category: "Home Appliances",
    products: [
      {
        title: "Stainless Steel Refrigerator",
        regularPrice: 22000,
        discountPrice: 20000,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description:
          "Large capacity refrigerator with energy-efficient cooling.",
        availableQuantity: 30,
        isSold: false,
      },
      {
        title: "Automatic Coffee Maker",
        regularPrice: 1800,
        discountPrice: null,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description:
          "Convenient coffee maker with programmable brewing options.",
        availableQuantity: 50,
        isSold: false,
      },
      {
        title: "Robotic Vacuum Cleaner",
        regularPrice: 3000,
        discountPrice: null,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description: "Smart vacuum cleaner that automatically cleans floors.",
        availableQuantity: 40,
        isSold: false,
      },
      {
        title: "Air Purifier",
        regularPrice: 1500,
        discountPrice: 1200,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description: "High-efficiency air purifier for clean indoor air.",
        availableQuantity: 70,
        isSold: false,
      },
    ],
  },
  {
    category: "Sports Equipment",
    products: [
      {
        title: "Treadmill",
        regularPrice: 35000,
        discountPrice: 30000,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description: "High-quality treadmill with various workout programs.",
        availableQuantity: 20,
        isSold: false,
      },
      {
        title: "Yoga Mat",
        regularPrice: 750,
        discountPrice: null,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description: "Non-slip yoga mat for comfortable and safe practice.",
        availableQuantity: 100,
        isSold: false,
      },
      {
        title: "Dumbbell Set",
        regularPrice: 1200,
        discountPrice: 1000,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description: "Adjustable dumbbell set for strength training workouts.",
        availableQuantity: 60,
        isSold: false,
      },
      {
        title: "Basketball",
        regularPrice: 600,
        discountPrice: null,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description: "Official size basketball for indoor and outdoor play.",
        availableQuantity: 120,
        isSold: false,
      },
    ],
  },
  {
    category: "Beauty and Personal Care",
    products: [
      {
        title: "Anti-Aging Face Cream",
        regularPrice: 1500,
        discountPrice: 1200,
        images: ["https://i.ibb.co/XLZ5yjt/product1.jpg"],
        description: "Moisturizing face cream with anti-aging properties.",
        availableQuantity: 80,
        isSold: false,
      },
      {
        title: "Hair Straightener",
        regularPrice: 900,
        discountPrice: 750,
        images: ["https://i.ibb.co/WpVvPD1/product2.jpg"],
        description: "Ceramic hair straightener for sleek and shiny hair.",
        availableQuantity: 60,
        isSold: false,
      },
      {
        title: "Men's Grooming Kit",
        regularPrice: 1200,
        discountPrice: null,
        images: ["https://i.ibb.co/VjMjspZ/product3.jpg"],
        description:
          "Complete grooming kit for men including trimmer, shaver, and more.",
        availableQuantity: 40,
        isSold: false,
      },
      {
        title: "Luxury Perfume",
        regularPrice: 2500,
        discountPrice: 2000,
        images: ["https://i.ibb.co/Cmv4vgc/product4.jpg"],
        description: "Exquisite fragrance for a luxurious scent experience.",
        availableQuantity: 90,
        isSold: false,
      },
    ],
  },
];

export default ProductSection;