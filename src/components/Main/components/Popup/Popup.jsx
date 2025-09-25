export default function Popup(props) {
    
    const { onClose, title, children, isOpen } = props;
    return (
   
<div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
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