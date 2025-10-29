import React, { useState } from "react";

export default function ConditionalRender() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? <p>Welcome Back ...!</p> : <p>Please Log in</p>}
      <button onClick={() => setLogin(!login)}>
        {login ? "sign out" : "sign in"}
      </button>

      {login && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          explicabo nisi, deserunt voluptatibus enim architecto.
        </p>
      )}
    </div>
  );
}
