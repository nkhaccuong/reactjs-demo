import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import './Todo.css';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([

    ])
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
    )
}
export default TodoApp