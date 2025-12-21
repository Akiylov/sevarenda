"use client";
import React, { useRef } from "react";
import "./chairspage.scss";
import BigSlider from "./sections/big-slider/BigSlider";
import FilterSection from "./sections/filter-section/FilterSection";
import GridSetka from "./sections/grid-setka/GridSetka";

const ChairsPage = () => {
  const filterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="chairspage">
      <BigSlider />

      {/* placeholder */}

      <div ref={filterRef}>
        <FilterSection />
      </div>

      {/* grid setka */}
      <div>
        <GridSetka />
      </div>
    </div>
  );
};

export default ChairsPage;
