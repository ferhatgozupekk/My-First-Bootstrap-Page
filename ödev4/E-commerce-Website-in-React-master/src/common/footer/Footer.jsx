import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <h1>VogueVista</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>Hakkımızda</h2>
            <ul>
              <li>Geçmiş</li>
              <li>Mağazalarımız</li>
              <li>Önemlerimiz</li>
              <li>Şartlar ve Koşullar</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className="box">
            <h2>Müşteri Hizmetleri</h2>
            <ul>
              <li>Yardım Merkezi</li>
              <li>Nasıl alınır </li>
              <li> Siparişinizi takip edin</li>
              <li> Kurumsal & Toplu Satın Alma </li>
              <li>İadeler ve Geri ödemeler </li>
            </ul>
          </div>
          <div className="box">
            <h2>Bize Ulaşın</h2>
            <ul>
              <li>
                123 Elm Sokağı Gül Mahallesi 34567 Bahçeşehir İstanbul, Türkiye{" "}
              </li>
              <li>Email: voguevista.help@gmail.com</li>
              <li>Phone: +90 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
