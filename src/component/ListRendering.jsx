import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "Mango", "orange", "jjregur", "hbfie"];
  const user = [
    // { id: 1, name: "john" },
    // { id: 2, name: "kumar" },
    // { id: 3, name: "Kishore" },
  ];
  console.log(fruits.length);

  return (
    <div>
      <h3>fruits list</h3>
      {fruits.map((fruit, ind) => (
        <li key={ind}>{fruit}</li>
      ))}
      <h3>user data</h3>
      {user.length > 0 ? (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.id}.{user.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
