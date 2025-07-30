import React from "react"
import "./Catigories.scss"

function Catigories() {
  return (
    <div className="btn-categ">
            <button className="categ">
              <img  src="/img/categories.png" alt="categories"></img>
              Категории
            </button>
            <button className="like">
              <img  src="/img/like.png" alt="like"></img>
            Избранное
            </button>
          </div>
  )
}

export default Catigories