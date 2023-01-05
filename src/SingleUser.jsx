import React, { useEffect, useState } from "react";

const SingleUser = ({ id }) => {
  console.log(typeof id);
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await res.json();
      console.log(data.data);
      setUser(data.data);
    })();
  }, [id]);
  // console.log(user);
  console.log({ id });
  if (!id) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-4 shadow-md lg:max-w-lg">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">User Information</h3>
          <div className="text-gray-600">
            {user && (
              <strong>
                User Name: {user.first_name} {user.last_name}
              </strong>
            )}
          </div>
          <div className="text-gray-600">
            {user && <strong>Email: {user?.email}</strong>}
            <div className="flex items-center justify-center">
              <img
                class="object-none object-center"
                key={user?.avatar}
                src={user?.avatar}
                alt="Busy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
