import React from "react";
import SecProps from "./SecProps";

export default function Props() {
  const name = "Hari";
  return (
    <div>
      main component
      <SecProps name={name} />
    </div>
  );
}
