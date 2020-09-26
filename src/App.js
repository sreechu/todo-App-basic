import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
//actual container component

function App() {
  let window_id = 1;
  //declare an initial state variable data with an initial value of empty array
  const [data, setData] = useState([]);

  const handleRemove = (id) => {
    console.log("clicked");
    // Filter all todos except the one to be removed
    const remainder = Object.entries(data).filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    // Update state with filter
    setData([...remainder]);
  };

  const addTodo = (val) => {
    const todoObj = { text: val, id: window_id++ };
    setData([...data, todoObj]);
  };

  return (
    <div className="App">
      <div className="button"></div>
      <h1>to-do</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={data} remove={handleRemove} />
    </div>
  );
}
export default App;
