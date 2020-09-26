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
    //build a todo Object out of the value entered with a unique ID and push it
    const todoObj = { text: val, id: window_id++ };
    console.log({ todoObj });
    //var addedArray = data.concat(new Array(todoObj));
    console.log([...data]);
    setData([...data], todoObj);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={data} remove={handleRemove} />
    </div>
  );
}
export default App;
