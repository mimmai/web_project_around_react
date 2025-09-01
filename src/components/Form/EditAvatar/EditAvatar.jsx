export default function EditAvatar() {
    return(
    <form className="popup__form form form__avatar" id="form-avatar">
    <input 
    className="form__input form__input-description form__input-avatar form__input-type-error" 
    name="avatar" 
    placeholder="Enlace a tu nueva foto de perfil" 
    id="input-image" 
    required type="url"/>
    <span className="form__error" id="input-image-error"></span>
    <button 
    type="submit" 
    className="form__button form__button-avatar form__button_disabled" 
    id="form-avatar-button"
    >Guardar
    </button>
  </form>
    );
};

//LINEA DEL TITULO DEBERIA BORRARSE PERO NO TOI SEGURA 
//<div className="form__title form__title-avatar">title</div>