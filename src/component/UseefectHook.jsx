import React, { useEffect, useState } from "react";

export default function UseefectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component render");
  }, [count]);
  useEffect(() => {
    console.log(`count changet to : ${count}`);
  }, [count]);
  return (
    <>
      <div>React useeffect</div>
      <h2>Count :{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
