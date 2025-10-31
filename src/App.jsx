import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Dark from "./component/Dark";
import Input from "./component/Input";
import MultipleField from "./component/MultipleField";
import RegiterForm from "./component/RegiterForm";
import UseefectHook from "./component/UseefectHook";
import Sec from "./component/Sec";
import Timer from "./component/Timer";
import AIPuseEffect from "./component/AIPuseEffect";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <div>
      <AIPuseEffect />
      <Timer />
      <Sec />
      <UseefectHook />
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
