import { useState } from "react"

export default function NewCard({ onClose, onAddPlaceSubmit }) {
    const [titleValue, setTitleValue] = useState('');
    const [linkValue, setLinkValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //ESTO PASA LOS DATOS AL COMPONENTE PADRE APP
        onAddPlaceSubmit({
        name: titleValue,
        link: linkValue
        });
        setLinkValue('');
        setTitleValue('');
        onClose();
    }
    return (
    
<form className="popup__form form" 
id="form-place"
onSubmit={handleSubmit}>
    <h2 className="form__title"
    >Nuevo Lugar</h2>
    <input className="form__input form__input-name form__input-type-error" 
    name="name"  
    type="text"
    placeholder="Título" 
    id="input-title"
    value={titleValue}
    onChange={(e) => setTitleValue(e.target.value)}
    required 
    minLength="2" 
    maxLength="30"/>
    <span className="form__error"
    id="input-title-error"></span>

    <input className="form__input form__input-description form__input-type-error" 
    name="description" 
    placeholder="Enlace a la imagen" 
    id="input-image" 
    value={linkValue}
    onChange={(e) => setLinkValue(e.target.value)}
    required 
    type="url"/>
    <span 
    className="form__error" 
    id="input-image-error"></span>
    <button 
    type="submit"
    className="form__button form__button_disabled" 
    id="form-place-button">enviar</button>
  </form>
 )
}