import ReactDOM from "react-dom";
import { MdOutlineClear } from "react-icons/md";
import { ModalCaja,ModalClose,ModalContainer } from "./styled";

function Modal({ children, onClickClose }) {
  //en reactDom Portal le podemos enviar todo lo que querramos y como segundo parametros que es el nodo de html donde vamos a mandar a nuestro hijo de nuestro modal
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalCaja>
        <ModalClose>
          <MdOutlineClear
            className="iconClose"
            id="creadodesdemodal"
            onClick={onClickClose}
          />
        </ModalClose>
        {children}
      </ModalCaja>
    </ModalContainer>,
    document.getElementById("modal")
  );
}

export { Modal };
