import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      Service
      <nav>
        <Link to={""}>Web devlopment</Link>
        <Link to={"appdev"}>App devlopment</Link>
        <Outlet />
      </nav>
    </div>
  );
}
