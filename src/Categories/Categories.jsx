import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  const navigate = useNavigate();

  return (
    <div className="btn-categ">
      <button className="categ" onClick={() => navigate("/categories")}>
        <img src="/img/categories.png" alt="categories" />
        Категории
      </button>
      <button className="like" onClick={() => navigate("/favorites")}>
        <img src="/img/like.png" alt="like" />
        Избранное
      </button>
    </div>
  );
}

export default Categories;