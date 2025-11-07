import React, { useId } from "react";

export default function UseIdHook() {
  const id = useId();
  const email = useId();
  console.log(id, email);

  return (
    <div>
      {/* <label htmlFor={id}>Name</label>
      <input type="text" id={id} /> */}
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
      <label htmlFor={`${email}-email`}>email</label>
      <input type="text" id={`${email}-email`} />
    </div>
  );
}
