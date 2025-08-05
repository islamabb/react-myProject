import React from "react";
import { Link } from 'react-router-dom';
import "./CategoriesPage.scss";

const categories = [
  { name: "Технологии", icon: "/img/tech-icon.png" },
  { name: "Бизнес", icon: "/img/bussines-icon.png" },
  { name: "Спорт", icon: "/img/sport-icon.png" },
  { name: "Наука", icon: "/img/science-icon.png" },
  { name: "Здоровье", icon: "/img/health-icon.png" },
  { name: "Развлечения", icon: "/img/funny-icon.png" },
];


function CategoriesPage() {
  return (
    <div className="main categories">
      <div className="categories-grid">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/category/${category.id}`} 
            className={`category-btn category-btn-${category.id}`}
            >
            <div className="categ-img">
            <span>{category.name}</span>
            <img src={category.icon} alt={category.name} className="category-icon" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;