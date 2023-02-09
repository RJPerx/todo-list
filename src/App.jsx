import React, { useState } from "react";
import './App.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    setNewTodoText('');
    setEditingIndex(-1);
  };

  const updateTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setNewTodoText('');
    setEditingIndex(-1);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setEditingIndex(-1);
  };

  const handleEditClick = (index) => {
    setNewTodoText(todos[index].text);
    setEditingIndex(index);
  };

  return (
    <div className="container-fluid d-flex justify-content-center flex-wrap">
      <div className="col-12 col-md-4 mt-3">
        <div className="card">
            <h3 className="text-center mt-3 text-danger">To-Do App</h3>
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter task"
                value={newTodoText}
                onChange={(event) => setNewTodoText(event.target.value)}
              />
              {editingIndex === -1 ? (
                <button
                  className="btn btn-primary"
                  onClick={() => addTodo(newTodoText)}
                  disabled={!newTodoText}
                >
                  Add
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => updateTodo(editingIndex, newTodoText)}
                  disabled={!newTodoText}
                >
                  Update
                </button>
              )}
            </div>
            <ul className="list-group mt-3">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className={`list-group-item d-flex justify-content-between align-items-center ${todo.isCompleted ? "completed" : ""
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => completeTodo(index)}
                  />
                  <span className="todo-text mr-3">{todo.text}</span>
                  <div>
                    <button
                      className="btn btn-primary btn-sm mx-3"
                      onClick={() => handleEditClick(index)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm mr-3"
                      onClick={() => deleteTodo(index)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
