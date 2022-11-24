import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";

import "../Item/index.css";

function Items({
  todo,
  setTodoAEditar,
  setTodoAEliminar,
  setOpenModalEliminar,
}) {
  const onClickDelete = () => {
    setOpenModalEliminar((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className="container-tarea">
        <BsCheck2All className="listNoFinalizada" />
        <div className="divTarea">
          <h4 className="tituloLista" maxLength="40">
            {todo.titulo}
          </h4>
          <p className="descripcionLista"> {todo.descripcion}</p>
        </div>
        <div>
          <AiOutlineEdit
            className="btnEdit"
            onClick={() => setTodoAEditar(todo)}
          />
          <CiTrash
            className="btnBorrar"
            onClick={() => {
              setTodoAEliminar(todo);
              onClickDelete();
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export { Items };
