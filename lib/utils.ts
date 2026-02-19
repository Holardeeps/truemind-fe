import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// changing string/sentences to readable URL for better readability and SEO
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

// getting random items from inventory array to mock data ID
export const getRandomFoodItem = <T>(arr: T[]): T | undefined => {
  if (arr.length === 0) return undefined;

  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
