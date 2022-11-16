import React from "react";
import "./App.css";
import {Search} from "../Search"
import {CreateButton} from "../CreateButton"
import {Items} from "../Item"

function App() {
  return (
    <React.Fragment>
      <h1 className="App-header">Todo List React</h1>
    <Search/>
    <CreateButton/>
    <Items/>
    </React.Fragment>
  );
}

export default App;
