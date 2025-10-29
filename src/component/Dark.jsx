import React, { useState } from "react";

export default function Dark() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "40px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        swich to {dark ? "light" : "dark"} mode
      </button>
      <p>yor are in a {dark ? "dark" : "light"} mode</p>
    </div>
  );
}
