import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";

const App = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setListOfUSer(res.data);
    });
  }, []);
  console.log(listOfUSer);
  return (
    <div>
      <UserList users={listOfUSer} />
    </div>
  );
};

export default App;
