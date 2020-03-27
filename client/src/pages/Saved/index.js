import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import "./style.css";

function Saved() {
  const [objectState, setObjectState] = useState([])

  useEffect(() => {
    API.getBooks().then(result => {
      console.log(result.data)
    })
  })

  return (
    <div></div>
  );
}

export default Saved;