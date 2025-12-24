/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Gallery, Item } from "react-photoswipe-gallery";
// import type { Product } from "@/src/source/inner";

// import "swiper/css";
// import "photoswipe/dist/photoswipe.css";
// import "./gridPost.scss";

// const DESCRIPTION_LIMIT = 80;

// const GridPost = ({ productData }: { productData: Product[] }) => {
//   return (
//     <div className="grid-post">
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
//     <article className="post-card">
//       {/* Header */}
//       <header className="post-card__header">
//         <div className="post-card__avatar">
//           <Image
//             src={product.subImage}
//             alt={product.subCategory}
//             className="object-cover"
//           />
//         </div>
//         <span className="post-card__username">{product.name}</span>
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
//         <div className="post-card__media">
//           {product.images.length > 1 && (
//             <div className="post-card__counter">
//               {activeIndex + 1}/{product.images.length}
//             </div>
//           )}

//           <Swiper
//             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//             className="post-card__swiper"
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
//                         className="post-card__image-wrapper"
//                       >
//                         <Image src={src} alt={`${product.name}-${index}`} />
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
//       <div className="post-card__actions">❤️ 💬 📤 🔖</div>

//       {/* Description */}
//       <div className="post-card__description">
//         <span className="post-card__bold">{product.name}</span>
//         <span>{visibleText}</span>
//         {!expanded && (
//           <button onClick={() => setExpanded(true)} className="post-card__more">
//             yana…
//           </button>
//         )}
//       </div>
//     </article>
//   );
// };

// export default GridPost;
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "swiper/css";
import "photoswipe/dist/photoswipe.css";
import "./gridPost.scss";
import type { Product } from "@/src/source/inner";

const DESCRIPTION_LIMIT = 80;

const GridPost = ({
  productData,
  initialIndex = 0,
}: {
  productData: Product[];
  initialIndex?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>(() =>
    productData.map(() => 0)
  );

  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      if (children[initialIndex]) {
        (children[initialIndex] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [initialIndex]);

  return (
    <div className="grid-post" ref={containerRef}>
      {productData.map((product, index) => (
        <PostCard
          key={product.id}
          product={product}
          activeIndex={activeIndices[index]}
          setActiveIndex={(i: number) =>
            setActiveIndices((prev) => {
              const copy = [...prev];
              copy[index] = i;
              return copy;
            })
          }
        />
      ))}
    </div>
  );
};

const PostCard = ({
  product,
  activeIndex,
  setActiveIndex,
}: {
  product: Product;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) => {
  const [expanded, setExpanded] = useState(false);
  const description =
    "Bu mahsulot haqida batafsil maʼlumot. Instagram postlaridagi kabi matn qisqartirilgan holda ko‘rsatiladi.";
  const visibleText = expanded
    ? description
    : description.slice(0, DESCRIPTION_LIMIT);

  return (
    <article className="post-card">
      <header className="post-card__header">
        <div className="post-card__avatar">
          <Image
            src={product.subImage}
            alt={product.subCategory}
            className="object-cover"
          />
        </div>
        <span className="post-card__username">{product.name}</span>
      </header>

      <Gallery>
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
            {product.images.map((src, idx) => {
              const isObject = typeof src !== "string";
              const original = isObject ? (src as any).src : (src as string);
              const thumbnail = original;
              const width =
                isObject && "width" in (src as any) ? (src as any).width : 1080;
              const height =
                isObject && "height" in (src as any)
                  ? (src as any).height
                  : 1080;

              // ensure Item receives plain string (react-photoswipe-gallery expects string)
              const originalStr =
                typeof original === "string"
                  ? original
                  : (original as any).src ?? undefined;
              const thumbnailStr =
                typeof thumbnail === "string"
                  ? thumbnail
                  : (thumbnail as any).src ?? undefined;

              return (
                <SwiperSlide key={idx}>
                  <Item
                    original={originalStr}
                    thumbnail={thumbnailStr}
                    width={width}
                    height={height}
                  >
                    {({ ref, open }) => (
                      <div
                        ref={ref}
                        onClick={open}
                        className="post-card__image-wrapper"
                      >
                        <Image src={src} alt={`${product.name}-${idx}`} />
                      </div>
                    )}
                  </Item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Gallery>

      <div className="post-card__actions">❤️ 💬 📤 🔖</div>

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
