const addActiveToDoDb = async (todo) => {
    try {
        const response = await fetch("http://loccalhost/activetodos/addtodo", {
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

}


