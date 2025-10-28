import React, { useState } from "react";
import "./UsestateHook.css";

export default function UsestateHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="count">count :{count}</h2>
      <button className="count-btn" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button className="count-btn" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="count-btn" onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}
