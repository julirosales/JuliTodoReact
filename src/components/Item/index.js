import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import "./Item.css";

function Items(props) {
  return (
    <React.Fragment>
      <li className="li">
        <BsCheck2All />
        <div className="divTarea">
          <h4 className="tituloLista" maxLength="40">
            {props.titulo}
          </h4>
          <p className="descripcionLista"> {props.descripcion}</p>
        </div>
        <div>
          <AiOutlineEdit />
          <CiTrash />
        </div>
      </li>
    </React.Fragment>
  );
}

export { Items };
