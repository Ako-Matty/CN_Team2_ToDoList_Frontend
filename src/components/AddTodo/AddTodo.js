import {useState} from "react";
import { addActiveToDoDb } from "../../utils/todos/index"

const AddTodo = ({activeTodos, setActiveToDos, user, setMessage}) => {
    const [text, setText] = useState("");

    const textChangeHandler = (e) => {
        e.preventdefault();
        setText(e.target.value);
    };

    const todoSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("add todo hit");
        const newTodo = await addActiveToDoDb(text, user.username);
        console.log("add todo new todo: ", newTodo);
        if (newTodo) {
            const tempArr = [...activeTodos, newTodo.todo];
            setActiveToDos(tempArr);
            setMessage("Todo added to DB");
        }

        e.target.reset();
    }


};

return (
    <div>
        {user ? (
            <form onSubmit={todoSubmitHandler}>
                <textarea onChange={textChangeHandler}></textarea>
                <button value="add" type="submit">
                    Add Todo
                </button>
            </form>
        ) : (
            <div>
                <h2>Login</h2>
            </div>
        )}
    </div>    

);

export default AddTodo;
        


