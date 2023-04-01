
function ImagePopup ({card, onClose}) {
  return (
    <section className={`popup popup_img ${card._id ? 'popup_opened' : ''}`}>
      <div className="popup__wrapper">
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
          aria-label="Закрыть"></button>
        <img src={card.link} alt={card.name} className="popup__img"/>
        <p className="popup__descr">{card.name}</p>
      </div>
    </section>
  );
}

export default ImagePopup;

