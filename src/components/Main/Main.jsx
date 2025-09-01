import { useState } from "react";
import '../../../src/index.css'
import NewCard from "../Form/NewCard/NewCard"; 
import Popup from "./components/Popup/Popup";
import EditProfile from "../Form/EditProfile/EditProfile";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import pencilIcon from "/images/avatar-pencil.png"
import imageLandscapeDefault from "/images/Latemar_4.png"
import AvatarImage from '/images/Avatar.png'


//RECORDAR CAMBIAR EL TEMPLATE POR UNA ESTRUCTURA DDINAMICA USANDO .MAP()
function Main() {
    const [popup, setPopup] = useState(null);

    function handleOpenPopup(popup) {
        setPopup(popup);
    };

    function handleClosePopup() {
        setPopup(null);
    };  

   //OBJETO POPUP NEW PLACE
    const newCardPopup = {
        title: 'Nuevo lugar',
        children: <NewCard />
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
    src={AvatarImage} 
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
        <div className="profile__title">Jacques Cousteau</div>
        <button
        aria-label="Edit profile"
        className="profile__edit-button"
        type="button"
            onClick={() => handleOpenPopup(editProfile)}>
        </button>
        </div>
    <p className="profile__Subtitle">Explorador</p>
        </div>
    <button 
    className="profile__add-button"
        onClick={() => handleOpenPopup(newCardPopup)} >   
    </button>
</div>
    </section>
    <section className="cards">
    <div className="cards__list">
        <template id="card-template">
        <div className="card">
        <button 
        type="button" 
        className="card__trash-button"></button>
        <img 
        className="card__image" 
        src={imageLandscapeDefault} 
        alt="Valle de Yosemite landscape"/>
        <div className="card__description">
        <h2 className="card__title"></h2>
        <button 
        className="card__like-button" 
        type="button"></button>
        </div>
        </div>
    </template>
    </div>
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