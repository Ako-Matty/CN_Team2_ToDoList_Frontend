import {writeCookie} from "../common";

// =====Register user to DB=====
export const registerUser = async (e, username, password) => {
    console.log(username, password);
    try {
        const response = await fetch("http://localhost/users/register", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });

        const data = await response.json();
        writeCookie("jwt_token", data.user.token, 7);
        e.target.reset();
        return data
    } catch (error) {
        console.log(error)
    }
};

// =====Login user to DB=====
export const login = async (e, username, password) => { 
    try {
        const response = await fetch ("http://localhost/users/login",{
            method: "POST", 
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });

        const data = await response.json();
        writeCookie("jwt_token", data.user.token, 7);
        e.target.reset();
        return data;
    } catch (error){
        console.log(error)
    }
};

// =====Authorization check=====
export const authCheck = async (jwtToken) => {
    try {
        const response = await fetch("http://localhost/users/authcheck", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${jwtToken}`
            }
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
};