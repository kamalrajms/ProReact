import React from "react";

export default function ObjectStyle() {
  const theme = {
    backgroundColor: "red",
    padding: "30px",
    color: "#fff",
  };
  return (
    <div>
      <h1>object way style</h1>
      <p style={theme}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero est sit
        beatae eligendi ipsa molestiae ipsam nulla earum. Officia, deserunt
        quibusdam. Deserunt aut nobis tenetur dolor quos! Dolor, dicta ducimus.
      </p>
    </div>
  );
}
