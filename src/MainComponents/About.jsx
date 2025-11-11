import React from "react";
import UseActionStateHook from "../component/UseActionStateHook";
import UseactionEx2 from "../component/UseactionEx2";
import UserefHook from "../component/UserefHook";
import GameCom from "../Game/gameCom";

export default function About() {
  return (
    <div>
      About
      <UseActionStateHook />
      <UseactionEx2 />
      <UserefHook />
      <GameCom/>
      
    </div>
  );
}
