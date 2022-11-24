function ButtonDeleteItem({ url, todoAEliminar, deleteTodo, onClickClose }) {
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
      <button onClick={onDeleteItem}>ELIMINAR</button>
    </>
  );
}

export { ButtonDeleteItem };
