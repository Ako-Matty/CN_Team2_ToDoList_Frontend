
// =====Add active todo to DB=====
export const addActiveToDoToDb = async (todo) => {
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
    const data = await response.json();
    return data;

    } catch (error) {
        console.log(error)
    }
};

// =====Add done todo to DB=====
export const addDoneToDoToDb = async (todo) => {
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
    const data = await response.json();
    return data;

    } catch (error) {
        console.log(error)
    }
};

// =====Delete active todo=====
export const deleteActiveOrDoneTodoToDb = async (todo) => {
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
    let deletionSucess;

    if (response.ok && response.status ===204) {
        deletionSucess = 1;
    } else {
        deletionSucess = 0;
    }
    return deletionSucess;

    }catch (error){
    console.log(error)
    }
};