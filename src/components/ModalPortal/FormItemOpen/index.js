import React, { useEffect, useState } from "react";
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
  const inicialForm = {
    titulo: todoAEditar ? todoAEditar.titulo : "",
    descripcion: todoAEditar ? todoAEditar.descripcion : "",
  };

  const [formValidation, setFormValidation] = useState(inicialForm);
  const [errorsValidation, setErrorsValidation] = useState({});
  const [mostrarErrores, setMostrarErrors] = useState(false);

  const onChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValidation({
      ...formValidation,
      [name]: value,
    });
  };

  const validacionFormulario = (form) => {
    let errores = {};
    if (!form.titulo.trim()) {
      errores.titulo = "El campo Nombre es requerido";
    }
    if (!form.descripcion.trim()) {
      errores.descripcion = "El campo Descripcion es requerido";
    }
    if (Object.keys(errores).length > 0) {
      return errores;
    } else {
      return (errores = {});
    }
  };

  useEffect(() => {
    setErrorsValidation(validacionFormulario(formValidation));
  }, [formValidation]);

  const onCargarNewItem = (e) => {
    e.preventDefault();
    if (!Object.keys(errorsValidation).length > 0) {
      setMostrarErrors(false);
      const newItem = {
        ...formValidation,
        estado: true,
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
      /*  console.log("sin errores?", !Object.keys(errorsValidation).length > 0); */
    } else {
      /*  console.log("tiene errores?", Object.keys(errorsValidation).length > 0); */
      setMostrarErrors(true);
    }
  };

  const onUpdateItem = (e) => {
    e.preventDefault();
    if (!Object.keys(errorsValidation).length > 0) {
      const newItem = {
        ...todoAEditar,
        titulo: formValidation.titulo,
        descripcion: formValidation.descripcion,
      };

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
    } else {
      setMostrarErrors(true);
    }
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
          defaultValue={
            todoAEditar ? todoAEditar.titulo : formValidation.titulo
          }
          maxLength="40"
          required={true}
          label="Filled"
          variant="filled"
          name="titulo"
          onChange={onChangeForm}
        />
        {mostrarErrores && (
          <p className="errorTitulo">{errorsValidation.titulo}</p>
        )}
        <textarea
          className="descripcion"
          placeholder="Descripcion"
          defaultValue={
            todoAEditar ? todoAEditar.descripcion : formValidation.descripcion
          }
          name="descripcion"
          onChange={onChangeForm}
        ></textarea>
        {mostrarErrores && (
          <p className="errorTitulo">{errorsValidation.descripcion}</p>
        )}
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
