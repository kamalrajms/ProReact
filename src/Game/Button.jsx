import React from "react";

export default function Button({ value, onsquare }) {
  return (
    <button style={{ padding: "20px" }} onClick={onsquare}>
      {value}
    </button>
  );
}
