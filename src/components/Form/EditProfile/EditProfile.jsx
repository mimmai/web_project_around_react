import { useState, useContext } from "react";
import CurrentUserContext from "../../../Contexts/CurrentUserContext";

export default function EditProfile() {
        //OBTIENE OBJETO CURRENTuSER
        const userContext = useContext(CurrentUserContext);
        const { currentUser, handleUpdateUser } = userContext;

        //AGREGA VARIABLE DE ESTADO PARA NAME Y DESCRIPTION
        const [name, setName] = useState(currentUser.name)
        const [description, setDescription] = useState(currentUser.about);
    
        //VERIFICACION (borrar despues)
        if (!currentUser || !currentUser.name){
        return <div>Cargando...</div>;
        }
    
        //ACTUALIZA EL NOMBRE AL CAMBIO DE ENTRADA
        const hanldeNameChange = (event) => {
            setName(event.target.value);
        }
        //ACTUALIZA LA DESCRIPTION
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        }
        //EVITA COMPORTAMIENTO PREDET.
        const handleSubmit = (event) => {
            event.preventDefault();
            handleUpdateUser({ name, about: description });
        }

    

return(
    <form className="popup__form form" 
    id="form-profile"
    noValidate
    onSubmit={handleSubmit}>
    <h2 className="form__title"
    >Editar perfil</h2>
    <input 
    className="form__input form__input-name form__input-type-error" 
    name="name"  
    type="text" 
    placeholder="Nombre" 
    id="input-name" 
    required 
    minLength="2" 
    maxLength="40"
    value={name}
    onChange={hanldeNameChange}
    />
    <span className="form__error" id="input-name-error"></span>
    <input 
    className="form__input form__input-description form__input-type-error" 
    name="description" 
    placeholder="Acerca de mí" 
    id="input-description" 
    required 
    minLength="2" 
    maxLength="200"
    value={description}
    onChange={handleDescriptionChange}
    />
    <span className="form__error" 
    id="input-description-error"></span>
    <input 
    type="submit" 
    className="form__button" 
    id="input-submit"/>
    <span className="form__error" id="input-submit-error"></span>
    </form>
);
};


//form__button_disabled
