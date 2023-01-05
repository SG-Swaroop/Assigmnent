import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function DataFetching() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState([]);
  const getData = async () => {
    const result = await axios.get("https://reqres.in/api/users?page=2");
    setUsers(result.data.data);
    console.log(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log({ users });

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <button onClick={() => setUserId(user.id)}>{user.id}</button>
        </div>
      ))}
      <div>
        <Card id={userId} />
      </div>
    </div>
  );
}

export default DataFetching;
