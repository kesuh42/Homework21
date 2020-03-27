import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  // ADD A POST CALL **
  // ADD A DELETE CALL **
  search: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  }
};
