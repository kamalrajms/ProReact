import React from "react";
import Style from "./modulestyle.module.css";

export default function ModuleStyle() {
  return (
    <div>
      <h3 className={Style.module}>
        module way style <p className={Style.modulep}>react class</p>
      </h3>
    </div>
  );
}
