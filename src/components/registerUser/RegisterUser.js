import { useState } from "react";
import React from "react";
// import "./addUser.css";

// import {addUser} from "../../utils";

const registerUser = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const onRegisterSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);

        await AddUser(username, password);
    };

    return (
        <div className="adduser-wrapper">
            <form className="add-user-form" onSubmit={onRegisterSubmit}>
                <label>
                    Username:
                    <input placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)}></input>
                </label>
                <label>
                    Password:
                    <input placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default registerUser;