import axios from "axios";

export default {
  search: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
  },
  getBooks: function() {
    return axios.get("/api/books");
  },
  post: function(data) {
    return axios.post("/api/post", data)
  },
  delete: function(id) {
    return axios.delete(`/api/delete/${id}`)
  }
};
