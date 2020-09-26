import React from "react";
import "./Todo.css";
import Typist from "react-typist";
const Todo = (props) => {
  return (
    <div>
      <li>
        <Typist className="typed-words">{props.todo[1].text}</Typist>
      </li>
    </div>
  );
};

export default Todo;
