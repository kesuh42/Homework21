const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  authors: {
    type: Array,
    default: []
  },
  description: {
    type: String,
    default: "",
  },
  //link to the book's thumbnail image
  image: {
    type: String,
    default: "",
  },
  //link to the book's information page
  link: {
    type: String,
    default: "",
  },
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
