const addActiveToDoToDb = async (todo) => {
    try {
        const response = await fetch("http://localhost/activetodos/addtodo", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify({
            todo: todo
        })
    });
    } catch (error) {
        console.log(error)
    }

};

const addDoneToDoDb = async (todo) => {
    try {
        const response = await fetch("http://localhost/donetodos/adddoneto", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
        },
        body: JSON.stringify({
            todo: todo
        })
    });
    } catch (error) {
        console.log(error)
    }
};

const deleteActiveOrDoneTodoToDb = async (todo) => {
    try {
        const response = await fetch("http://localhost/activetodos/deleteactivetodo/donetodos/deletedonetodo", {
            method: "DELETE", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`,
            },
            body: JSON.stringify({
                todo: todo
        })
    });
    }catch (error){
    console.log(error)
    }
};