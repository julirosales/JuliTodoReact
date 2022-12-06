import React, { useRef } from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineEdit/* , AiOutlineLoading */ } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";

import "../Item/index.css";

function Items({
  todo,
  setTodoAEditar,
  setTodoAEliminar,
  setOpenModalEliminar,
  cargarTodoManual,
  url,
  cargandoTilde,setCargandoTilde

}) {
  const onClickDelete = () => {
    setOpenModalEliminar((prevState) => !prevState);
  };
  const tildeCapturado = useRef();

  const onClickTareaFinalizada = (todo) => {
    const newItem = {
      ...todo,
      estado: !todo.estado,
    };

    fetch(`${url}/${todo.number}`, {
      method: "PUT",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(setCargandoTilde(true))
      .then((response) => response.json())
      .then((data) => {
        setCargandoTilde(false)
        cargarTodoManual(data);
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <div className="container-tarea">
        <div
          ref={tildeCapturado}
          id={todo.id}
          onClick={() => {
            onClickTareaFinalizada(todo)
          }}
          className={todo.estado ? "tareaNoFinalizada" : "tareaFinalizada"}
        >
          {cargandoTilde ? <div className="cargandoCheck"></div> : <BsCheck2All /> }
          </div>
        <div className={todo.estado ? "lista"  : "listaTachada" }>
          <h4 className="tituloLista" maxLength="40">
            {todo.titulo}
          </h4>
          <p className= "descripcionLista"> {todo.descripcion}</p>
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
