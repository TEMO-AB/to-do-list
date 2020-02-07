import React, { Component } from 'react';
import Todo from './Component/todos';


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some stuff' },
      { id: 2, content: 'play fefa' }
    ]
  }
  deleteTodo = (id) => {
    console.log(id);

  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
