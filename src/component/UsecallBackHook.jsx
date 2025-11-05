import React, { useState, useCallback } from "react";
import List from "./List";

export default function UsecallBackHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const getItem = () => {
  //     return [number, number + 1, number + 2];
  //   };

  const getItem = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "30px",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(!dark)}>Toggle theme</button>
      <List getItem={getItem} />
    </div>
  );
}
