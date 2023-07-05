import React from "react";
import { ButtonModal } from "../ButtonModal";
import "../../Loading/index.css";
import { FormDeleteItem, Text } from "./styled";

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
      <FormDeleteItem>
        <Text>Estas Seguro que deseas eliminar la tarea :</Text>
        <Text>{todoAEliminar.titulo}</Text>
        <ButtonModal
          disabled={disabledButton}
          type={"submit"}
          onClick={onDeleteItem}
          text={"ELIMINAR"}
        ></ButtonModal>
      </FormDeleteItem>
    </>
  );
}

export { DeleteOpen };
