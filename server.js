//////////////DEPENDENCIES////////////////////
const express = require("express");
const app = express();
const mongoose = require("mongoose").set("debug", true);
const methodOverride = require("method-override");
const requestController = require("./controllers/request.js");

//////////////MIDDLEWARE//////////////////
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); //
app.use(express.static("public")); //public folder
app.use("/request", requestController);

/////////////DB SETUP///////////////////
mongoose.connect("mongodb://localhost:27017/volunteer", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
//listen
app.listen(3000, (req, res) => console.log("listening on PORT 3000!"));
