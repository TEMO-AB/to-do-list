import React, { Component } from 'react';
import Todo from './todo';


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some stuff' },
      { id: 2, content: 'play fefa' }
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
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
