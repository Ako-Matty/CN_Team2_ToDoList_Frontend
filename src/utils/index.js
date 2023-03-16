export const handleDeleteTodo = async (
    e,
    state,
    setter,
    todo,
    deleteFunc,
    url,
    setMessage
) => {
    e.preventDefault();

    const { setActiveTodos, setDoneTodos } = setter;

    const deletedTodo = await deleteFunc(todo, url);

    try {
        if (deletedTodo > 0 && url === "activetodos/deleteactivetodo"){
            await setActiveTodos((el) =>
            state.activeTodos.filter((el) =>el !== todo)
            );
            setMessage("Active Todo Deleted");
        } else if (deletedTodo > 0 && url === "donetodos/deletedonetodo") {
            await setDoneTodos((el) => state.doneTodos.filter((el) => el !== todo));
            setMessage("Done Todo Deleted");
        } else if (deletedTodo === 0 ) {
            setMessage("Something Went Wrong");
            throw new Error("Something Went Wrong");
        }
    } catch (error) {
        console.log(error)
    }
};

export const logOut = (e, setUser, setActiveTodos, setDoneTodos) => {
    e.preventDefault();

    setUser(null);

    setActiveTodos([]);
    setDoneTodos([]);

    document.cookie = 
    "jwt_token=; expires=Thur, 01 Jan 1970 00:00:00 UTC; path=/;";
};
