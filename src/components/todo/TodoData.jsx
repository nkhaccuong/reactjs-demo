
const TodoData = (props) => {

    //destructuring
    const { name, age, data } = props;

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>My age is {props.age}</div>
            <div>Learning React</div>
            <div>Watching youtube</div>
        </div>
    )
}

export default TodoData