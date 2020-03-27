import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  post: function(data) {
    return axios.post("/api/post", data)
  },
  // ADD A DELETE CALL **
  search: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  }
};
