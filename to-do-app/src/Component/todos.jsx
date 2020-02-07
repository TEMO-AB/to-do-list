import React from 'react';


const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.lenght ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todos.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center" > You have no todo's left </p>
        );
    return (
        <div className="todos collection">
            {todoList}

        </div>
    );
};

export default Todos;