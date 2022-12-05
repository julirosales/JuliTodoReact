import React from "react";
import { ButtonModal } from "../ButtonModal";
import "./index.css";
import "../../Loading/index.css";

function DeleteOpen({
  url,
  todoAEliminar,
  deleteTodo,
  onClickClose,
  disabledButton,
  setDisabledButton,
}) {
  const onDeleteItem = (e) => {
    e.preventDefault();
    setDisabledButton(true);
    fetch(`${url}/${todoAEliminar.number}`, {
      method: "DELETE",
      body: JSON.stringify(todoAEliminar),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setDisabledButton(false);
        deleteTodo(data);
        onClickClose();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form className="form-delete-item">
        <p>Estas Seguro que deseas eliminar la tarea :</p>
        <p className="text-delete">{todoAEliminar.titulo}</p>

        <ButtonModal
          disabled={disabledButton}
          type={"submit"}
          onClick={onDeleteItem}
          text={"ELIMINAR"}
          className={"button-delete"}
        ></ButtonModal>
      </form>
    </>
  );
}

export { DeleteOpen };
