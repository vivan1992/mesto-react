import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="root">
      <Header/>
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer/>
      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input id="name-input" name="name" type="text" className="form__input form__input_name_name" placeholder="Имя" required minLength="2" maxLength="40"/>
          <span className="form__input-error name-input-error" ></span>
        </label>
        <label className="form__field">
          <input id="career-input" name="about" type="text" className="form__input form__input_name_career" placeholder="О себе" required minLength="2" maxLength="200"/>
          <span className="form__input-error career-input-error" ></span>
        </label>
        <button type="submit" className="form__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name='card' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input id="place-input" name="place" type="text" className="form__input form__input_name_place" placeholder="Название" required minLength="2" maxLength="30"/>
          <span className="form__input-error place-input-error" ></span>
        </label>
        <label className="form__field">
          <input id="link-input" name="link" type="url" className="form__input form__input_name_link" placeholder="Ссылка на картинку" required/>
          <span className="form__input-error link-input-error" ></span>
        </label>
        <button type="submit" className="form__button">Создать</button>
      </PopupWithForm>

      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input id="place-input" name="place" type="text" className="form__input form__input_name_place" placeholder="Название" required minLength="2" maxLength="30"/>
          <span className="form__input-error place-input-error" ></span>
        </label>
        <label className="form__field">
          <input id="link-input" name="link" type="url" className="form__input form__input_name_link" placeholder="Ссылка на картинку" required/>
          <span className="form__input-error link-input-error" ></span>
        </label>
        <button type="submit" className="form__button">Создать</button>
      </PopupWithForm>

      <PopupWithForm name='delete' title='Вы уверены?' onClose={closeAllPopups}>
        <button type="submit" className="form__button">Да</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
