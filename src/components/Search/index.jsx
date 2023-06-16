import React, { Fragment } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import "./Search.css";

function Search({ searchValue, setSearchValue, notResult }) {
  /*   //buscadorrrr searchValu
  if (!searchValue.length >= 1) {
    setArrayTodo =  ;
  } else {
    searchTodos = item.filter((todo) => {
      const todoText = todo.titulo.toLowerCase(); //tranformo a minuscula
      const searchText = searchValue.toLowerCase(); //tranformo a minuscula
      return todoText.includes(searchText); //le pregunto si incluye la palabra escrita
    });
  } */
  //usamos change para que cuando se escribe se muestre abajo
  const onSearchValueChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const onCloseBusqueda = () => {
    setSearchValue("");
  };
  const onEnviar = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <form id="containerForm" onSubmit={onEnviar}>
        <div id="buscador">
          <input
            type="text"
            className="buscadorBarra"
            placeholder="Buscador"
            /*  name="buscador" */
            required
            minLength="1"
            value={searchValue}
            onChange={onSearchValueChange}
          />
          {!searchValue.length ? (
            <BiSearchAlt2 className="iconBuscar" id="iconBuscar" />
          ) : (
            <MdOutlineClear
              className="iconBorrar"
              id="iconBorrar"
              onClick={onCloseBusqueda}
            />
          )}
        </div>
        {notResult ? (
          <p id="notResult">
            No se encontraron resultados para: "{searchValue}"
          </p>
        ) : (
          <></>
        )}
      </form>
    </Fragment>
  );
}

export { Search };
