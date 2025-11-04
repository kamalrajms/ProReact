import React, { useState, useContext, createContext } from "react";
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
import UserefHook from "./component/UserefHook";
import Frist from "./Context/Frist";
import UseReducerHook from "./component/UseReducerHook";

export const Pass = createContext();

export default function App() {
  const [user, setUser] = useState(true);
  const name = "kumar";
  return (
    <div>
      <UseReducerHook />
      <div className="context">
        App component
        <Pass.Provider value={name}>
          <Frist />
        </Pass.Provider>
      </div>
      <UserefHook />
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
