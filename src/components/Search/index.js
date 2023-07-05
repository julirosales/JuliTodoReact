import React, { Fragment } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import {
  ContainerForm,
  Buscador,
  IconInInput,
  BuscadorBarra,
  NotResult,
} from "./styled.js";

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
      <ContainerForm onSubmit={onEnviar}>
        <Buscador>
          <BuscadorBarra
            type="text"
            placeholder="Buscador"
            required
            minLength="1"
            value={searchValue}
            onChange={onSearchValueChange}
          />
          <IconInInput>
            {!searchValue.length ? (
              <BiSearchAlt2  />
            ) : (
              <MdOutlineClear onClick={onCloseBusqueda} />
            )}
          </IconInInput>
        </Buscador>
        {notResult ? (
          <NotResult>
            No se encontraron resultados para: "{searchValue}"
          </NotResult>
        ) : (
          <></>
        )}
      </ContainerForm>
    </Fragment>
  );
}

export { Search };
