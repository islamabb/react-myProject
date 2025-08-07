import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import Header from "./Headers/Header";
import React, { useState, useEffect } from 'react';
import HeaderTwo from "./Headers/HeaderTwo";
import Main from "./Main/Main";
import FavoritesPage from "./FavoritesPage/FavoritesPage";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('tesla');
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (!showCategories) {
      const fetchNews = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=apple&from=2025-08-03&to=2025-08-03&sortBy=popularity&apiKey=88d6c71e80c9488186bfd3fa4fe1ab8a`
          );
          const data = await response.json();
          setNews(data.articles || []);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching news:", error);
          setLoading(false);
        }
      };
      fetchNews();
    }
  }, [searchTerm, showCategories]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const handleSearch = (query) => {
    setSearchTerm(query || 'tesla');
  };

  const toggleCategories = (bool) => {
    setShowCategories(bool);
  };

  return (
    <Router>
    <div className="App">
      <Header onSearch={handleSearch} onToggleCategories={toggleCategories} />
      <HeaderTwo showCategories={showCategories} />
      <Routes>
          <Route path="/" element={<Main news={news} loading={loading} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;