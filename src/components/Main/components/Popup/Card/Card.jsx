import ImagePopup from "../../../../Form/ImagePopup/ImagePopup";

export default function Card({ card, handleOpenPopup}) {
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

    const likeButtonClass = isLiked ? 'card__like-button card__like-button_active' : 'card__like-button';

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
                className={likeButtonClass}
                //onClick={() => onLikeClick(props.card)}
                type="button"></button>
                </div>
                </li>
    )
}