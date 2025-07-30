import React from "react";
import "./Header.scss"
import Catigories from "./Navigation/Catigories";

function Header () {
  return (
    <header className="App-header">
        <div>
          <img className="logo" src="/img/imp-dev.svg" alt="Logo"></img>
        </div>
        <div className="input-mat">
          <input className="search"></input>
          <img className="icon" src="/img/search-icon.png" alt="search"></img>
        </div>
      <Catigories/>
      </header>
  )
}

export default Header