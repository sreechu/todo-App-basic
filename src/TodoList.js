import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, remove }) => {
  console.log(">>" + todos);

  const myarray = [
    {
      id: "1",
      text: "test",
    },
    {
      id: "1",
      text: "test",
    },
  ];

  // Map through the todos
  const todoNode = myarray.map((todo) => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  return <ul>{todoNode}</ul>;
};

export default TodoList;
