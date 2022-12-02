import React, { useRef } from "react";
import { ButtonModal } from "../ButtonModal";
import "../FormItemOpen/Form.css"

function FormItem({
  cargarTodoManual,
  todoAEditar,
  todoAEliminar,
  url,
  onClickClose,
}) {

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

    fetch(url, {
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

    fetch(`${url}/${todoAEditar.number}`, {
      method: "PUT",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
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
      <form className="container-caja-todo">
        <p className="titulo-caja">
          {
            todoAEditar ? "Editar Tarea" : "Nueva Tarea"
          }
        </p>
        <input
          placeholder="Titulo"
          className="titulo"
          ref={tituloCapturado}
          defaultValue={
            todoAEditar ? todoAEditar.titulo : ""
          }
          disabled={todoAEliminar ? true : false}
          maxLength="40"
          required={true}
          label="Filled"
          variant="filled"
        />
        <textarea
          className="descripcion"
          placeholder="Descripcion"
          ref={descripcionCapturada}
          defaultValue={
            todoAEditar ? todoAEditar.descripcion : ""
          }
          disabled={todoAEliminar ? true : false}
        ></textarea>
        {/* <button
          className="button-add"
          type="submit"
          onClick={todoAEditar ? onUpdateItem : onCargarNewItem}
        >
          {todoAEditar ? "Editar" : "Agregar"}
        </button> */}
        <ButtonModal submit={"submit"}className={"button-add"}text={todoAEditar ? "Editar" : "Agregar"} onClick={todoAEditar ? onUpdateItem : onCargarNewItem}/>
      </form>
    </React.Fragment>
  );
}

export { FormItem };
