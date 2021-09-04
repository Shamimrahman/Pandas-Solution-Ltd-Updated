const data = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/users/5094323/screenshots/11184058/media/21d762e9bf83e02db2e7c2fab41320e1.gif",
    name: "Enterprise Resource Planning",
    category: "software",
    price: " $1774 / 1,50,000৳ -",
    description:
      " ERP is a organizational software use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance. ",
    plink: "/erp",
  },
  {
    id: 2,
    image:
      "https://a.fsdn.com/con/app/proj/litmos-lms.s/screenshots/LitmosLMS-HomePage.PNG/max/max/1",
    name: "Learning Management System",
    category: "software",
    price: "$1656 / 1,40,000৳ -",
    description:
      " LMS  is a software application for the administration, documentation, tracking, reporting, automation and delivery of educational courses, training programs, or learning and development programs. ",
    plink: "/lms",
  },

  {
    id: 3,
    image:
      "https://i.pinimg.com/originals/ee/9f/fc/ee9ffc328170b10a2e7aa2ff8384e211.gif",
    name: "Employee Monitoring Software",
    category: "software",
    price: " $1656 / 1,40,000৳ -",
    description:
      "In this Covid Situation track productive hours of your employees via their computer activity. Employee work monitoring for remote teams.",
    plink: "/ems",
  },

  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/da/f5/56/daf556ceaa38aea896130652b8c032a7.gif",
    name: "Pos Software with Barcode Machine",
    category: "software",
    price: " $472 / 40,000৳-",
    description:
      " The best POS systems combine payment processing, inventory and customer ... With Basic, you get POS software, payment processing, and a free terminal.",
    plink: "/pos",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/originals/e6/0f/13/e60f13a40abbc03b8a6a06518e68088d.gif",
    name: "Fashion Ecommerce Site",
    category: "ecommerce",
    price: "  $358 / 30,000৳ - ",
    description:
      "More flexibility, faster go to market. See what Fashion-Ecommerce can do for you. ",
    plink: "/fashion",
  },

  {
    id: 6,
    image: "ecommerce/restaurant.jpg",
    name: "Online Food Ordering System",
    category: "ecommerce",
    price: " $358 / 30,000৳ -  ",
    description:
      "Use our online ordering system for restaurants to start taking free unlimited online orders from your website. ",
    plink: "/restaurant",
  },
  {
    id: 7,
    image: "ecommerce/grocery.png",
    name: "Groceries Item Ecommerce Site ",
    category: "ecommerce",
    price: "$416.66 / 35,000৳ - ",
    description:
      " A well build online Grocery Management And Delivery Software for Supermarket And Hypermarket Business. ",
    plink: "/grocery",
  },

  {
    id: 8,
    image: "../ecommerce/furniture.jpg",
    name: "Furniture Ecommerce Website",
    category: "ecommerce",
    price: " $358 / 30,000৳ -",
    description:
      " As you go through the necessary steps to launch your furniture or interior design store online, Pandas gives you an incredible selection of furniture website. ",
    plink: "/furniture",
  },
  {
    id: 9,
    image: "./ecommerce/gadgets.jpg",
    name: "Gadgets Ecommerce Website",
    category: "ecommerce",
    price: "$358 / 30,000৳ -",
    description:
      "A lot goes into the development of a solid eCommerce platform so take the shortcut and go with Pandas electronics store website.  ",
    plink: "/gadget",
  },
  {
    id: 10,
    image: "../ecommerce/plant.png",
    name: "Plants Ecommerce Website",
    category: "ecommerce",
    price: " $0 / 0৳",
    description:
      "A plant buying website that gives you the feeling as clean and fresh as plants are!!! Its free product from Pandas. ",
    plink: "/plant",
  },

  {
    id: 11,
    image: "../web/rw.png",
    name: "Restaurant Website",
    category: "website",
    price: " $298 / 25,000৳ -",
    description:
      "Pandas have developed responsive website for restaurants with a clean and modern design for the perfect website. ",
    plink: "/restuweb",
  },

  {
    id: 12,
    image: "../web/hotel.jpg",
    name: "Hotel Website",
    category: "website",
    price: " $300 / 25,200৳ -",
    description:
      "A great hotel web design and seamless e-commerce experience can do a lot for the profit margin of any hotel business. ",
    plink: "/hotelweb",
  },

  {
    id: 13,
    image: "../web/school.png",
    name: "School Website",
    category: "website",
    price: " $416.66 / 35,000৳ - ",
    description:
      "Private schools depend on their websites for enrollment marketing, so pick up some pointers from the Pandas Squads. ",
    plink: "/schoolweb",
  },

  {
    id: 14,
    image: "../web/ad.jpg",
    name: "Advertisement Website",
    category: "website",
    price: "From $298 / 25,000৳ -",
    description:
      " Grow your advertisement agency with pandas. Pandas's developers have developed some amazing add agency website to grow your bussiness. ",
    plink: "/advertisementweb",
  },

  {
    id: 15,
    image:
      "https://i.pinimg.com/originals/47/77/9b/47779b1bdfab02567f773bb37897bc62.gif",
    name: "Fashion E-commerce App",
    category: "apps",
    price: "From $298 / 25,000৳ -",
    description:
      "More flexibility, faster go to market. See what Fashion-Ecommerce can do for you.  ",
    plink: "/fashionapp",
  },

  {
    id: 16,
    image:
      "https://camo.envatousercontent.com/8cff213ad4c1342e2fe2259a47f6d13f28a9d3b4/68747470733a2f2f692e696d6775722e636f6d2f6f6d70526568372e676966",
    name: "Food Ordering App",
    category: "apps",
    price: "From $400 / 30,000৳ -",
    description:
      "Use our online food ordering system app for restaurants to start taking free unlimited online orders from your app. ",
    plink: "/foodapp",
  },

  {
    id: 17,
    image:
      "https://assets.materialup.com/uploads/07c8371e-2d90-4359-b84d-3bcb5845f1d1/preview.gif",
    name: "Grocery App",
    category: "apps",
    price: "From $298 / 25,000৳ -",
    description:
      " A well build online Grocery Management And Delivery app for Supermarket And Hypermarket Business. ",
    plink: "/groceryapp",
  },
];

export default data;
