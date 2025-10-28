import React from "react";
import Greeting from "./Greeting";
import UsestateHook from "./component/UsestateHook";
import ObjectStyle from "./ObjectStyle";
import ModuleStyle from "./component/ModuleStyle";

export default function () {
  const name = "Raj kumar";
  const name2 = "Karthi";
  const city = "chennai";
  const city2 = "salem";
  return (
    <>
      <h1 className="react">React class</h1>
      <h3 style={{ color: "yellow", padding: "20px" }}>{name}</h3>
      <Greeting firstName={name} place={city} />
      <Greeting firstName={name2} place={city2} />
      <UsestateHook />
      <ObjectStyle />
      <ModuleStyle />
      <nav className="box">yegrwuobr ruvh iorhffu effbub</nav>
    </>
  );
}
