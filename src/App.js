import { useState, useEffecct } from "react";
import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TodoContainer from "./components/todoContainer/TodoContainer";
import LogOrSignContainer from "./components/LogOrSign/LogOrSignContainer/LogOrSignContainer";
import MessageContainer from "./components/messageContainer/messageContainer";

import {getTokenFromCookie} from "./common";
import{authCheck} from "./utils/user";

function App() {


  const [activeToDos, setActiveToDos ] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [ message, setMessage ] = useState();

  console.log("actions test");
  console.log("hello");

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");

      if (token === false) {
        setUser(null);
      } else {
        loginWithToken(token);
      }   }
  }, [])

  const loginWithToken = async (token) => {
    const persistantUser = await authCheck(token);

    await setUser(persistantUser.user);
    await setActiveToDos(persistantUser.activeToDos);
    await setDoneTodos(persistantUser.doneTodos);

  };

  return (
    <>
    <Header user={user}/>
    <div className="user-ops-container">
      <LogOrSignContainer
      user={user}
      setUser={setUser}
      setActiveToDos={setActiveToDos}
      setDoneTodos={setDoneTodos}
      />
      <MessageContainer message={message} />
    </div>
      <TodoContainer
      activeTodos={activeTodos}
      setActiveTodos={setActiveTodos}
      doneTodos={doneTodos}
      setDoneTodos={setDoneTodos}
      user={user}
      essage={message}
      setMessage={setMessage}
  />
  <Footer />
  </>
  );
}

export default App;




 


 
  

