import React, { useRef } from "react";
import { ButtonModal } from "../ButtonModal";
import "../FormItemOpen/Form.css";

function FormItem({
  cargarTodoManual,
  todoAEditar,
  url,
  onClickClose,
  setDisabledButton,
  disabledButton,
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
    setDisabledButton(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setDisabledButton(false);
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
    setDisabledButton(true);
    fetch(`${url}/${todoAEditar.number}`, {
      method: "PUT",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setDisabledButton(false);
        cargarTodoManual(data);

        onClickClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <form className="container-caja-todo">
        <p className="titulo-caja">
          {todoAEditar ? "Editar Tarea" : "Nueva Tarea"}
        </p>
        <input
          placeholder="Titulo"
          className="titulo"
          ref={tituloCapturado}
          defaultValue={todoAEditar ? todoAEditar.titulo : ""}
          maxLength="40"
          required={true}
          label="Filled"
          variant="filled"
        />
        <textarea
          className="descripcion"
          placeholder="Descripcion"
          ref={descripcionCapturada}
          defaultValue={todoAEditar ? todoAEditar.descripcion : ""}
        ></textarea>
        <ButtonModal
          disabled={disabledButton}
          submit={"submit"}
          className={"button-add"}
          text={todoAEditar ? "Editar" : "Agregar"}
          onClick={todoAEditar ? onUpdateItem : onCargarNewItem}
        />
      </form>
    </React.Fragment>
  );
}

export { FormItem };
