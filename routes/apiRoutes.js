const router = require("express").Router();
const db = require("../models");

router.get("/books", (req, res) => {
  db.Book.find({})
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;