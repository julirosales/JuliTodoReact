import React, { useEffect, useState } from "react";
import "./App.css";
import { Search } from "../Search";
import { CreateButton } from "../CreateButton";
import { Items } from "../Item";
import { FormItem } from "../FormItem";
import { ListItems } from "../ListItems";

function App() {
  let arrayTodos = [];
  const [arrayTodo, setArrayTodo] = useState(arrayTodos);

  useEffect(() => {
    setTimeout(() => {
      console.log("%cse montó el componente", "color:green");
      fetch("https://6348a6070b382d796c74f065.mockapi.io/api/v1/todos")
        .then((response) => response.json())
        .then((data) => {
          setArrayTodo(data);
        })
        .catch((error) => console.log(error));
    }, 1200);
  }, []);
  return (
    <React.Fragment>
      <h1 className="App-header">Todo List React</h1>
      <Search />
      <CreateButton />
      <ListItems>
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
