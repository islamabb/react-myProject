import "./Card.scss";

function Card({ title, desc, image, url }) {
  return (
    <div className="mainCard">
      <img className="card-photo" src={image} alt="news" onError={(e) => {
        e.target.src = "/img/main-photo.png";
      }} />
      <div className="Card">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="card-buttons">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-card">
            Подробнее
          </a>
          <button className="btn-like">
            <img src="/img/btn-like.png" alt="like" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;