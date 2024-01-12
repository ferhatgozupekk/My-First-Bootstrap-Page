import React from "react";
import "./style.css";

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck-fast"></i>,
      title: "Dünya çapında Teslimat",
      decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
    },
    {
      cover: <i class="fa-solid fa-id-card"></i>,
      title: "Safe Payment",
      decs: "Güvenli Ödeme",
    },
    {
      cover: <i class="fa-solid fa-shield"></i>,
      title: "Güvenle alışveriş yapın ",
      decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
    },
    {
      cover: <i class="fa-solid fa-headset"></i>,
      title: "24/7 Destek ",
      decs: "100 milyondan fazla ürün yelpazemizde rekabetçi fiyatlar sunuyoruz.",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {data.map((val, index) => {
            return (
              <div className="product" key={index}>
                <div className="img icon-circle">
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
