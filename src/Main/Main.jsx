import React from "react";
import "./Main.scss";
import Card from "./Card";

function Main({ news, loading }) {
  const displayedNews = news ? news.slice(0, 12) : [];

  return (
    <div className="main">
      <h1><span className="main-span">Популярные</span> новости</h1>
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