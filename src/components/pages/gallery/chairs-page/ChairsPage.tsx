"use client";
import React, { useRef, useState } from "react";
import "./chairspage.scss";
import BigSlider from "./sections/big-slider/BigSlider";
import FilterSection from "./sections/filter-section/FilterSection";
import GridSetka from "./sections/grid-setka/GridSetka";
import { productsData } from "@/src/source/inner";
import { useSearchParams } from "next/navigation";

const ChairsPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");
  const filterRef = useRef<HTMLDivElement>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );

  // ID'ga qarab filterlash (categoryId string bo'lib keladi, shuning uchun == ishlatamiz yoki Number() qilamiz)
  const filteredProducts = productsData.filter(
    (product) => product.categoryId === Number(categoryId)
  );

  // SubCategory bo'yicha filterlash
  const finalFilteredProducts =
    selectedSubCategories.length > 0
      ? filteredProducts.filter((product) =>
          selectedSubCategories.includes(product.subCategory)
        )
      : filteredProducts;

  console.log("Filtered Products:", filteredProducts);
  console.log("Selected SubCategories:", selectedSubCategories);
  console.log("Final Filtered Products:", finalFilteredProducts);

  return (
    <div className="chairspage">
      <BigSlider />

      {/* placeholder */}

      <div ref={filterRef}>
        <FilterSection
          productData={filteredProducts}
          onSelectionChange={setSelectedSubCategories}
        />
      </div>

      {/* grid setka */}
      <div>
        <GridSetka productData={finalFilteredProducts} />
      </div>
    </div>
  );
};

export default ChairsPage;
