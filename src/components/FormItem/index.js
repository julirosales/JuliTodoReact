import React, { useRef } from "react";
import "./Form.css";

function FormItem({
  setOpenModalForm,
  cargarTodoManual,
  todoAEditar,
  setTodoAEditar,
  setTodoAEliminar,
  todoAEliminar,
  url,
  onClickClose,
}) {
  /*   const [validationTitulo, setValidationTitulo] = useState(""); */

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

  /* const onDeleteItem = (e) => {
    e.preventDefault();
    fetch(`${url}/${todoAEliminar.number}`, {
      method: "DELETE",
      body: JSON.stringify(todoAEliminar),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        deleteTodo(data);
        onClickClose();
      })
      .catch((err) => console.log(err));
  };
 */
  /* const onChangeValidation = (e) => {
    setValidationTitulo(e.target.value);
    console.log("entreeee", validationTitulo);
    if (validationTitulo.length > 10) {
      console.log("mayor a 10?");
    } else {
      console.log("menor a 1o");

    }
  }; */
  return (
    <React.Fragment>
      <form className="container-caja-todo">
        <p className="titulo-caja">
          {
            /* todoAEliminar
            ? "¿Estas Seguro que deseas eliminar esta tarea?" */
            todoAEditar ? "Editar Tarea" : "Nueva Tarea"
          }
        </p>
        <input
          placeholder="Titulo"
          className="titulo"
          ref={tituloCapturado}
          defaultValue={
            /*  todoAEliminar
              ? todoAEliminar.titulo */
            todoAEditar ? todoAEditar.titulo : ""
          }
          disabled={todoAEliminar ? true : false}
          maxLength="40"
          required={true}
          /*    onChange={(e) => onChangeValidation(e)} */
          label="Filled"
          variant="filled"
        />
        <textarea
          className="descripcion"
          placeholder="Descripcion"
          ref={descripcionCapturada}
          defaultValue={
            /* todoAEliminar
              ? todoAEliminar.descripcion */
            todoAEditar ? todoAEditar.descripcion : ""
          }
          disabled={todoAEliminar ? true : false}
        ></textarea>
        <button
          className="button-add"
          type="submit"
          onClick={todoAEditar ? onUpdateItem : onCargarNewItem}
        >
          {todoAEditar ? "Editar" : "Agregar"}
        </button>
      </form>
    </React.Fragment>
  );
}

export { FormItem };
