//////////////DEPENDENCIES////////////////////
const express = require("express");
const app = express();
const mongoose = require("mongoose").set("debug", true);
const methodOverride = require("method-override");
const requestController = require("./controllers/request.js");
const port = process.env.PORT || 3000;
const MONGODB_URI =
  "mongodb://volunteeruser:waafalrs18@ds141168.mlab.com:41168/heroku_lm859cw7";
const Force = require("./models/request.js");
//////////////MIDDLEWARE//////////////////
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); //
app.use(express.static("public")); //public folder
app.use("/request", requestController);

app.get("/", (req, res) => {
  Force.find({}, (error, allRequests) => {
    let urgentPriority = [];
    let regularPriority = [];
    if (error) {
      res.send(error);
    }
    allRequests.forEach(request => {
      if (request.urgent) urgentPriority.push(request);
      else regularPriority.push(request);
    });
    res.render("index.ejs", {
      urgentPriority,
      regularPriority
    });
  });
});

/////////////DB SETUP///////////////////
//Mongoose database
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true
  },
  () => {
    console.log("connected to mongo");
  }
);

//listen
app.listen(port, (req, res) => console.log("app running on port 3000"));
