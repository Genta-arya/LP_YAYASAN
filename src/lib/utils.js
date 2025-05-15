import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { toast } from "sonner"
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const TextTitle = "2xl:text-xl lg:text-base md:text-base text-lg"


export const Color = { 
  texthijau : "text-[#02917d]",
  bghijau : "bg-[#02917d]",
  borderhijau : "border-[#02917d]",
}

export const formatDateWithDay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    weekday: "long", // Hari
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};



export default function showErrorToast(message = "Terjadi kesalahan pada server saat memuat informasi.") {
  toast.error(message)
}
export const formatRibuan = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(num % 1_000_000 >= 100_000 ? 1 : 0).replace('.', ',') + 'jt';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 >= 100 ? 1 : 0).replace('.', ',') + 'rb';
  }
  return num.toString();
};
