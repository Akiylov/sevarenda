/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { FaList } from "react-icons/fa6";
import "./filterSection.scss";
import defaultImg from "./../../../../../../../public/1080х1400.png";

type HighLightsProps = {
  productData: any[];
  onSelectionChange?: (selected: string[]) => void;
};

const HighLights = ({ productData, onSelectionChange }: HighLightsProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [modalSelected, setModalSelected] = useState<string[]>([]);

  // productData'dan unique subCategory'larni olish
  const uniqueSubCategories = Array.from(
    new Set(productData.map((product) => product.subCategory))
  );

  const toggle = (item: string, isModal = false) => {
    if (isModal) {
      setModalSelected((prev) =>
        prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
      );
    } else {
      setSelected((prev) => {
        const newSelection = prev.includes(item)
          ? prev.filter((x) => x !== item)
          : [...prev, item];

        // Parent'ga xabar berish
        if (onSelectionChange) {
          onSelectionChange(newSelection);
        }
        return newSelection;
      });
    }
  };

  const handleSave = () => {
    setSelected(modalSelected);
    if (onSelectionChange) {
      onSelectionChange(modalSelected);
    }
    setOpen(false);
  };

  const handleCancel = () => {
    setModalSelected(selected);
    setOpen(false);
  };

  return (
    <>
      <div className="highlights">
        <div className="titleBox">
          <h4>Saralash bo‘limi</h4>
          <div
            onClick={() => {
              setModalSelected(selected);
              setOpen(true);
            }}
            className="iconBox"
          >
            <FaList size={20} />
          </div>
        </div>

        <ScrollContainer
          className={`highlights__container oneRow`}
          vertical={false}
          activationDistance={5}
        >
          {uniqueSubCategories.map((item, i) => {
            const active = selected.includes(item);
            const productWithThisSubCategory = productData.find(
              (p) => p.subCategory === item
            );
            return (
              <motion.div
                key={item + i}
                className={`highlights__highlight ${active ? "active" : ""}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => toggle(item)}
              >
                <div className="highlights__highlightImg">
                  <Image
                    src={productWithThisSubCategory?.subImage || defaultImg}
                    alt={item}
                    fill
                    sizes="60px"
                  />
                  {active && <div className="check"></div>}
                </div>
                <p>{item}</p>
              </motion.div>
            );
          })}
        </ScrollContainer>
      </div>

      {/* {open && (
        <div className="modalOverlay" onClick={handleCancel}>
          <motion.div
            className="modalBox"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>To‘liq rasmlar</h3>
            <div className="grid">
              {highlights.slice(0, 20).map((item, i) => {
                const active = modalSelected.includes(item);
                return (
                  <div
                    key={i}
                    className={`gridItem ${active ? "active" : ""}`}
                    onClick={() => toggle(item, true)}
                  >
                    <Image src={defaultImg} alt={item} fill sizes="100px" />
                    {active && <div className="check"></div>}
                    <p>1</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )} */}
    </>
  );
};

export default HighLights;
