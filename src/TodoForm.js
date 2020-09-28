import React from "react";
import "./TodoForm.css";

let input;
//TodoForm has just one prop which is a handler that handles the click event for adding a new todo.
//The value of the input is passed to the input member variable using React's ref.
/** <input
        className="searchInput"
        ref={(node) => {
          input = node;
        }}
      ></input>*/
function TodoForm({ addTodo }) {
  return (
    <div>
      <input
        type="input"
        ref={(node) => {
          input = node;
        }}
        className="form__field"
      ></input>
      <button
        class="btn"
        onClick={() => {
          if (input.value) {
            addTodo(input.value);
          }
          input.value = "";
        }}
      >
        <i class="fa fa-pencil"></i>
      </button>
    </div>
  );
}

export default TodoForm;
