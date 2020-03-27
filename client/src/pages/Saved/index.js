import React, { useState, useEffect } from "react";
import API from "../../utils/API";
// import "./style.css";

function Saved() {
  const [objectState, setObjectState] = useState([])

  useEffect(() => {
    API.getBooks().then(result => {
      setObjectState(result.data)
    })
  })

  function handleDelete(event) {
    API.delete(event.target.parentElement.dataset.mongoid).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="results">
    {objectState.length > 0 ?
        objectState.map((value, index) => {
          return (
            <div className="bookinfo" data-objectid={index} data-mongoid={value._id}>
              <h4> {value.title} </h4>
              <img src={value.image}></img>
              <div> <strong>Written by:</strong> {value.authors? value.authors.map((value, index) => {return <div>{value}</div>}) : "No author listed!"}</div>
              <div> <strong>Description:</strong> {value.description ? value.description : "No description!"} </div>
              <br />
              <a href={value.link} className="btn btn-primary resultbutton">Book Information Page</a>
              <button className="btn btn-primary" onClick={event => handleDelete(event)}>Delete</button>
            </div>
          )
        }) : <div>No results</div>
      }
    </div>
  );
}

export default Saved;