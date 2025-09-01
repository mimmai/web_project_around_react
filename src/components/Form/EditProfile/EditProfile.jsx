export default function EditProfile() {
return(
    <form className="popup__form form" id="form-profile">
    <input 
    className="form__input form__input-name form__input-type-error" 
    name="name"  
    type="text" 
    placeholder="Nombre" 
    id="input-name" 
    required minLength="2" 
    maxLength="40"/>
    <span className="form__error" id="input-name-error"></span>
    <input 
    className="form__input form__input-description form__input-type-error" 
    name="description" 
    placeholder="Acerca de mí" 
    id="input-description" 
    required minLength="2" 
    maxLength="200"/>
    <span className="form__error" id="input-description-error"></span>
    <input 
    type="submit" 
    className="form__button form__button_disabled" 
    id="input-submit"/>
    <span className="form__error" id="input-submit-error"></span>
    </form>
);
};

//<h2 className="form__title">Editar Perfil</h2>