import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/Todo.css';
import { useState } from 'react';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Outlet } from 'react-router-dom';



const App = () => {
  const [todoList, setTodoList] = useState([

  ])
  // const name = "khac Cuong";
  // const age = 22;
  // const data = {
  //   city: "Dong nai",
  //   country: "Viet nam"
  // };
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
  const deleteTodo = (id) => {
    const todoNew = todoList.filter(item => item.id !== id);
    setTodoList(todoNew);
  }
  return (
    <>
      <Header />
      <div className='todo-container'>
        <h1 className='todo-title'>Todo list</h1>
        <TodoNew
          todoNew={todoNew}
        />
        {todoList.length > 0 ?
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
          :
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
          </div>
        }
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
