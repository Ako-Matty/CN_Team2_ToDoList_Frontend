import { useState } from "react";
import {registerUser} from "../../../utils/user";

const Sign = ({ user, setUser}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e, setUser) => {
        e.preventDefault();
        try {
            const userData = await registerUser(e, username, password);

            if (userData.message === "Success") {
                setUser(userData.user);
            };
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="sign-container">
            <form onSubmit={(e) => handleSubmit(e, setUser)}>
                <input
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}>
                </input>
                <input
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
};

export default Sign;