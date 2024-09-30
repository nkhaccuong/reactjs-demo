
const TodoData = (props) => {

    //destructuring
    // const { name, age, data } = props;
    const { todoList, deleteTodo } = props;
    console.log("Check props: ", todoList);
    const handleClick = (id) => {
        deleteTodo(id);
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name} </div>
                        <button onClick={() => handleClick(item.id)}>Delete</button>
                    </div>
                )
            })}


        </div>
    )
}

export default TodoData