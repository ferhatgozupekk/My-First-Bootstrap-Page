import React, { useState, useEffect } from "react";

const Favs = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const storedFavoriteCards = localStorage.getItem("favoriteCards");
    if (storedFavoriteCards) {
      setFavoriteCards(JSON.parse(storedFavoriteCards));
    }
  }, []);

  const removeFromFavorites = (id) => {
    // Favorilerden çıkartılacak kartın ID'sini al
    const updatedFavorites = favoriteCards.filter((card) => card.id !== id);

    // Local storage ve state'i güncelle
    localStorage.setItem("favoriteCards", JSON.stringify(updatedFavorites));
    setFavoriteCards(updatedFavorites);
  };

  return (
    <div className="row">
      {favoriteCards.map((favoriteCard) => (
        <div key={favoriteCard.id} className="col-md-4 mb-4">
          <div className="card d-flex flex-column align-items-center">
            <img
              src={favoriteCard.img}
              className="card-img-top"
              alt=""
              style={{ width: "100%", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{favoriteCard.name}</h5>
              <p className="card-text">
                <b>Günlük Ücret:</b> {favoriteCard.price}
              </p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeFromFavorites(favoriteCard.id)}
              >
                Favorilerden Çıkart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favs;
