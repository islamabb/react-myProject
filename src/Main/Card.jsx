import React, { useState, useEffect } from "react";
import "./Card.scss";

function Card({ title, desc, image, url }) {
  const [isLiked, setIsLiked] = useState(false);

  // Проверяем, есть ли новость в избранном при загрузке
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    const favorites = saved ? JSON.parse(saved) : [];
    const exists = favorites.some(article => article.url === url);
    setIsLiked(exists);
  }, [url]);

  const toggleLike = () => {
    const saved = localStorage.getItem("favorites");
    const favorites = saved ? JSON.parse(saved) : [];

    if (isLiked) {
      // Удаляем
      const updated = favorites.filter(article => article.url !== url);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavoritesState(updated);
      setIsLiked(false);
    } else {
      // Добавляем
      const article = { title, desc, url, urlToImage: image };
      const updated = [...favorites, article];
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavoritesState(updated);
      setIsLiked(true);
    }
  };

  // Функция для обновления состояния в родительских компонентах (если нужно)
  const setFavoritesState = (updated) => {
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className="mainCard">
      <img
        className="card-photo"
        src={image}
        alt="news"
        onError={(e) => {
          e.target.src = "/img/main-photo.png";
        }}
      />
      <div className="Card">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="card-buttons">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-card">
            Подробнее
          </a>
          <button className="btn-like" onClick={toggleLike}>
            <img src={isLiked ? "/img/liked.png" : "/img/btn-like.png"} alt="like" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;