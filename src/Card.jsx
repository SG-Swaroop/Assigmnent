import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Card = ({ id }) => {
  const [user, setUser] = useState({});
  const getData = async () => {
    const result = await axios.get(`https://reqres.in/api/userss/${id}`);
    setUser(result.data.data);
    console.log(result.data.data);
  };

  useEffect(() => {
    getData();
  }, [id]);
  console.log({ user });

  return <div>{user && <strong>{user.first_name}</strong>}</div>;
};
export default Card;
