import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import { DnDCharacterStatsSheet } from 'dnd-character-sheets'
import 'dnd-character-sheets/dist/index.css'

function App() {

  const [ users, setUsers ] = useState([])
  const [ user, setUser ] = useState({})

  const onUpdate = (char) => {
    console.log(char);
  }

  useEffect(() => {
    axios.get("/users.json").then((response) => {
      console.log("USER RESP",response.data)
      response.data.map(user => { console.log(user); })
      setUser(response.data[0])
      setUsers(response.data);
    });
	},[]);

  return (
    <div>
       <DnDCharacterStatsSheet onCharacterChanged={onUpdate}/>
    </div>
  );
}

export default App;

/*
export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <ul className="users">
          {users.map((user) => (
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
*/
