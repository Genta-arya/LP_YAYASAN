import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const TextTitle = "2xl:text-xl lg:text-base md:text-base text-lg"


export const Color = { 
  texthijau : "text-[#02917d]",
  bghijau : "bg-[#02917d]",
  borderhijau : "border-[#02917d]",
}