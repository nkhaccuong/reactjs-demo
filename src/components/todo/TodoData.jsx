
const TodoData = (props) => {

    //destructuring
    // const { name, age, data } = props;
    const { todoList } = props;
    console.log("Check props: ", todoList);
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name} </div>
                        <button>Delete</button>
                    </div>
                )
            })}


        </div>
    )
}

export default TodoData