import React, { useEffect, useState } from "react";

export default function List({ getItem }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getItem());
    console.log("updating data from Usecallback hook");
  }, [getItem]);
  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
