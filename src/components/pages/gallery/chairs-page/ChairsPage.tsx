"use client";
import React, { useEffect, useRef, useState } from "react";
import "./chairspage.scss";
import BigSlider from "./sections/big-slider/BigSlider";
import FilterSection from "./sections/filter-section/FilterSection";
import defimage from "../../../../../public/ess.png";
import Image from "next/image";

const ChairsPage = () => {
  const filterRef = useRef<HTMLDivElement>(null);

  return (
    <div className="chairspage">
      <BigSlider />

      {/* placeholder */}

      <div ref={filterRef}>
        <FilterSection />
      </div>

      <div className="contentsetka">
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
        <div className="image-container">
          <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </div>
  );
};

export default ChairsPage;
