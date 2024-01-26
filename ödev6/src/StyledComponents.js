import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 10px;
  padding: 15px;
  border: 1px solid #3498db;
  background-color: #ecf0f1;
`;

export const StyledH2 = styled.h2`
  color: #e74c3c;
  font-size: 24px;
  margin-bottom: 15px;
`;

export const StyledP = styled.p`
  color: #2ecc71; // yeşil
  font-size: 16px;
  line-height: 1.5;
`;

export const StyledH4 = styled.h4`
  color: #f39c12; // Turuncu renk
  font-size: 18px;
`;

export const StyledStrong = styled.strong`
  font-weight: bold;
  color: #9b59b6; // Mor renk
`;

export const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #3498db; //mavi
`;

export const StyledButton = styled.button`
  background-color: #3498db; /* Mavi renk */
  color: #fff; /* Beyaz renk */
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2ecc71; /* Hafif tonlu mavi renk hover durumunda */
  }

  &:focus {
    outline: none;
  }
`;
