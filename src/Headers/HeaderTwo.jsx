import React from "react";
import { useLocation } from "react-router-dom";
import "./HeaderTwo.scss";

function HeaderTwo() {
  const location = useLocation();
  let title = "Новости";

  if (location.pathname === "/categories") title = "Категории";
  if (location.pathname === "/favorites") title = "Избранное";

  return <header className="hdr">{title}</header>;
}

export default HeaderTwo;