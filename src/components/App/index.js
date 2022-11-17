import React, { useEffect, useState } from "react";
import "./App.css";
import { Search } from "../Search";
import { CreateButton } from "../CreateButton";
import { Items } from "../Item";
import { FormItem } from "../FormItem";
import { ListItems } from "../ListItems";
import "../Loading/index.css"

function App() {
  let arrayTodos = [];
  const [loading,setLoading] = useState(true)
  const [arrayTodo, setArrayTodo] = useState(arrayTodos);

  useEffect(() => {
    setTimeout(() => {
      console.log("%cse montó el componente", "color:green");
      fetch("https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos")
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          setArrayTodo(data);
        })
        .catch((error) => console.log(error));
        
    }, 1300);
  }, []);
  return (
    <React.Fragment>
      <h1 className="App-header">Todo List React</h1>
      <Search />
      <CreateButton />
      <ListItems>
        {loading && <div className="cargando"></div>}
        {arrayTodo.map((todo) => (
          <Items
            titulo={todo.titulo}
            descripcion={todo.descripcion}
            key={todo.id}
          />
        ))}
      </ListItems>
      <FormItem />
    </React.Fragment>
  );
}

export default App;
