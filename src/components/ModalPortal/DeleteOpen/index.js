import React from "react";
import { ButtonDeleteItem } from "../../ButtonDelete";

function DeleteOpen({ url, todoAEliminar, deleteTodo, onClickClose }) {
  return (
    <>
      <form>
        <p>Estas Seguro que deseas eliminar la tarea :</p>
        <p>{todoAEliminar.titulo}</p>
        <ButtonDeleteItem
          url={url}
          deleteTodo={deleteTodo}
          onClickClose={onClickClose}
          todoAEliminar={todoAEliminar}
        />
      </form>
    </>
  );
}

export { DeleteOpen };
