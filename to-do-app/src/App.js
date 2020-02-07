import React, { Component } from 'react';
import Todo from './Component/todos';


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some stuff' },
      { id: 2, content: 'play fefa' }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todo todo={this.state.todos} />
      </div>
    );
  }
}

export default App;
