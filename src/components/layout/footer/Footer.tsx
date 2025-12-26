"use client";

import React from "react";
import "./foter.scss";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BsFillGiftFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: GoHomeFill, path: "/" },
    { icon: IoSearch, path: "/search" },
    { icon: BsFillGiftFill, path: "/aksiya" },
  ];

  return (
    <footer>
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={index}>
            <div className={`foter ${isActive ? "active" : ""}`}>
              <Icon size={24} />
              <div className="foter-line" />
            </div>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
