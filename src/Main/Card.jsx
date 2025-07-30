import "./Card.scss"

function Card() {
  return(
    <div className="mainCard">
      <img className="card-photo"src="/img/main-photo.png" alt="photo"></img>
      <div className="Card">
      <h2>Новости IT</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam architecto incidunt in cupiditate vitae odit?</p>
      <button className="btn-card">Подробнее</button>
      <button className="btn-like">
        <img src="/img/btn-like.png"></img>
      </button>
      </div>
    </div>
  )
}

export default Card