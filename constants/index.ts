import { Inventory } from "@/types";

export const navLinks = [
  { title: "home", href: "/" },
  { title: "explore", href: "/explore" },
  { title: "my orders", href: "/my-order" },
  { title: "account", href: "/account" },
  { title: "contact", href: "#" },
];

export const categories = [
  { name: "jollof delights", img: "/images/category-1.png" },
  { name: "sweet treats", img: "/images/category-2.png" },
  { name: "swallow & soups", img: "/images/category-3.png" },
  { name: "jollof specials", img: "/images/category-4.png" },
  { name: "culture deluxe", img: "/images/category-5.png" },
  { name: "jollof delights", img: "/images/category-6.png" },
];

export const inventory: Inventory[] = [
  {
    name: "Spicy Tilapia Pepper Soup",
    price: "3,700",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    img: "/images/chef-1.png",
  },
  {
    name: "Jollof Rice & Fried Chicken",
    price: "2,400",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    img: "/images/chef-2.png",
  },
  {
    name: "Egusi Soup & Pounded Yam",
    price: "4,850",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    img: "/images/category-1.png",
  },
  {
    name: "Pounded Yam & Edikaikong",
    price: "9,130",
    description:
      "Traditional pounded yam with rich, leafy Edikaikong soup and Spicy and savory peppered dish, perfect as a starter.",
    img: "/images/chef-4.png",
  },
  {
    name: "Amala, Gbegiri & Ewedu",
    price: "8,600",
    description:
      "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup with assorted meats,with hot smoky swallow.",
    img: "/images/amala.png",
  },
  {
    name: "Peppered Snail",
    price: "6,300",
    description:
      "Spicy and savory peppered snail, perfect as a starter with Richsavory soup with assorted meats, paired with sauce",
    img: "/images/snails.png",
  },
];

export const menuCategories: string[] = [
  "popular",
  "jollof rice & entrees",
  "swallow & soups",
  "grills & sides",
  "beverages",
  "deserts",
];
