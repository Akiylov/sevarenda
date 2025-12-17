"use client";
import React, { useEffect, useRef, useState } from "react";
import "./chairspage.scss";
import BigSlider from "./sections/big-slider/BigSlider";
import FilterSection from "./sections/filter-section/FilterSection";

const ChairsPage = () => {
  const [fixed, setFixed] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (filterRef.current) {
      setHeight(filterRef.current.offsetHeight);
    }

    const onScroll = () => {
      setFixed(window.scrollY >= 150);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="chairspage">
      <BigSlider />

      {/* placeholder */}
      {fixed && <div style={{ height }} />}

      <div ref={filterRef} className={fixed ? "filterFixed" : "filterNormal"}>
        <FilterSection />
      </div>

      <div className="content">grid setka</div>
    </div>
  );
};

export default ChairsPage;
