import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/Todo.css';
import { useState } from 'react';



const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }

  ])
  const name = "khac Cuong";
  const age = 22;
  const data = {
    city: "Dong nai",
    country: "Viet nam"
  };
  const todoNew = (name) => {
    const newTodo = {
      id: randomIntFromInterval(10, 1000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className='todo-container'>
      <h1 className='todo-title'>Todo list</h1>
      <TodoNew
        todoNew={todoNew}
      />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
