import '../../../src/index.css'
import NewCard from "../Form/NewCard/NewCard"; 
import Popup from "./components/Popup/Popup";
import EditProfile from "../Form/EditProfile/EditProfile";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import pencilIcon from "/images/avatar-pencil.png"
import AvatarImage from '/images/Avatar.png'
import Card from "./components/Popup/Card/Card";
import ImagePopup from "../Form/ImagePopup/ImagePopup";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";


//RECORDAR CAMBIAR EL TEMPLATE POR UNA ESTRUCTURA DDINAMICA USANDO .MAP()
function Main({ cards, onCardLike, onCardDelete, onAddPlaceSubmit, onOpenPopup, onClosePopup, popup }) {
    //OBTENER VALOR DE DEL CONTEXTO PARA ACCEDER A LA INFORMACION DEL USUARIO
    const { currentUser } = useContext(CurrentUserContext);
    


   //OBJETO POPUP NEW PLACE
    const newCardPopup = {
        title: 'Nuevo lugar',
        children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit}
        onClose={onClosePopup}
        />
    };
    //OBJETO DE EDITPROFILE
    const editProfile = {
        title:'Editar Perfil',
        children: <EditProfile />
    };
    //OBJETO DE AVATARPROFILE
    const editAvatar = {
        title:'Cambiar foto de perfil',
        children: <EditAvatar />
        } 

    return(
    <main className="content">
    <section className="profile">
    <div className="profile__content">
        <div className="profile__container">
    <img 
    className="avatar profile__avatar" 
    src={currentUser.avatar} 
    alt="imagen de perfil"/>
    <img 
    className="profile__image-pencil" 
    src={pencilIcon}  
    alt="Lapiz"
    onClick={() => onOpenPopup(editAvatar)} 
    />
        </div>
    <div className="profile__info">
        <div className="profile__title-container">
        <div className="profile__title">{currentUser.name}</div>
        <button
        aria-label="Edit profile"
        className="profile__edit-button"
        type="button"
            onClick={() => onOpenPopup(editProfile)}>
        </button>
        </div>
    <p className="profile__Subtitle">{currentUser.about} </p>
        </div>
    <button 
    className="profile__add-button"
        onClick={() => onOpenPopup(newCardPopup)} >   
    </button>
</div>
    </section>
    <section className="cards">
    <ul className="cards__list">
        {cards.map((card) => (
            <Card 
            key={card._id} 
            card={card} 
            handleOpenPopup={onOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            />
        ))}
    </ul>
    </section>
    {popup && (
        <Popup
        onClose={onClosePopup}
        title={popup.title} >
            {popup.children}
        </Popup>
    )}
</main>
    );
}

export default Main;