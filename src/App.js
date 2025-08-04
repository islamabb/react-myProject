import Header from "./Headers/Header";
import React, { useState, useEffect } from 'react';
import HeaderTwo from "./Headers/HeaderTwo";
import Main from "./Main/Main";

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
            `https://newsapi.org/v2/everything?q=${searchTerm}&from=2025-07-04&sortBy=publishedAt&apiKey=88d6c71e80c9488186bfd3fa4fe1ab8a`
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

  const handleSearch = (query) => {
    setSearchTerm(query || 'tesla');
  };

  const toggleCategories = () => {
    setShowCategories(prev => !prev);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} onToggleCategories={toggleCategories} />
      <HeaderTwo showCategories={showCategories} />
      <Main
        news={news}
        loading={loading}
        showCategories={showCategories}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;