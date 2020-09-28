import React from "react";
import "./Todo.css";
import Typist from "react-typist";

//{props.remove(props.todo[1].id)}
const Todo = (props) => {
  const callMe = (val) => {
    console.log(val);
    props.remove(val);
  };

  return (
    <div className="container">
      <li
        onClick={() => {
          callMe(props.todo[1].id);
        }}
      >
        <Typist className="typed-words">{props.todo[1].text}</Typist>
      </li>
    </div>
  );
};

/* <table>
        <tr>
          <th>first column</th>
          <th>second column</th>
        </tr>
        <tr className={props.todo[1].id}>
          <td>{props.todo[1].text}</td>
          <td>
            <button onClick={callMe}> X</button>
          </td>
        </tr>
      </table>*/
export default Todo;
