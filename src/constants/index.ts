export const menu = [
  {
    imgurl: "src/assets/icons_assets/lemon dessert.jpg",
    name: "Lemon Cake",
    price: 23,
    description:
      "Indulge in the exquisite delight of our Lemon Cake, crafted with the perfect balance of tangy lemon essence and moist, tender crumb.",
    id: "lemon-cake-001",
  },
  {
    imgurl: "src/assets/icons_assets/greek salad.jpg",
    name: "Classic Cheeseburger",
    price: 12,
    description:
      "Savor the timeless goodness of our Classic Cheeseburger. A succulent beef patty layered with melted cheese, crisp lettuce, vine-ripened tomatoes, and our signature secret sauce.",
    id: "cheeseburger-002",
  },
  {
    imgurl: "src/assets/icons_assets/restauranfood.jpg",

    name: "Vegetarian Pasta Primavera",
    price: 18,
    description:
      "Elevate your taste experience with our Vegetarian Pasta Primavera. Penne pasta mingled with an array of sautéed garden-fresh vegetables, embraced by a lusciously creamy alfredo sauce.",
    id: "vegetarian-pasta-003",
  },
  // {
  //   name: "Mango Tango Smoothie",
  //   price: 6,
  //   description:
  //     "Bask in the tropical paradise of our Mango Tango Smoothie. A harmonious fusion of ripe mangoes and velvety yogurt, sweetened with a drizzle of golden honey.",
  //   id: "smoothie-004",
  // },
  // {
  //   name: "Grilled Salmon Fillet",
  //   price: 28,
  //   description:
  //     "Embark on a culinary journey with our Grilled Salmon Fillet. Impeccably grilled Atlantic salmon, adorned with delicate seasonings, served alongside an array of vibrant steamed vegetables.",
  //   id: "salmon-fillet-005",
  // },
  // {
  //   name: "Caprese Salad",
  //   price: 10,
  //   description:
  //     "Transport yourself to Italy with our Caprese Salad. A harmony of creamy mozzarella, sun-ripened tomatoes, fragrant basil leaves, and a drizzle of balsamic glaze.",
  //   id: "caprese-salad-006",
  // },
];

export const testimonials = [
  {
    name: "Emily Johnson",
    jobTitle: "Marketing Manager",
    message:
      "The Lemon Cake is an absolute delight! Its exquisite blend of flavors left me wanting more. A true masterpiece that I would recommend to everyone.",
  },
  {
    name: "Michael Anderson",
    jobTitle: "Software Engineer",
    message:
      "As a tech enthusiast, the Grilled Salmon Fillet surprised me. Its perfectly grilled texture and flavors satisfied my palate beyond expectations.",
  },
  {
    name: "Sophia Rodriguez",
    jobTitle: "Graphic Designer",
    message:
      "The Mango Tango Smoothie is a burst of tropical goodness. Its refreshing taste is the perfect companion to my creative brainstorming sessions.",
  },
  {
    name: "David Martinez",
    jobTitle: "Financial Analyst",
    message:
      "The Classic Cheeseburger is a classic for a reason. It’s my go-to comfort food that never disappoints after a long day crunching numbers.",
  },
  {
    name: "Olivia Parker",
    jobTitle: "Fitness Instructor",
    message:
      "The Vegetarian Pasta Primavera is a wholesome choice that aligns with my active lifestyle. Its creamy alfredo sauce and colorful veggies fuel my energy.",
  },
];


export const availableTimesData = [
  {
    date: "2023-08-10",
    times: [
      { hour: "17:00", availableTables: 3, isFull: false },
      { hour: "18:00", availableTables: 2, isFull: false },
      { hour: "20:00", availableTables: 0, isFull: true },
      { hour: "21:00", availableTables: 0, isFull: false },
      { hour: "22:00", availableTables: 0, isFull: true },
    ],
  },
  {
    date: "2023-08-11",
    times: [
      { hour: "17:00", availableTables: 3, isFull: true },
      { hour: "18:00", availableTables: 2, isFull: true },
      { hour: "20:00", availableTables: 0, isFull: true },
      { hour: "21:00", availableTables: 0, isFull: true },
      { hour: "22:00", availableTables: 0, isFull: true },
    ],
  },
  {
    date: "2023-08-12",
    times: [
      { hour: "17:00", availableTables: 3, isFull: false },
      { hour: "18:00", availableTables: 2, isFull: false },
      { hour: "20:00", availableTables: 0, isFull: true },
      { hour: "21:00", availableTables: 0, isFull: true },
      { hour: "22:00", availableTables: 0, isFull: true },
    ],
  },
];
