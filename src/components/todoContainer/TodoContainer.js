import TodoListContainer from "../TodoListContainer/TodoListContainer";
import AddTodo from "../AddTodo/AddTodo";

import "./TodoContainer.css";

const TodoContainer = ({
    activeTodos, 
    setActiveTodos, 
    doneTodos,
    setDoneTodos, 
    user, 
    setMessage,
}) => {
    return (
        <div class="todo-contaiiner">
            <TodoListContainer
            activeTodos={activeTodos}
            setActiveTodos={setActiveTodos}
            doneTodos={doneTodos}
            setDoneTodos={setDoneTodos}
            user={user}
            setMessage={setMessage}
            />
            <AddTodo
            activeTodos={activeTodos}
            setActiveToDos={setActiveTodos}
            user={user}
            setMessage={setMessage}
            />
        </div>
    )
};

export default TodoContainer;

