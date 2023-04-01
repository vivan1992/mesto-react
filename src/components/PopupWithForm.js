
function PopupWithForm (props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close"
          aria-label="Закрыть"></button>
        <h3 className="popup__title">{props.title}</h3>
        <form name={`${props.name}-form`} className={`form form_name_${props.name}`} noValidate>
          {props.children}
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
