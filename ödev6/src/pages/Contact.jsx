import React from "react";
import {
  StyledDiv,
  StyledH2,
  StyledH4,
  StyledLabel,
  StyledP,
  StyledStrong,
} from "../StyledComponents";

const Contact = () => {
  return (
    <StyledDiv className="mt-5">
      <StyledH2>İletişim</StyledH2>
      <StyledP>
        Sorularınız, önerileriniz veya rezervasyon talepleriniz için bize
        aşağıdaki bilgilerden ulaşabilirsiniz.
      </StyledP>

      <StyledDiv className="row mt-4">
        <StyledDiv className="col-md-6">
          <StyledH4>İletişim Bilgileri</StyledH4>
          <StyledP>
            <StyledStrong>Adres:</StyledStrong> İstanbul, Türkiye
            <br />
            <StyledStrong>Email:</StyledStrong> info@otelrezervasyon.com
            <br />
            <StyledStrong>Telefon:</StyledStrong> +90 (123) 456 78 90
          </StyledP>
        </StyledDiv>
        <StyledDiv className="col-md-6">
          <StyledH4>Ofis Ziyareti</StyledH4>
          <StyledP>
            Ofisimizi ziyaret etmek istiyorsanız lütfen önceden randevu alınız.
          </StyledP>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv className="mt-5">
        <StyledH4>İletişim Formu</StyledH4>
        <form>
          <StyledDiv className="mb-3">
            <StyledLabel htmlFor="name" className="form-label">
              Adınız Soyadınız
            </StyledLabel>
            <input type="text" className="form-control" id="name" />
          </StyledDiv>
          <StyledDiv className="mb-3">
            <StyledLabel htmlFor="email" className="form-label">
              E-posta Adresiniz
            </StyledLabel>
            <input type="email" className="form-control" id="email" />
          </StyledDiv>
          <StyledDiv className="mb-3">
            <StyledLabel htmlFor="message" className="form-label">
              Mesajınız
            </StyledLabel>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </StyledDiv>
          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </StyledDiv>
    </StyledDiv>
  );
};

export default Contact;
