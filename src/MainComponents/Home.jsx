import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setcount] = useState(0);
  const page = useNavigate();
  useEffect(() => {
    if (count >= 5) {
      page("/service");
    }
  }, [count]);
  return (
    <div>
      Home page
      <h2>{count}</h2>
      {/* <button onClick={()=>page("/service")}>Service</button> */}
      <button onClick={() => setcount(count + 1)}>Increment</button>
    </div>
  );
}
