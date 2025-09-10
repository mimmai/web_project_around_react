import ImagePopup from "../../../../Form/ImagePopup/ImagePopup";

export default function Card({ card, handleOpenPopup, onCardLike}) {
    const { name, link, isLiked } = card;
    //const { onCardClick } = props;
    //AGREGAR LUEGO onLikeCLICK al props 
    function handleImageClick() {
        const imageComponent = {
        title: null,
        children: <ImagePopup card={card} />
    }
    handleOpenPopup(imageComponent)
    }

    function handleLikeCLick() {
        onCardLike(card);
    }

    const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_is-active' : ''
}`;


    return (
        < li className="card">
                <button 
                aria-label='Delete card'
                type="button" 
                className="card__trash-button"
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