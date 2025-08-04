import React from "react";
import "./HeaderTwo.scss";

function HeaderTwo({ showCategories }) {
  return (
    <header className="hdr">
      {showCategories ? "Категории" : "Новости"}
    </header>
  );
}

export default HeaderTwo;