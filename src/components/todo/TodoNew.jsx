import { useState } from "react";


const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("NKCuong");


    const { todoNew } = props;
    // todoNew("Cuong");

    const handleClick = () => {
        console.log("Value input: ", valueInput);
    }
    // const handleOnChange = (event) => {
    //     console.log("Event: ", event.target.value);
    // }
    const handleOnChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className="todo-new">
            <input type="text" name="" id="" onChange={(event) => { handleOnChange(event.target.value) }} />
            <button onClick={handleClick}>add</button>
            <div>sfsdfsf {valueInput}</div>
        </div>
    )
}

export default TodoNew