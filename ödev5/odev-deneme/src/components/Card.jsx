import React, { useEffect, useState } from "react";

const Card = () => {
  const [cardsData, setCardsData] = useState([]);
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/DataBase/data.json");
        const data = await response.json();
        setCardsData(data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToFavorites = (card) => {
    // favorilere ekleme
    setFavoriteCards((prevFavorites) => [...prevFavorites, card]);

    //  localStorage da favori kart saklama
    localStorage.setItem(
      "favoriteCards",
      JSON.stringify([...favoriteCards, card])
    );
  };

  return (
    <div className="row">
      {cardsData.map((card) => (
        <div key={card.id} className="col-md-4 mb-4 mt-4">
          <div className="card d-flex flex-column align-items-center">
            <img
              src={card.img}
              className="card-img-top"
              alt=""
              style={{ width: "100%", height: "250px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">
                <b>Günlük Ücret:</b> {card.price}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToFavorites(card)}
              >
                Favorilere Ekle
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
