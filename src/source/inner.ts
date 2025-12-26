import type { StaticImageData } from "next/image";
import defimage from "@/public/1080х1400.png";
import def1080 from "@/public/1080x1080.png";
import def1900 from "@/public/10801900.png";
import def540 from "@/public/540x950.png";
import def540900 from "@/public/540x950222.png";
import router from "@/public/roter.jpg";

import tsr1 from "@/public/images/1.png";
import tsr2 from "@/public/images/2.png";
import tsr3 from "@/public/images/3.png";

export interface Product {
  id: number;
  categoryId: number;
  subCategory: string;
  subImage: string | StaticImageData; // yoki StaticImageData agar next/image ishlatilsa
  name: string;
  images: (string | StaticImageData)[]; // yoki StaticImageData[]
}

export const productsData: Product[] = [
  // --- 1. IDISHLAR (categoryId: 1) ---
  {
    id: 101,
    categoryId: 1,
    subCategory: "Tarelka",
    subImage: def1080,
    name: "Lofat Tarelka",
    images: [tsr1, tsr2, tsr3],
  },
  {
    id: 102,
    categoryId: 1,
    subCategory: "Piyola",
    subImage: def1080,
    name: "Oltin Piyola",
    images: [tsr2, defimage],
  },
  {
    id: 103,
    categoryId: 1,
    subCategory: "Choynak",
    subImage: def1080,
    name: "Klassik Choynak",
    images: [tsr1, def540900],
  },
  {
    id: 104,
    categoryId: 1,
    subCategory: "Lagan",
    subImage: def1080,
    name: "Katta Lagan",
    images: [router, tsr2],
  },
  {
    id: 105,
    categoryId: 1,
    subCategory: "Vilka1",
    subImage: def540,
    name: "Klassik Vilka",
    images: [def1900],
  },

  // --- 2. STULLAR (categoryId: 2) ---
  {
    id: 201,
    categoryId: 2,
    subCategory: "Banket",
    subImage: defimage,
    name: "Chiavari",
    images: [def1900],
  },
  {
    id: 202,
    categoryId: 2,
    subCategory: "Ofis",
    subImage: defimage,
    name: "Kreslo",
    images: [def1080],
  },
  {
    id: 203,
    categoryId: 2,
    subCategory: "Yog'och",
    subImage: defimage,
    name: "Klassik Stul",
    images: [defimage],
  },

  // --- 3. STOLLAR (categoryId: 3) ---
  {
    id: 301,
    categoryId: 3,
    subCategory: "Dumaloq",
    subImage: def1900,
    name: "Dumaloq stol",
    images: [defimage],
  },
  {
    id: 302,
    categoryId: 3,
    subCategory: "To'rtburchak",
    subImage: def1900,
    name: "Uzun stol",
    images: [def1900],
  },

  // --- 4. ZONTIKLAR (categoryId: 4) ---
  {
    id: 401,
    categoryId: 4,
    subCategory: "Soyabonlar",
    subImage: def1080,
    name: "Katta Zont",
    images: [def1900],
  },

  // --- 5. OFORMLENIYA (categoryId: 5) ---
  {
    id: 501,
    categoryId: 5,
    subCategory: "Gullar",
    subImage: defimage,
    name: "Gulli arka",
    images: [def1080],
  },
  {
    id: 502,
    categoryId: 5,
    subCategory: "Chiroqlar",
    subImage: defimage,
    name: "Neon bezak",
    images: [def1900],
  },

  // --- 6. TEXNIKLAR (categoryId: 6) ---
  {
    id: 601,
    categoryId: 6,
    subCategory: "Sovutish",
    subImage: def1080,
    name: "Ventilyator",
    images: [defimage],
  },
  {
    id: 602,
    categoryId: 6,
    subCategory: "Ovoz",
    subImage: def1080,
    name: "Kalontka",
    images: [def1080],
  },

  // --- 7. KOMBO SET (categoryId: 7) ---
  {
    id: 701,
    categoryId: 7,
    subCategory: "Ekonom",
    subImage: def1900,
    name: "Yengil set",
    images: [def1900],
  },
  {
    id: 702,
    categoryId: 7,
    subCategory: "Premium",
    subImage: def1900,
    name: "Luks set",
    images: [defimage],
  },
];
