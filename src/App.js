import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ReactComponent as ReactLogo } from "./golf.svg";
//actual container component
let counter = 0;
function App() {
  //declare an initial state variable data with an initial value of empty array
  const [data, setData] = useState([]);
  //const [counter, setCounter] = useState(1);
  const handleRemove = (id) => {
    console.log("id val is " + id);
    // Filter all todos except the one to be removed
    const remainder = data.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });

    // Update state with filter
    setData([...remainder]);
  };

  const addTodo = (val) => {
    const todoObj = { text: val, id: counter++ };
    setData([...data, todoObj]);
  };

  return (
    <div className="App">
      <header id="home">
        <ReactLogo />
        <h1>To-do</h1>
        <TodoForm addTodo={addTodo} />
      </header>
      <TodoList todos={data} remove={handleRemove} />
    </div>
  );
}
export default App;
