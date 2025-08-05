import React, { useState, useEffect } from "react";
import "./FaviritesPage.scss";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Загружаем избранное из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  // Удаляем из избранного
  const removeFromFavorites = (url) => {
    const updated = favorites.filter(article => article.url !== url);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="main favorites">
      <h1><span>Избранные</span> новости</h1>

      {favorites.length === 0 ? (
        <div className="no-favorites">Нет избранных новостей</div>
      ) : (
        <div className="container">
          {favorites.map((article, index) => (
            <div className="mainCard" key={index}>
              <img
                className="card-photo"
                src={article.urlToImage || "/img/main-photo.png"}
                alt="news"
                onError={(e) => {
                  e.target.src = "/img/main-photo.png";
                }}
              />
              <div className="Card">
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className="card-buttons">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card"
                  >
                    Подробнее
                  </a>
                  <button
                    className="btn-like"
                    onClick={() => removeFromFavorites(article.url)}
                  >
                    <img src="/img/liked.png" alt="liked" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;