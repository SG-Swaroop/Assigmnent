import React, { useEffect, useState } from "react";
import "./App.css";

import SingleUser from "./SingleUser";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    f();
  }, []);

  console.log({ users });

  return (
    <div>
      <div className="flex flex-col text-lg font-bold">Click Any Button</div>
      <div className="inline-flex rounded-md shadow-sm mt-6" role="group">
        {users.map((user) => (
          <div>
            <button
              type="button"
              className="px-8 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ml-2"
              onClick={() => setUserId(user.id)}
            >
              {user.id}
            </button>
          </div>
        ))}
      </div>
      <SingleUser id={userId} />
    </div>
  );
};

export default AllUsers;
