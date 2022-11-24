import React from "react";
import { ButtonDeleteItem } from "../ButtonDelete";

function ModalDeleteOpen({ url, todoAEliminar, deleteTodo, onClickClose }) {
  return (
    <>
      <form>
        <p>Estas Seguro que deseas eliminar la tarea :</p>
        <p>{todoAEliminar.titulo}</p>
        <ButtonDeleteItem
          url={url}
          deleteTodo={deleteTodo}
          onClickClose={onClickClose}
        />
      </form>
    </>
  );
}

export { ModalDeleteOpen };
