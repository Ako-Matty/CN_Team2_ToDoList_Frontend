import { useState } from "react";


const LoginUser = ({user, setUser}) => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const onLoginSubmit = async (e) => {
        e.preventDefault();

        await loginUser(username, password, setUser);
}

return (
    <div className="loginUserWrapper" onSubmit={onLoginSubmit}>
        
        <form className="loginUserForm">
            <label>
                Username:
                <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}/>
            </label>

        <label>
            Password:
        <input 
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button type="Submit">Login</button>

        </form>
    </div>
);
};
export default LoginUser;