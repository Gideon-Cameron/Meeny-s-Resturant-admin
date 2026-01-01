// src/data/menu.ts

export type MenuItemType = "box" | "main" | "side" | "drink";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: MenuItemType;
  image?: string;
  includes?: string[];
}

/* =======================
   SIGNATURE BOXES
======================= */

export const boxes: MenuItem[] = [
  {
    id: "box-hot-honey",
    name: "Hot Honey Blasian Box",
    price: 15,
    type: "box",
    image: "/assets/box1.jpg",
    includes: [
      "Hot Honey Garlic Chicken Wings",
      "Chicken Biriyani",
      "Jamaican Macaroni Pie",
      "Seasoned Corn on the Cob",
      "Coleslaw",
      "Tropical Sun Drink",
    ],
  },
  {
    id: "box-blasian",
    name: "Blasian Box",
    price: 15,
    type: "box",
    image: "/assets/box2.jpg",
    includes: [
      "Curry Chicken",
      "Chicken Biriyani",
      "Beef Spring Rolls",
      "Jamaican Macaroni Pie",
      "Fried Plantain",
      "Coleslaw",
      "Guinness Punch",
    ],
  },
  {
    id: "box-tandoori",
    name: "Tandoori Blasian Box",
    price: 15,
    type: "box",
    image: "/assets/box3.jpg",
    includes: [
      "Tandoori Chicken Wings",
      "Lamb Biriyani",
      "Jamaican Style Macaroni Cheese",
      "Seasoned Corn on the Cob",
      "Coleslaw",
    ],
  },
];

/* =======================
   MAINS
======================= */

export const mains: MenuItem[] = [
  {
    id: "main-hot-honey-wings",
    name: "Hot Honey Chicken Wings",
    price: 10,
    type: "main",
  },
  {
    id: "main-tandoori-wings",
    name: "Tandoori Chicken Wings",
    price: 10,
    type: "main",
  },
  {
    id: "main-curry-chicken",
    name: "Curry Chicken",
    price: 7,
    type: "main",
  },
];

/* =======================
   SIDES
======================= */

export const sides: MenuItem[] = [
  { id: "side-white-rice", name: "White Rice", price: 3, type: "side" },
  { id: "side-biriyani", name: "Chicken Biriyani", price: 6, type: "side" },
  { id: "side-ackee", name: "Ackee & Saltfish", price: 7, type: "side" },
  { id: "side-mac-pie", name: "Macaroni Pie", price: 5, type: "side" },
  { id: "side-plantain", name: "Fried Plantain", price: 2, type: "side" },
  { id: "side-coleslaw", name: "Coleslaw", price: 2, type: "side" },
  { id: "side-corn", name: "Corn on the Cob", price: 3, type: "side" },
  { id: "side-dumplings", name: "Fried Dumplings", price: 3, type: "side" },
  { id: "side-spring-rolls", name: "Vegetable Spring Rolls", price: 3, type: "side" },
];

/* =======================
   DRINKS
======================= */

export const drinks: MenuItem[] = [
  { id: "drink-soft", name: "Soft Drinks", price: 2, type: "drink" },
  { id: "drink-water", name: "Water", price: 1, type: "drink" },
];
