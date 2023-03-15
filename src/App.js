import { useState, useEffecct } from "react"
import './App.css';

function App() {

  const [user, setUser] = useState({
    username:null,
    pssword: null,

  });

  const [users, setUsers] = usestate();

  return (
    <div className="appWrapper">
      <h1>Team-2 Do Or Not To Do</h1>

    </div>
  );
};

export default App;
