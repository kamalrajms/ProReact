import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={""}>Home</Link>
      <Link to={"/about"}>about</Link>
      <Link to={"/service"}>service</Link>
      <Link to={"/Contact"}>Contact</Link>
    </div>
  );
}
