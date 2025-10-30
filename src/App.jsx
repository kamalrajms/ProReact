import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";
import Input from "./component/Input";
import MultipleField from "./component/MultipleField";
import RegiterForm from "./component/RegiterForm";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <div>
      <RegiterForm />
      <MultipleField />
      <Input />
      <Dark />
      <button onClick={() => setUser(!user)}>switch</button>
      {user ? <ListRendering /> : <ConditionalRender />}
      <UsestateHook />
    </div>
  );
}
