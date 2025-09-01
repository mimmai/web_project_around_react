export default function NewCard() {
    return(
        <form className="popup__form form" id="form-place">
    <input 
    className="form__input form__input-name form__input-type-error" 
    name="name"  
    type="text" 
    placeholder="Título" 
    id="input-title" 
    required minLength="2" 
    maxLength="30" />
    <span className="form__error" id="input-title-error"></span>
    <input 
    className="form__input form__input-description form__input-type-error" 
    name="description" 
    placeholder="Enlace a la imagen" 
    id="input-image" 
    required type="url" />
    <span className="form__error" id="input-image-error"></span>
    <button 
    type="submit" 
    className="form__button form__button_disabled" 
    id="form-place-button">enviar</button>
    </form>
    )
}