const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
  db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

router.post("/post", (req, res) => {
  console.log(req.body)
  db.Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
});

router.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  db.Book.deleteOne({_id: req.params.id})
    .then(books => res.json(books))
    .catch(err => res.status(422).end());
})

module.exports = router;