import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API"

function Search() {
  const [formState, setFormState] = useState("")
  const [objectState, setObjectState] = useState([])

  useEffect(() =>{
    if (formState.length > 0) {
      API.search(formState).then((result) => setObjectState(result.data.items))
    }
  }, [formState])

  //Uploads to database
  function handleSave(event) {
    //Retrieve the index recorded in the rendered html. Points to the corresponding object in the objectState array
    const index = event.target.parentElement.dataset.objectid
    const targetObject = objectState[index].volumeInfo
    
    console.log(targetObject)

    //Construct data object to send to the database
    const data = {
      title: targetObject.title,
      authors: targetObject.authors,
      description: targetObject.description,
      image: targetObject.imageLinks.thumbnail,
      link: targetObject.infoLink
    }

    console.log(data)

    API.post(data).then((res, err) => {
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
        <input className="form-control" type="text" onChange={(event) => setFormState(event.target.value)}/>
        </form>
      </div>

      <div className="results">
        {objectState.length > 0 ?
            objectState.map((value, index) => {
              const bookInfo = value.volumeInfo
              return (
                <div className="bookinfo" data-objectid={index}>
                  <h4> {bookInfo.title} </h4>
                  <img src={bookInfo.imageLinks? bookInfo.imageLinks.thumbnail : ""}></img>
                  <div> {bookInfo.authors? bookInfo.authors.map((value, index) => {return <div>{value}</div>}) : "No author listed!"}</div>
                  <div> {bookInfo.description ? bookInfo.description : "No description!"} </div>
                  <br />
                  <a href={bookInfo.infoLink} className="btn btn-primary resultbutton">Book Information Page</a>
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
