import React, { useState } from "react";
import "./Header.scss";
import Categories from "../Categories/Categories";

function Header({ onSearch, onToggleCategories }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <header className="App-header">
      <div>
        <img className="logo" src="/img/imp-dev.svg" alt="Logo" />
      </div>
      <div className="input-mat">
        <input
          className="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Поиск новостей..."
        />
        <img className="icon" src="/img/search-icon.png" alt="search" />
      </div>
      <Categories onToggleCategories={onToggleCategories} />
    </header>
  );
}

export default Header;