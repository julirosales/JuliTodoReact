import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import "../Item/index.css";

function Items(props) {
  return (
    <React.Fragment>
      <div className="container-tarea">
        <BsCheck2All className="listNoFinalizada"/>
        <div className="divTarea">
          <h4 className="tituloLista" maxLength="40">
            {props.titulo}
          </h4>
          <p className="descripcionLista"> {props.descripcion}</p>
        </div>
        <div>
          <AiOutlineEdit className="btnEdit"/>
          <CiTrash className="btnBorrar" />
        </div>
      </div>
    </React.Fragment>
  );
}

export { Items };
