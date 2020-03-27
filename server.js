const express = require("express");
const path = require("path");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://kesuh42:oawoaw42.mlab.com:29609/heroku_k9sq720n",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// API routes
app.use("/api", apiRoutes);

// Send every other request to the React app, the non-API "html" routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("I am listening, coder");
});