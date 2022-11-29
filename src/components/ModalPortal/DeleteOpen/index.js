import React from "react";
import { ButtonDeleteItem } from "../../ButtonDelete";

function DeleteOpen({ url, todoAEliminar, deleteTodo, onClickClose }) {
  const onDeleteItem = (e) => {
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
  return (
    <>
      <form>
        <p>Estas Seguro que deseas eliminar la tarea :</p>
        <p>{todoAEliminar.titulo}</p>
        <ButtonDeleteItem onclick={onDeleteItem} text={"JULIETA"} />
      </form>
    </>
  );
}

export { DeleteOpen };
