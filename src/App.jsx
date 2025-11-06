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
import UsecallBackHook from "./component/UsecallBackHook";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "./MainComponents/Home";
import About from "./MainComponents/About";
import Service from "./MainComponents/Service";
import Contact from "./MainComponents/Contact";
import WedDev from "./MainComponents/WedDev";
import AppDev from "./MainComponents/AppDev";
import Header from "./MainComponents/Header";

export const Pass = createContext();

export default function App() {
  const name = "kumar";
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />}>
            <Route path="" element={<WedDev />} />
            <Route path="appdev" element={<AppDev />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
