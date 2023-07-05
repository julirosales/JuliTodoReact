import { styled } from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 51%);
`;
export const ModalCaja = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: rgb(215 181 87 / 88%);
  align-items: center;
  padding: 30px;
  border-radius: 12px;
  border: 0px;
`;
export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
