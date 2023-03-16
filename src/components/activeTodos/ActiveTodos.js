import "./TodoListContainer.css";
import activeToDos from "../activeTodos/ActiveTodos";
import DoneTodos from "../doneTodos/DoneTodos";

const TodoListContainer = ({
    activeToDos,
    setActiveTodos,
    doneTodos,
    setDoneTodos,
    user,
    setMessage,
}) => {
    return (
        <div className="todo-lists-container">
            <ActiveToDos
            activeToDos={activeToDos}
            setActiveTodos={setActiveTodos}
            doneTodos={doneTodos}
            setDoneTodos={setDoneTodos}
            user={user}
            setMessage={setMessage}
            />
            <DoneTodos
            doneTodos={doneTodos}
            setDoneTodos={setDoneTodos}
            user={user}
            setMessage={setMessage}
            />
        </div>
    )
};

export default TodoListContainer;