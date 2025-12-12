import React from "react";
import { IoIosHeart } from "react-icons/io";
import "./header.scss";
const Header = () => {
  return (
    <header>
      <h1>Sevara catering</h1>
      <div>
        <IoIosHeart size={24} />
      </div>
    </header>
  );
};

export default Header;
