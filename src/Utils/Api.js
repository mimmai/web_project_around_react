    class Api {
  constructor({ baseURL, headers }){
    this.baseURL = baseURL;
    this.headers = headers;
  }

  getUserInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      headers: this.headers,
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  getInitialCards() {
    return fetch(`${this.baseURL}/cards`, {
      headers: this.headers,
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  editUser(data) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  createCard(data) {
      return fetch(`${this.baseURL}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    }) .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    })
  }

  deleteCard(cardID) {
      return fetch(`${this.baseURL}/cards/${cardID}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
}

likeCard(cardID) {
    return fetch(`${this.baseURL}/cards/${cardID}/likes`, {
    method: "PUT",
    headers: this.headers,
    }).then((res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
    });
}

dislikeCard(cardID) {
    return fetch(`${this.baseURL}/cards/${cardID}/likes`, {
    method: "DELETE",
    headers: this.headers,
    }).then((res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
    });
}

profileImage(image) {
    return fetch(`${this.baseURL}/users/me/avatar`, {
    method: "PATCH",
    headers: this.headers,
    body: JSON.stringify(image)
    }).then((res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
    });
}


}

 const api = new Api({
    baseURL: "https://around-api.es.tripleten-services.com/v1/",
    headers: {
    authorization: "b7ca8585-8917-4aa6-8098-84ae835405ca",
    "Content-Type": "application/json"
    }
});

export default api;