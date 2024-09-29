import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';
import './components/todo/Todo.css';



const App = () => {
  const name = "khac Cuong";
  const age = 22;
  const data = {
    city: "Dong nai",
    country: "Viet nam"
  };

  return (
    <div className='todo-container'>
      <h1 className='todo-title'>Todo list</h1>
      <TodoNew />
      <TodoData name={name} age={age} data={data} />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
