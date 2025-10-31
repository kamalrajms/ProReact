import React, { useState, useEffect } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handlestart = () => {
    setIsRunning(true);
  };
  const handlestop = () => {
    setIsRunning(false);
  };
  const handlereset = () => {
    setSecond(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Time : {second}</h1>
      <button onClick={handlestart}>start</button>
      <button onClick={handlestop}>stop</button>
      <button onClick={handlereset}>reset</button>
    </div>
  );
}
