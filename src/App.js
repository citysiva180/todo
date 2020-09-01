import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>Todo App..</h1>
      <TodoList />
    </div>
  );
}

export default App;
