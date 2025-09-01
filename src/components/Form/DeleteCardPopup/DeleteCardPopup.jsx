export default function DeleteCardConfirmation() {
    return(
        <form class="popup__form form form__delete-confirm" id="form-delete-confirm">
    <div class="form__title form__title-delete-confirm">¿Estás seguro?</div>
    <button 
    type="submit" 
    class="form__button" 
    id="form-avatar-button">Sí</button>
    </form>
    )
}