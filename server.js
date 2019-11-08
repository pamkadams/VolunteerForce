//////////////DEPENDENCIES////////////////////
const express = require("express");
const app = express();
const mongoose = require("mongoose").set("debug", true);
const methodOverride = require("method-override");
const requestController = require("./controllers/request.js");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/volunteer";
const port = process.env.PORT || 3000;

//////////////MIDDLEWARE//////////////////
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); //
app.use(express.static("public")); //public folder
app.use("/request", requestController);

/////////////DB SETUP///////////////////
//Mongoose database
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//listen
app.listen(port, (req, res) => console.log("app running on port 3000"));
