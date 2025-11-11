import React, { useState, useEffect } from "react";

export default function AIPinteragation() {
  const [user, setUser] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("failed to featch");
        }
        const data = await response.json();
        setUser(data);
      } catch {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  if (Loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <div>
      <h2>user List</h2>
      <ul>
        {user.map((user) => (
          <li key={user.id}> name:{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
