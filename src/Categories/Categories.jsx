import React from "react";
import "./Categories.scss";

function Categories({ onToggleCategories }) {
  return (
    <div className="btn-categ">
      <button className="categ" onClick={onToggleCategories}>
        <img src="/img/categories.png" alt="categories" />
        Категории
      </button>
      <button className="like">
        <img src="/img/like.png" alt="like" />
        Избранное
      </button>
    </div>
  );
}

export default Categories;