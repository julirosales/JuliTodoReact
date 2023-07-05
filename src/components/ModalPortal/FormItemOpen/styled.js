import styled from "styled-components";

export const FormTodo = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 12px;
  border: 0px;
`;

export const BoxDescripcion = styled.textarea`
  width: 85%;
  padding: 10px;
  margin-bottom: 10px;
  height: 60px;
  resize: none;
  border-radius: 12px;
  border: 0px;
  margin-top: 10px;
  outline-color: rgb(215 181 87 / 88%);
`;

export const Titulo = styled.input`
  width: 85%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: 0px;
  margin-top: 10px;
  outline-color: rgb(215 181 87 / 88%);
`;
export const TituloCaja = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ErrorTitulo = styled.p`
  color: red;
`;
