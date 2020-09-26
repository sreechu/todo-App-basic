import React from "react";
let input;
//TodoForm has just one prop which is a handler that handles the click event for adding a new todo.
//The value of the input is passed to the input member variable using React's ref.

function TodoForm({ addTodo }) {
  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      ></input>
      <button
        onClick={() => {
          if (input.value) {
            addTodo(input.value);
          }
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
