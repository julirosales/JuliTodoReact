import styled from "styled-components";
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Buscador = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BuscadorBarra = styled.input`
  margin-top: 30px;
  font-size: 21px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #00000038;
`;

export const IconInInput = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 25px;
  height: 25px;
  top: 30px;
  right: 30px;
  border-radius: 30px;
  border: 2px solid #00000038;
  align-items: center;
`;



export const NotResult = styled.p`
  display: flex;
  justify-content: center;
`;
