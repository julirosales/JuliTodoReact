import ReactDOM from "react-dom";
import "./Modal.css";
import { MdOutlineClear } from "react-icons/md";

function Modal({ children, onClickClose, button }) {
  //en reactDom Portal le podemos enviar todo lo que querramos y como segundo parametros que es el nodo de html donde vamos a mandar a nuestro hijo de nuestro modal
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-caja">
        <div className="modal-close">
          <MdOutlineClear
            className="iconClose"
            id="creadodesdemodal"
            onClick={onClickClose}
          />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
