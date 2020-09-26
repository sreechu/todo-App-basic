import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  // Map through the todos
  const todoNode = Object.entries(props.todos).map((todo) => {
    return <Todo todo={todo} key={todo.id} remove={props.remove} />;
  });
  return <ul>{todoNode}</ul>;
};

export default TodoList;
