"use client";
import React from "react";
import "./gridsetka.scss";
import Image from "next/image";
import defimage from "../../../../../../../public/1080х1400.png";
import def1080 from "../../../../../../../public/1080x1080.png";
import def1900 from "../../../../../../../public/10801900.png";

const GridSetka = () => {
  return (
    <div className="contentsetka">
      <div className="image-container">
        <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={def1080} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={def1900} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={def1080} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={def1080} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={def1080} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
      <div className="image-container">
        <Image src={defimage} alt="Chair" style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default GridSetka;
