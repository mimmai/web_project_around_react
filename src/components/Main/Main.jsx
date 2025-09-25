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
import CurrentUserContext from "../../Contexts/CurrentUserContext";
import { useState } from 'react';

/*const cards = [
    {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
},
{
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',  
    }
]
    console.log(cards);*/


//RECORDAR CAMBIAR EL TEMPLATE POR UNA ESTRUCTURA DDINAMICA USANDO .MAP()
function Main({ cards, onCardLike, onCardDelete, onAddPlaceSubmit, onClosePopup }) {
    //OBTENER VALOR DE DEL CONTEXTO PARA ACCEDER A LA INFORMACION DEL USUARIO
    const { currentUser } = useContext(CurrentUserContext);
    

    //VARIABLE DE ESTADO DEL POPUP
    const [popup, setPopup] = useState(null);
    //const [ setSelectedCard] = useState(null);

    function handleOpenPopup(popup) {
        setPopup(popup);
    };

    function handleClosePopup() {
        setPopup(null);
    };  
    //FUNCION PARA MANEJAR EL CLICK EN LA IMAGEN
    /*function handleCardClick(card) {
        setSelectedCard(card);
        handleOpenPopup(imageComponent);
    }*/

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
    onClick={() => handleOpenPopup(editAvatar)} 
    />
        </div>
    <div className="profile__info">
        <div className="profile__title-container">
        <div className="profile__title">{currentUser.name}</div>
        <button
        aria-label="Edit profile"
        className="profile__edit-button"
        type="button"
            onClick={() => handleOpenPopup(editProfile)}>
        </button>
        </div>
    <p className="profile__Subtitle">{currentUser.about} </p>
        </div>
    <button 
    className="profile__add-button"
        onClick={() => handleOpenPopup(newCardPopup)} >   
    </button>
</div>
    </section>
    <section className="cards">
    <ul className="cards__list">
        {cards.map((card) => (
            <Card 
            key={card._id} 
            card={card} 
            handleOpenPopup={handleOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            />
        ))}
    </ul>
    </section>
    {popup && (
        <Popup
        onClose={handleClosePopup}
        title={popup.title} >
            {popup.children}
        </Popup>
    )}
</main>
    );
}

export default Main;