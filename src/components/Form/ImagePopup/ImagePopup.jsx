export default function ViewImageFullSize() {
    return (
        <div className="popup popup__image"  id="popup-view-image">
    <div className="popup__container">
    <div className="popup__close-button" id="close-image-button">
    <img 
    src="./images/Close_Icon.png" 
    alt="Equis para cerrar ventana emergente del formulario"/>
    </div>
    <img 
    className="popup__full-size-image" 
    src="images/PlaceHolder.png" 
    alt="aqui va el titulo"/>
    <p className="popup__title-view-image"></p>
</div>
</div>
    )
}