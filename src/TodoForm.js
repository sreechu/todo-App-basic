import React from "react";
let input;
//TodoForm has just one prop which is a handler that handles the click event for adding a new todo.
//The value of the input is passed to the input member variable using React's ref.

function TodoForm({ addTodo }) {
  return (
    <div>
      <h1>to-do</h1>
      <input
        ref={(node) => {
          input = node;
        }}
      ></input>
      <button
        onClick={() => {
          console.log(">>> " + input.value);
          addTodo(input.value);
          input.value = "";
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default TodoForm;
