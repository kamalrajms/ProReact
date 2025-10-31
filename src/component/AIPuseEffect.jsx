import React, { useState, useEffect } from "react";

export default function AIPuseEffect() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>User list data</h1>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              name:{user.username}--email:{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
