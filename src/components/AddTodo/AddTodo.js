import {useState} from "react";

const [setActiveToDo, setToDoText] = useState("")



const handlelist = (event) => {
    setToDoText(event.target.value)
}

return (


<div classname="addToo">
    <h1>Add To To Do</h1>
        <input type="text" onChange={setToDoText}></input>

</div>

)