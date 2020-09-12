import React from "react";
import coder from "./coder.jpg";
import "./style.css";


function Jumbotron({ children }) {
  return (
    <div
      
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
