// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Gallery, Item } from "react-photoswipe-gallery";
// import type { Product } from "@/src/source/inner";

// import "swiper/css";
// import "photoswipe/dist/photoswipe.css";

// const DESCRIPTION_LIMIT = 80;

// const GridPost = ({ productData }: { productData: Product[] }) => {
//   return (
//     <div className="mx-auto max-w-[470px] flex flex-col gap-8 py-8">
//       {productData.map((product) => (
//         <PostCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ product }: { product: Product }) => {
//   const [expanded, setExpanded] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const description =
//     "Bu mahsulot haqida batafsil maʼlumot. Instagram postlaridagi kabi matn qisqartirilgan holda ko‘rsatiladi.";

//   const visibleText = expanded
//     ? description
//     : description.slice(0, DESCRIPTION_LIMIT);

//   return (
//     <article className="border border-gray-200 bg-white">
//       {/* Header */}
//       <header className="flex items-center gap-3 px-4 py-3">
//         <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-300">
//           <Image src={product.subImage} alt={product.subCategory} fill />
//         </div>
//         <span className="text-sm font-semibold">{product.name}</span>
//       </header>

//       {/* Media */}
//       <Gallery
//         options={{
//           imageClickAction: "zoom",
//           tapAction: "toggle-controls",
//           doubleTapAction: "zoom",
//           bgOpacity: 0.9,
//         }}
//       >
//         <div className="relative aspect-square bg-black">
//           {product.images.length > 1 && (
//             <div className="absolute top-3 right-3 z-10 rounded-full bg-black/70 px-2 py-0.5 text-xs text-white">
//               {activeIndex + 1}/{product.images.length}
//             </div>
//           )}

//           <Swiper
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             className="h-full w-full"
//           >
//             {product.images.map((src, index) => {
//               const isObject = typeof src !== "string";
//               const original = isObject ? (src as any).src : src;
//               const thumbnail = original;
//               const width =
//                 isObject && "width" in (src as any) ? (src as any).width : 1080;
//               const height =
//                 isObject && "height" in (src as any)
//                   ? (src as any).height
//                   : 1080;

//               return (
//                 <SwiperSlide key={index}>
//                   <Item
//                     original={original}
//                     thumbnail={thumbnail}
//                     width={width}
//                     height={height}
//                   >
//                     {({ ref, open }) => (
//                       <div
//                         ref={ref}
//                         onClick={open}
//                         className="relative w-full h-full cursor-pointer"
//                       >
//                         <Image
//                           src={src}
//                           alt={`${product.name}-${index}`}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                     )}
//                   </Item>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </Gallery>

//       {/* Actions */}
//       <div className="px-4 py-2 flex gap-4 text-xl">❤️ 💬 📤 🔖</div>

//       {/* Description */}
//       <div className="px-4 pb-4 text-sm">
//         <span className="font-semibold mr-1">{product.name}</span>
//         <span>{visibleText}</span>
//         {!expanded && (
//           <button
//             onClick={() => setExpanded(true)}
//             className="ml-1 text-gray-500 text-sm"
//           >
//             yana…
//           </button>
//         )}
//       </div>
//     </article>
//   );
// };

// export default GridPost;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import type { Product } from "@/src/source/inner";

import "swiper/css";
import "photoswipe/dist/photoswipe.css";
import "./gridPost.scss";

const DESCRIPTION_LIMIT = 80;

const GridPost = ({ productData }: { productData: Product[] }) => {
  return (
    <div className="grid-post">
      {productData.map((product) => (
        <PostCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const PostCard = ({ product }: { product: Product }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const description =
    "Bu mahsulot haqida batafsil maʼlumot. Instagram postlaridagi kabi matn qisqartirilgan holda ko‘rsatiladi.";

  const visibleText = expanded
    ? description
    : description.slice(0, DESCRIPTION_LIMIT);

  return (
    <article className="post-card">
      {/* Header */}
      <header className="post-card__header">
        <div className="post-card__avatar">
          <Image src={product.subImage} alt={product.subCategory} fill />
        </div>
        <span className="post-card__username">{product.name}</span>
      </header>

      {/* Media */}
      <Gallery
        options={{
          imageClickAction: "zoom",
          tapAction: "toggle-controls",
          doubleTapAction: "zoom",
          bgOpacity: 0.9,
        }}
      >
        <div className="post-card__media">
          {product.images.length > 1 && (
            <div className="post-card__counter">
              {activeIndex + 1}/{product.images.length}
            </div>
          )}

          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="post-card__swiper"
          >
            {product.images.map((src, index) => {
              const isObject = typeof src !== "string";
              const original = isObject ? (src as any).src : src;
              const thumbnail = original;
              const width =
                isObject && "width" in (src as any) ? (src as any).width : 1080;
              const height =
                isObject && "height" in (src as any)
                  ? (src as any).height
                  : 1080;

              return (
                <SwiperSlide key={index}>
                  <Item
                    original={original}
                    thumbnail={thumbnail}
                    width={width}
                    height={height}
                  >
                    {({ ref, open }) => (
                      <div
                        ref={ref}
                        onClick={open}
                        className="post-card__image-wrapper"
                      >
                        <Image src={src} alt={`${product.name}-${index}`} />
                      </div>
                    )}
                  </Item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Gallery>

      {/* Actions */}
      <div className="post-card__actions">❤️ 💬 📤 🔖</div>

      {/* Description */}
      <div className="post-card__description">
        <span className="post-card__bold">{product.name}</span>
        <span>{visibleText}</span>
        {!expanded && (
          <button onClick={() => setExpanded(true)} className="post-card__more">
            yana…
          </button>
        )}
      </div>
    </article>
  );
};

export default GridPost;
