import React from 'react';
import Botton from './UI/Button';
import './TodoList.css';

const TodoList = props => {
  const deleteTodo = index => {
    const updatedTodo = props.todos.filter((e, id) => {
      return id !== index;
    });

    props.setTodos(updatedTodo);
  };

  return (
    <div className="todo_list">
      {props.todos.map((todo, i) => {
        return (
          <div className="todo_list__items">
            <div>
              <h3 key={i}>{todo}</h3>
            </div>
            <div>
              <Botton title={'Delete'} onClick={() => deleteTodo(i)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
