import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API"

function Search() {
  const [formState, setFormState] = useState("")
  const [objectState, setObjectState] = useState([])

  useEffect(() =>{
    API.search(formState).then((result) => setObjectState(result.data.items))
  }, [formState])

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
                <div className="bookinfo">
                  <h4> {bookInfo.title} </h4>
                  <img src={bookInfo.imageLinks? bookInfo.imageLinks.thumbnail : ""}></img>
                  <div> {bookInfo.authors? bookInfo.authors.map((value, index) => {return <div>{value}</div>}) : "No author listed"}</div>
                  <div> {bookInfo.description ? bookInfo.description : "No description!"} </div>
                  <a href={bookInfo.infoLink}>Go to the Google Books information page!</a>
                  <br />
                  <button>View</button> <button>Save</button>
                </div>
              )
            }) : <div>Please enter a search term!</div>
          }
      </div>
    </div>
  );

}

export default Search;
