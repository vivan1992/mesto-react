import { useState, useEffect } from 'react';
import request from '../utils/Api';
import Card from './Card';

function Main ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    request.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    request.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
      })
      .catch(err => console.log(err));
  }, []);

  function renderCards(arr) {
    return arr.map((item) => {
      return <Card card={item} key={item._id} onCardClick={onCardClick}/>
    });
  }

  const items = renderCards(cards);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__wrap">
          <button
            onClick={onEditAvatar}
            type="button"
            className="profile__image-edit"
            aria-label="Редактировать"
          ></button>
          <img src={userAvatar} alt="Аватарка" className="profile__image"/>
          <div className="profile__wrap-text">
            <div className="profile__wrap-title">
              <p className="profile__title">{userName}</p>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__button-edit"
                aria-label="Редактировать"
              ></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__button-add"
          aria-label="Добавить место"
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__items">
          {items}
        </ul>
      </section>
    </main>
  );
}

export default Main;
