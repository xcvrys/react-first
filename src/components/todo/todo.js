import './todo.css';
import React from 'react'
import Footer from '../footer/footer';
const Todo = () => {

  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo">
        <h1>Todo</h1>
        <div className="todo__input">
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} maxLength="35" />
          <button onClick={addTodo} >Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div >
      <Footer />
    </>
  );
};

export default Todo;