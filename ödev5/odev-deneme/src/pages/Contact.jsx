import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>İletişim</h2>
      <p>
        Sorularınız, önerileriniz veya rezervasyon talepleriniz için bize
        aşağıdaki bilgilerden ulaşabilirsiniz.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>İletişim Bilgileri</h4>
          <p>
            <strong>Adres:</strong> İstanbul, Türkiye
            <br />
            <strong>Email:</strong> info@otelrezervasyon.com
            <br />
            <strong>Telefon:</strong> +90 (123) 456 78 90
          </p>
        </div>
        <div className="col-md-6">
          <h4>Ofis Ziyareti</h4>
          <p>
            Ofisimizi ziyaret etmek istiyorsanız lütfen önceden randevu alınız.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h4>İletişim Formu</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Adınız Soyadınız
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-posta Adresiniz
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mesajınız
            </label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
