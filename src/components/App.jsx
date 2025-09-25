import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { useEffect, useState } from 'react'
import api from '../Utils/Api'
import CurrentUserContext from '../Contexts/CurrentUserContext'


function App(){
  const [currentUser, setCurrentUser] = useState([]);
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    (async () => {
      await  api.getUserInfo().then((data) =>{
        setCurrentUser(data);
      });
    }) ();
  }, []);

  //ESTO CONTROLA LOS DATOS DEL PERFIL
  const handleUpdateUser = data => {
    (async () => {
      await api.editUser(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = data => {
    (async () => {
      await api.profileImage(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    })();
  }

    const handleOpenPopup = () => setPopup(true);
    const handleClosePopup = () => setPopup(false);

    //FUNCTION DE LA API
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
        .then(data => { 
         // console.lo('Datos de la API:', data);
        //  console.lo('primera tarjeta:', JSON.stringify(data[0], null, 2))
        // console.lo('¿tienes likes la primera tarjeta', data[0].likes)
         // console.lo('¿tiene _id la primera tarjeta', data[0]._id)
          setCards(data);
        })
        .catch(error => console.error(error))
    }, [])
    async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    //const isLiked = currentUser && card.likes ?
    //card.likes.some(user => user._id === currentUser._id) : false
    const isLiked = card.isLiked;

    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}
   //FUNCTION PARA ELIMINAR TARJETAS
    async function handleCardDelete(card) {
        try {
            //ESTO ENVIA SOLICITUD A LA API PARA ELIMINAR CARDS
            await api.deleteCard(card._id)
        //ESTO ACTUALIZA EL ESTADO LOCAL REMOVIENDO LA TARJETA
        setCards((prevCards) => prevCards.filter((currentCard) => currentCard._id !== card._id));
        } catch (error) {
            console.error(error);
        }
        
    }
    //FUNCTION PARA GUARDAR LOS DTAOS EN LA API

    const handleAddPlaceSubmit = async (cardData) => {
      try{
        const newCard = await api.createCard(cardData);
        setCards([newCard, ...cards])
        handleClosePopup();
      } catch (error) {
        console.error(error)
      }
    }

  


  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}>
    <div className="page">
    <Header />
    <Main 
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onAddPlaceSubmit={handleAddPlaceSubmit}
        />
    <Footer />
</div>
    </CurrentUserContext.Provider>
  )
}

export default App
