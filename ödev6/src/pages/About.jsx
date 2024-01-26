import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h2>Hakkımızda</h2>
      <p>
        Otel Rezervasyon, seyahat ve konaklama ihtiyaçlarınızı karşılamak üzere
        kurulmuş bir platformdur. Her türlü konaklama ihtiyacınıza uygun otel
        seçenekleri ve avantajlı fiyatlarla size hizmet vermek için buradayız.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h4>Misyonumuz</h4>
          <p>
            Misyonumuz, müşterilerimize en iyi konaklama deneyimini sunmak ve
            seyahat planlarını kolay ve keyifli hale getirmektir.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Vizyonumuz</h4>
          <p>
            Vizyonumuz, yenilikçi çözümlerle seyahat endüstrisinde öncü olmak ve
            müşterilerimize değer katacak hizmetler sunmaktır.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h4>Ekip</h4>
        <p>
          Otel Rezervasyon ekibi, seyahat tutkunu ve konaklama sektöründeki
          uzmanlardan oluşmaktadır. Size en iyi hizmeti sunmak için çalışan
          profesyonel bir ekipten oluşuyoruz.
        </p>
      </div>

      <div className="mt-5">
        <h4>İletişim</h4>
        <p>
          Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
        </p>
        <p>
          <strong>Email:</strong> info@otelrezervasyon.com
          <br />
          <strong>Telefon:</strong> +90 (123) 456 78 90
        </p>
      </div>
    </div>
  );
};

export default About;
