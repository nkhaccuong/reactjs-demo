import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/Todo.css';
import { useState } from 'react';



const App = () => {
  const name = "khac Cuong";
  const age = 22;
  const data = {
    city: "Dong nai",
    country: "Viet nam"
  };
  const todoNew = (name) => {
    alert(`Call me ${name}`);
  }

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }

  ])

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
