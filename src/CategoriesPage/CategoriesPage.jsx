import React from "react";
import "./Main.scss";
import Card from "./Card";

const categories = [
  "Технологии",
  "Бизнес",
  "Спорт",
  "Наука",
  "Здоровье",
  "Развлечения",
];

function Main({ news, loading, showCategories, searchTerm }) {
  if (showCategories) {
    return (
      <div className="main categories">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <button
              key={category}
              className="category-btn"
              onClick={() => alert(`Переход к категории: ${category}`)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const displayedNews = news ? news.slice(0, 9) : [];

  return (
    <div className="main news">
      <h1>
        <span>Популярные</span> новости
      </h1>
      <div className="container">
        {loading ? (
          <div className="loading">Загрузка новостей...</div>
        ) : displayedNews.length > 0 ? (
          displayedNews.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              desc={article.description}
              image={article.urlToImage || "/img/main-photo.png"}
              url={article.url}
            />
          ))
        ) : (
          <div className="no-news">Новости не найдены</div>
        )}
      </div>
    </div>
  );
}

export default Main;