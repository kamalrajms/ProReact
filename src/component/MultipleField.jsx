import React, { useState } from "react";

export default function MultipleField() {
  const [formData, setFromData] = useState({
    name: "hi",
    email: "k@gmail.com",
    age: "44",
  });
  //   console.log(formData.name);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Multiple fields example</h2>
      <input
        type="text"
        placeholder="enter name"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <input
        type="email"
        placeholder="enter email"
        name="email"
        value={formData.email}
        onChange={handleInput}
      />
      <input
        type="number"
        placeholder="enter number"
        name="age"
        value={formData.age}
        onChange={handleInput}
      />
    </div>
  );
}
