/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import "./gridsetkaMain.scss";
import Image from "next/image";
import def1080 from "./../../../../../../public/1080x1080.png";

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

const GridSetkaMain = ({
  productData,
  onSelectImage,
}: {
  productData: any[];
  onSelectImage: (index: any) => void;
}) => {
  return (
    <>
      <div className="setka-header">
        <h2>Mahsulotlar</h2>
      </div>
      <div className="contentsetka">
        {productData.map((product, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => onSelectImage(index)}
          >
            <Image
              src={product.images?.[0] || def1080}
              alt={product.name}
              style={{ objectFit: "cover" }}
            />
            {product.images && product.images.length > 1 && (
              <div className="image-counter">1/{product.images.length}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default GridSetkaMain;
