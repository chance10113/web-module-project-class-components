import React from "react";

import ToDo from "./Todo";

const ToDoList = (props) => {
  return (
    <div className="todo-list">
      {props.toDos.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} crossOff={props.crossOff} />
      ))}
      <button className="clear-btn"> Clear Completed</button>
    </div>
  );
};

export default ToDoList;
