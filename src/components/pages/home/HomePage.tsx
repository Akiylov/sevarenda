"use client";
import React, { useEffect, useState } from "react";
import BigSliderMain from "./sections/big-slider/BigSliderMain";
import SocialsLinks from "./sections/social/SocialsLinks";
import GridSetkaMain from "./sections/grid-setka/GridSetkaMain";
import { productsData } from "@/src/source/inner";
import "./homePage.scss";
import GridPost from "../gallery/chairs-page/sections/grid-post/GridPost";

const HomePage = () => {
  const [mode, setMode] = useState<"post" | "setka">("setka");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Keep Back button inside Home: post -> setka (instead of leaving the page).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existing = window.history.state as unknown;
    const existingObj =
      existing && typeof existing === "object"
        ? (existing as Record<string, unknown>)
        : undefined;

    if (!existingObj || !existingObj.__homeMode) {
      window.history.replaceState(
        { ...(existingObj ?? {}), __homeMode: "setka" },
        ""
      );
    }

    const handlePopState = () => {
      setMode((prev) => (prev === "post" ? "setka" : prev));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div>
      {mode === "setka" ? (
        <>
          <BigSliderMain />
          <SocialsLinks />
          <GridSetkaMain
            onSelectImage={(index) => {
              setSelectedImageIndex(Number(index) || 0);
              if (typeof window !== "undefined") {
                window.history.pushState({ __homeMode: "post" }, "");
              }
              setMode("post");
            }}
            productData={productsData}
          />
        </>
      ) : (
        <GridPost
          productData={productsData}
          initialIndex={selectedImageIndex}
        />
      )}
    </div>
  );
};

export default HomePage;
