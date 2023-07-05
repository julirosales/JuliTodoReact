import styled, { keyframes } from "styled-components";

export const ContainerTarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-radius: 14px;
  border-bottom: 2px solid rgba(61, 58, 58, 0.827);
`;

export const ContainerBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TituloLista = styled.div`
  text-decoration: underline;
  padding: 15px;
  text-decoration-color: darkgreen;
  word-break: break-all;
  maxlength: 40;
`;

export const DescriptionLista = styled.p`
  word-break: break-all;
  text-align: center;
`;

export const CointenerListAlter = styled.div`
  word-break: break-all;
  text-align: center;
  ${(props) =>
    !props.estado
      ? `text-decoration: line-through;
    text-decoration-color: green;
    color: rgba(61, 58, 58, 0.827)`
      : null}
`;

export const ButtonGeneral = styled.button`
  box-sizing: content-box;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 30px;
  background: none;
  border: none;
`;

export const Tarea = styled.div`
  display: flex;
  cursor: pointer;
  width: 35px;
  height: 35px;
  font-size: 30px;
  ${(props) => (!props.estado ? `color: rgb(79, 241, 79)` : null)}
`;

const rotate = keyframes`
0% {
    transform: scale(1) rotate(360deg);
  }
  50% {
    transform: scale(0.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }`;

export const CargandoCheck = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: 5px solid rgb(204, 221, 231);
  border-top-color: rgb(79, 241, 79);
  border-bottom-color: rgb(18, 169, 127);
  border-radius: 50%;
  animation: ${rotate} 4s linear infinite;
`;
