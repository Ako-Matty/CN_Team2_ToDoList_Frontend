import { useState, useEffecct } from "react";
import './App.css';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import TodoContainer

function App() {


  const [activeToDos, setActiveToDos ] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [ message, setMessage ] = useState();




 


 
  return (
    <div className="appWrapper">
      <h1>Team-2 Do Or Not To Do</h1>

    </div>
  );
};

export default App;
