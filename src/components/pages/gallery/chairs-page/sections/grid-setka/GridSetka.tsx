/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import "./gridsetka.scss";
import Image from "next/image";
import defimage from "../../../../../../../public/1080х1400.png";
import def1080 from "../../../../../../../public/1080x1080.png";
import def1900 from "../../../../../../../public/10801900.png";

type Product = {
  id: number;
  name: string;
  subCategory: string;
  images?: string[];
  categoryId: number;
};

type GridSetkaProps = {
  productData: any[];
};

const GridSetka = ({ productData }: GridSetkaProps) => {
  console.log(productData);
  const getImageSrc = (index: number) => {
    switch (index % 3) {
      case 0:
        return defimage;
      case 1:
        return def1080;
      case 2:
        return def1900;
      default:
        return defimage;
    }
  };
  return (
    <div className="contentsetka">
      {productData.map((product, index) => (
        <div className="image-container" key={index}>
          <Image
            src={getImageSrc(index)}
            alt={product.name}
            style={{ objectFit: "cover" }}
          />
          {product.images && product.images.length > 1 && (
            <div className="image-counter">1/{product.images.length}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridSetka;
