import React, { useEffect, useState } from "react";
import { Search } from "../Search";
import { CreateButton } from "../CreateButton";
import Items from "../Item";
import { FormItem } from "../ModalPortal/FormItemOpen";
import { ListItems } from "../ListItems";
import { Modal } from "../ModalPortal";
import { DeleteOpen } from "../ModalPortal/DeleteOpen";
import { ContadorTareas, Titulo } from "./styled.js";
import "../Loading/index.css";
import { connect } from "react-redux";
import { totalTareasReaizadas } from "../../redux/actios";

function App({ count, totalTareasReaizadas }) {
  const [loading, setLoading] = useState(true);
  const [arrayTodo, setArrayTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [todoAEditar, setTodoAEditar] = useState(null);
  const [todoAEliminar, setTodoAEliminar] = useState(null);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [openModalEliminar, setOpenModalEliminar] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  /*  const [editTituloValue, setEditTituloValue] = useState(null); */
  const searchMode = filteredTodos.length > 0 || searchValue.length > 0;
  const todos = searchMode ? filteredTodos : arrayTodo;
  const url = "https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos";

  useEffect(() => {
    if (todoAEditar) {
      setOpenModalForm(true);
    }
  }, [todoAEditar]);

  useEffect(() => {
    if (todoAEliminar) {
      setOpenModalEliminar(true);
    }
  }, [todoAEliminar]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setArrayTodo(data);
        })
        .catch((error) => console.log(error));
    }, 1300);
  }, []);
  const prueba = arrayTodo.filter((todo) => todo.estado === false);
  useEffect(() => {
    totalTareasReaizadas(prueba.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayTodo]);

  //inicio la busqueda en el input de acuerdo a lo que escriba el usuario cambia el array y deja las que coinciden con el valor de search
  useEffect(() => {
    if (searchValue.length >= 1) {
      const searchTodos = arrayTodo.filter((todo) => {
        //tranformamos en minuscula la busqueda de
        const todoTituloText = todo.titulo.toLowerCase();
        const todoDescripcionText = todo.descripcion.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return (
          todoTituloText.includes(searchText) ||
          todoDescripcionText.includes(searchText)
        );
      });
      setFilteredTodos(searchTodos);
    } else {
      setFilteredTodos([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrayTodo, searchValue]);

  const cargarTodoManual = (todo) => {
    const todoIndex = arrayTodo.map((t) => t.id).indexOf(todo.id);
    if (todoIndex > -1) {
      const arrTemp = [...arrayTodo];
      arrTemp.splice(todoIndex, 1, todo);
      /*       console.log("ARRAY TEMP EN EDICOON", arrTemp); */
      setArrayTodo(arrTemp);
    } else {
      const arrTemp = [...arrayTodo];
      arrTemp.splice(arrayTodo.length, 0, todo);
      setArrayTodo(arrTemp);
    }
  };

  const deleteTodo = (todo) => {
    const todoIndex = arrayTodo.map((t) => t.id).indexOf(todo.id);
    if (todoIndex > -1) {
      const arrTemp = [...arrayTodo];
      arrTemp.splice(todoIndex, 1);
      /*      console.log("ARRAY TEMP EN borrar", arrTemp); */
      setArrayTodo(arrTemp);
    }
  };

  const onClickClose = () => {
    setOpenModalForm(false);
    setTodoAEditar(null);
    setTodoAEliminar(null);
    setOpenModalEliminar(false);
  };

  return (
    <React.Fragment>
      <Titulo>Todo List React</Titulo>
      <ContadorTareas>
        tareas realizadas {count} de {arrayTodo.length}
      </ContadorTareas>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        notResult={filteredTodos.length === 0 && searchValue.length}
      />
      {/* agrego en el boton mas el estado del modal para que cuando se haga click me cambie el estado a true y me habra el modal*/}
      <CreateButton setOpenModalForm={setOpenModalForm} />
      <ListItems loading={loading}>
        {/*  {loading && <div className="cargando"></div>} */}
        {todos.map((todo) => {
          return (
            <Items
              key={todo.id}
              todo={todo}
              setTodoAEditar={setTodoAEditar}
              setTodoAEliminar={setTodoAEliminar}
              setOpenModalEliminar={setOpenModalEliminar}
              url={url}
              cargarTodoManual={cargarTodoManual}
            />
          );
        })}
      </ListItems>
      {openModalForm && (
        <Modal onClickClose={() => onClickClose()}>
          <FormItem
            url={url}
            cargarTodoManual={cargarTodoManual}
            todoAEditar={todoAEditar}
            todoAEliminar={todoAEliminar}
            disabledButton={disabledButton}
            setDisabledButton={setDisabledButton}
            onClickClose={() => onClickClose()}
          />
        </Modal>
      )}
      {openModalEliminar && (
        <Modal onClickClose={() => onClickClose()}>
          <DeleteOpen
            loading={loading}
            setLoading={setLoading}
            url={url}
            todoAEliminar={todoAEliminar}
            deleteTodo={deleteTodo}
            disabledButton={disabledButton}
            setDisabledButton={setDisabledButton}
            onClickClose={onClickClose}
          ></DeleteOpen>
        </Modal>
      )}
    </React.Fragment>
  );
}

const mapStateeToProps = (state) => {
  /* console.log("estadocreadoconRedux", state.toDos.countVerde); */
  return {
    count: state.toDos.countVerde,
  };
};
const mapDispatchToProps = {
  totalTareasReaizadas,
};
export default connect(mapStateeToProps, mapDispatchToProps)(App);
