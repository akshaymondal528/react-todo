import React, { useState } from 'react';
import Botton from './UI/Button';
import TodoList from './TodoList';

import './Todo.css';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const onChange = event => {
    setInput(event.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!input) return false;
    setTodo([...todo, input]);
    setInput('');
  };

  const removeTodo = () => {
    setTodo([]);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="todos">
          <div>
            <h1>TODO APP</h1>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div>
              <input
                type="text"
                name="todo"
                placeholder="Add todo here"
                value={input}
                onChange={onChange}
              />
            </div>
            <div>
              <Botton title={'Add Todo'} />
            </div>
          </form>
          <div>
            <TodoList setTodos={setTodo} todos={todo} />
          </div>
          <div>
            <Botton title={'Remove All Todo'} onClick={removeTodo} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;
