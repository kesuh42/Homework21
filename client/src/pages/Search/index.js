import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API"

function Search() {
  const [formState, setFormState] = useState("")
  const [objectState, setObjectState] = useState([])

  useEffect(() =>{
    if (formState.length > 0) {
      API.search(formState).then((result) => {
        const APIArray = result.data.items
        let objectArray = []

        for (let i of APIArray) {
          const object = i.volumeInfo

          objectArray.push({
            title: object.title,
            authors: object.authors? object.authors : [] ,
            description: object.description? object.description : "" ,
            image: object.imageLinks? object.imageLinks.thumbnail : "" ,
            link: object.infoLink
          })
        }

        setObjectState(objectArray)
        
      })
    }
  }, [formState])

  //Uploads to database
  function handleSave(event) {
    //Retrieve the index recorded in the rendered html. Points to the corresponding object in the objectState array
    const index = event.target.parentElement.dataset.objectid

    API.post(objectState[index]).then((res, err) => {
      console.log("post successful")
      console.log(res)
    })
  }

  return (
    <div>
      <div className="search">
        <h4 className="booksearch">Book Search</h4>
        <div>Type your search query here</div>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
        <input className="form-control" type="text" onChange={event => setFormState(event.target.value)}/>
        </form>
      </div>

      <div className="results">
        {objectState.length > 0 ?
            objectState.map((values, index) => {
              return (
                <div className="bookinfo" data-objectid={index}>
                  <h4> {values.title} </h4>
                  <img src={values.link !== ""? values.image : ""}></img>
                  <div> <strong>Written by:</strong> {values.authors.length !== 0 ? values.authors.map((value, index) => {return <div>{value}</div>}) : "No author listed!"}</div>
                  <div> <strong>Description:</strong> {values.description !== "" ? values.description : "No description!"} </div>
                  <br />
                  <a href={values.link} className="btn btn-primary resultbutton">Book Information Page</a>
                  <button className="btn btn-primary" onClick={event => handleSave(event)}>Save</button>
                </div>
              )
            }) : <div>Please enter a search term!</div>
          }
      </div>
    </div>
  );

}

export default Search;
