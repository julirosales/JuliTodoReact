import React, { useEffect, useState } from "react";
import "./App.css";
import { Search } from "../Search";
import { CreateButton } from "../CreateButton";
import { Items } from "../Item";
import { FormItem } from "../FormItem";
import { ListItems } from "../ListItems";
import "../Loading/index.css";
import { Modal } from "../ModalPortal";

function App() {
  const [loading, setLoading] = useState(true);
  const [arrayTodo, setArrayTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [todoAEditar, setTodoAEditar] = useState(null);
  const [todoAEliminar, setTodoAEliminar] = useState(null);
  const [openModalForm, setOpenModalForm] = useState(false);
  const searchMode = filteredTodos.length > 0 || searchValue.length > 0;
  const todos = searchMode ? filteredTodos : arrayTodo;
  const url = "https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos";

  useEffect(() => {
    console.log("todoAEditar", todoAEditar);
    if (todoAEditar) {
      setOpenModalForm(true);
    }
  }, [todoAEditar]);
  useEffect(() => {
    console.log("todoAEliminar", todoAEliminar);
    if (todoAEliminar) {
      setOpenModalForm(true);
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
      console.log("ARRAY TEMP EN EDICOON", arrTemp);
      setArrayTodo(arrTemp);
    } else {
      const arrTemp = [...arrayTodo];
      arrTemp.splice(arrayTodo.length, 0, todo);
      setArrayTodo(arrTemp);
    }
  };
  const onClickClose = () => {
    setOpenModalForm(false);
    setTodoAEditar(null);
    setTodoAEliminar(null);
  };
  return (
    <React.Fragment>
      <h1 className="App-header">Todo List React</h1>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        notResult={filteredTodos.length === 0 && searchValue.length}
      />
      {/* agrego en el boton mas el estado del modal para que cuando se haga click me cambie el estado a true y me habra el modal*/}
      <CreateButton setOpenModalForm={setOpenModalForm} />
      <ListItems>
        {loading && <div className="cargando"></div>}
        {todos.map((todo) => {
          return (
            <Items
              key={todo.id}
              todo={todo}
              setTodoAEditar={setTodoAEditar}
              setTodoAEliminar={setTodoAEliminar}
            />
          );
        })}
      </ListItems>
      {openModalForm && (
        <Modal
          setOpenModalForm={setOpenModalForm}
          setTodoAEditar={setTodoAEditar}
          setTodoAEliminar={setTodoAEliminar}
          onClickClose={onClickClose}
        >
          <FormItem
            setOpenModalForm={setOpenModalForm}
            cargarTodoManual={cargarTodoManual}
            setTodoAEditar={setTodoAEditar}
            todoAEditar={todoAEditar}
            setTodoAEliminar={setTodoAEliminar}
            onClickClose={onClickClose}
          />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default App;
