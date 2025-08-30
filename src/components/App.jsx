import logo from '../images/Vector.png'
import avatarImage from '../images/avatar.png'

function App(){

  return (
    <>
    <div className="page">
<header className="header page__section">
  <img 
  src={logo} 
  alt="Around the U.S."
  className='logo header__logo'/>
</header>
<main className="content">
  <section className="profile">
    <div className="profile__content">
      <div className="profile__container">
    <img 
    className="avatar profile__avatar" 
    src={avatarImage} 
    alt="imagen de perfil"/>
    <img 
    className="profile__image-pencil" 
    src="" 
    alt="Lapiz"/>
      </div>
    <div className="profile__info">
      <div className="profile__title-container">
      <div className="profile__title">Jacques Cousteau</div>
      <button
      aria-label="Edit profile"
      className="profile__edit-button"
      type="button"></button>
      </div>
    <p className="profile__Subtitle">Explorador</p>
      </div>
  <button className="profile__add-button"></button>
</div>
  </section>
  <section className="cards">
    <div className="cards__list">
      <template id="card-template">
      <div className="card">
        <button type="button" className="card__trash-button"></button>
      <img className="card__image" src="" alt="Valle de Yosemite landscape"/>
      <div className="card__description">
        <h2 className="card__title"></h2>
        <button className="card__like-button" type="button"></button>
        </div>
      </div>
    </template>
  </div>
  </section>
</main>
<footer className="footer">
  <div className="footer__page-author">© 2021 Around The U.S.</div>
</footer>
</div>
    </>
  )
}

export default App
