import React, { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  return (
    <div>
      <h2>Controlled text innput</h2>
      <input
        type="text"
        value={name}
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tyep name : {name}</p>
      <h2>Controlled check box</h2>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </div>
  );
}
