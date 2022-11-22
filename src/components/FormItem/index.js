import React, { useRef } from "react";
import "./Form.css";

function FormItem({
  setOpenModalForm,
  cargarTodoManual,
  todoAEditar,
  setTodoAEditar,
}) {
  const onClickClose = () => {
    setOpenModalForm(false);
    setTodoAEditar(null);
 /*    setTodoAEliminar(null) */
  };
  const tituloCapturado = useRef();
  const descripcionCapturada = useRef();

  const onCargarNewItem = (e) => {
    e.preventDefault();
    const valueTitulo = tituloCapturado.current.value;
    const valueDescripcion = descripcionCapturada.current.value;

    const newItem = {
      titulo: valueTitulo,
      descripcion: valueDescripcion,
      estado: false,
      id: Date.now(),
    };

    fetch("https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        cargarTodoManual(data);
        onClickClose();
      })
      .catch((err) => console.log(err));
  };

  const onUpdateItem = (e) => {
    e.preventDefault();
    const valueTitulo = tituloCapturado.current.value;
    const valueDescripcion = descripcionCapturada.current.value;

    const newItem = {
      ...todoAEditar,
      titulo: valueTitulo,
      descripcion: valueDescripcion,
    };
    console.log("TODO A EDITAR: ", todoAEditar);

    fetch(
      `https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos/${todoAEditar.number}`,
      {
        method: "PUT",
        body: JSON.stringify(newItem),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        cargarTodoManual(data);
        console.log("DATA A GUARADR:", data);
        onClickClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <div className="container-caja-todo">
        <div className="container-close">
          <p className="titulo-caja">Nueva Tarea</p>
        </div>
        <input
          placeholder="Titulo"
          className="titulo"
          required
          ref={tituloCapturado}
          defaultValue={todoAEditar ? todoAEditar.titulo : ""}
        />
        <textarea
          className="descripcion"
          placeholder="Descripcion"
          required
          ref={descripcionCapturada}
          defaultValue={todoAEditar ? todoAEditar.descripcion : ""}
        ></textarea>
        <button
          className="button-add"
          type="submit"
          onClick={todoAEditar ? onUpdateItem : onCargarNewItem}
        >
          {todoAEditar ? "Editar" : "Agregar"}
        </button>
      </div>
    </React.Fragment>
  );
}

export { FormItem };
