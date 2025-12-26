/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import "./chairspage.scss";
import BigSlider from "./sections/big-slider/BigSlider";
import FilterSection from "./sections/filter-section/FilterSection";
import GridSetka from "./sections/grid-setka/GridSetka";
import { productsData } from "@/src/source/inner";
import { useSearchParams } from "next/navigation";
import GridPost from "./sections/grid-post/GridPost";

const ChairsPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("id");
  const filterRef = useRef<HTMLDivElement>(null);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    []
  );
  const [mode, setMode] = useState<"post" | "setka">("setka");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // When user opens a post (from grid), keep them on the same route and make Back return to grid.
  useEffect(() => {
    if (typeof window === "undefined") return;

    // mark current state as setka (so we can reliably go back to it)
    const existing = window.history.state as any;
    if (!existing || !existing.__chairsMode) {
      window.history.replaceState(
        { ...(existing ?? {}), __chairsMode: "setka" },
        ""
      );
    }

    const handlePopState = () => {
      // if we are in post mode and user presses Back, switch UI back to grid instead of leaving the page
      setMode((prev) => {
        if (prev === "post") {
          setSelectedImageIndex(null);
          return "setka";
        }
        return prev;
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

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
    <div>
      {mode === "setka" ? (
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
            <GridSetka
              productData={finalFilteredProducts}
              onSelectImage={(index: any) => {
                setSelectedImageIndex(index);
                // push a history entry so browser Back returns to setka state (same route)
                if (typeof window !== "undefined") {
                  window.history.pushState({ __chairsMode: "post" }, "");
                }
                setMode("post");
              }}
            />
          </div>
        </div>
      ) : (
        <GridPost
          productData={finalFilteredProducts}
          initialIndex={selectedImageIndex || 0}
        />
      )}
    </div>
  );
};

export default ChairsPage;
