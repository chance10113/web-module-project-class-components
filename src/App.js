import React from "react";

import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    };
  }

  crossOff = (clickedToDoId) => {
    const newToDos = this.state.toDos.map((toDo) => {
      if (toDo.id === clickedToDoId) {
        return {
          ...toDo,
          completed: !toDo.completed,
        };
      } else {
        return toDo;
      }
    });
    this.setState({
      toDos: newToDos,
    });
  };

  addToDo = () => {
    const newToDo = {
      name: toDoName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      toDos: [...this.state.toDos, newToDo],
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1> TO-DO APPLICATION </h1>
          <ToDoForm addToDo={this.addToDo} />
        </div>
        <ToDoList crossOff={this.crossOff} toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
