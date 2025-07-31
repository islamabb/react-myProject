import "./Card.scss"

function Card(props) {
  return(
    <div className="mainCard">
      <img className="card-photo"src="/img/main-photo.png" alt="photo"></img>
      <div className="Card">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <button className="btn-card">Подробнее</button>
      <button className="btn-like">
        <img src="/img/btn-like.png"></img>
      </button>
      </div>
    </div>
  )
}

export default Card