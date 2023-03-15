
// =====Login user=====
const login = async (username, password) => { 
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

const data = await response.json()

setUser(data.user)
writeCookie("jwt_token", data.user.token, 7)
    }catch (error){
        console.log(error)
    }
};

// =====Register user=====
const register = async (username, password) => {
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
        console.log("Data: ", data)
    } catch (error) {
        console.log(error)
    }
};

// =====Logout user=====WIP
const logout = async (setUser, setActiveTodos, setDoneTodos) => {
    setUser({ // Not sure if this is correct: Needs to be set to null
        username: null,
        password: null
    }),
    setActiveTodos([]),
    setDoneTodos([])
    // Back-date cookie how?
};

// =====AuthCheck=====
const authCheck = async (jwtToken) => {
    try {
        const response = await fetch("http://localhost/users/authcheck", {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${token}`
            },
        });
        const data = await response.json();
        data.user.token = jwtToken;
        return data
    } catch (error) {
        console.log(error)
    }
};