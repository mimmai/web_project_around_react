export default function Popup(props) {
    
    const { onClose, title, children, } = props;
    return (
    /*    <div className="popup" id="popup-profile">
    <div className="popup__container popup__container-profile">
    <div className="popup__close-button">
    <img 
    src="./images/Close_Icon.png" 
    alt="Equis para cerrar ventana emergente del formulario" 
    onClick={() =>  { 
    onClose(); }} />
    </div>
    <div className="popup__form form" id="form-profile">
    <h3 className="form__title">{title}</h3>
    {children}
    </div>
</div>
</div>*/
<div className="popup">
    <div className={`popup__content ${!title ? 'popup__content_content_image' : ""}`}>
        <button
        aria-label='close modal'
        className="popup__close"
        type="button"
        onClick={onClose}
        />
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
    </div>
    </div>
    )
}