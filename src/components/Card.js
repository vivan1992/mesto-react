
function Card ({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="cards__item">
      <div className="cards__delete"></div>
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="cards__image"/>
      <div className="cards__wrap">
        <p className="cards__title">{card.name}</p>
        <div className="cards__wrap-like">
          <button type="button" className="cards__heart" aria-label="Лайк"></button>
          <p className="cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
