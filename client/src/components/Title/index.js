import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Title() {
  return (
    <div className="title">
      <h1>(React) Google Books Search</h1>
      <div>Search for and save books of interest!</div>
    </div>
  );
}

export default Title;
