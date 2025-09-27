import { useContext } from "react";
import ImagePopup from "../../../../Form/ImagePopup/ImagePopup";
import CurrentUserContext from "../../../../../Contexts/CurrentUserContext";

export default function Card({ card, handleOpenPopup, onCardLike, onCardDelete}) {
    const { name, link } = card;

    //ESTO DESESTRUCTURA CURRENTUSER DEL CONTEXTO
    const { currentUser } = useContext(CurrentUserContext)
    //console.log('currentUser:', currentUser)

    //PARA VERIFICAR QUE EL USARIO ES DUEÑO DE LA TARJETA?
    const isOwn = card.owner._id === currentUser._id;

    //ESTE MUESTRA EL BOTON ELIMINAR SOLO SI ES EL DUEÑO
    const cardDeleteButtonClassName = `card__trash-button ${
        isOwn ? 'card__trash-button-visible': 'card__trash-button_hidden'
    }`  
    
    const isLiked = (typeof card.isLiked !== 'undefined')
  ? card.isLiked
  : (currentUser && card.likes ? card.likes.some(user => user._id === currentUser._id) : false);
    

    const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button-active' : ''
}`; 




    function handleImageClick() {
        const imageComponent = {
        title: null,
        children: <ImagePopup card={card} />
    }
    handleOpenPopup(imageComponent)
    }

    function handleLikeCLick() {
        console.log('Card.jsx -> click', card._id, 'prop card.isLiked =', card.isLiked);
        onCardLike(card);
    }

    function handleCardDelete() {
       // console.log('Funciona le boton?')
        onCardDelete(card)
    }

    return (
        < li className="card">
                <button 
                aria-label='Delete card'
                type="button" 
                className={cardDeleteButtonClassName}
                onClick={handleCardDelete}
                ></button>
                <img 
                className="card__image" 
                src={link} 
                alt={name}
                onClick={handleImageClick}
                />
                <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button 
                aria-label='Like card'
                className={cardLikeButtonClassName}
                onClick={handleLikeCLick}
                type="button"></button>
                </div>
                </li>
    )
}