//////////////DEPENDENCIES////////////////////
const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose").set("debug", true);

//////////////MODELS///////////////////
const Force = require("../models/request.js");

//////////////ROUTES////////////////////

//INDEX
router.get("/", (req, res) => {
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

//NEW
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//SHOW
router.get("/:index", (req, res) => {
  Force.findById(req.params.index, (err, foundOrder) => {
    res.render("show.ejs", { foundOrder });
  });
});

//CREATE
router.post("/", (req, res) => {
  res.send("create");
  x;
});
//EDIT
router.get("/:id/edit", (req, res) => {
  res.render("edit.ejs");
});

//DELETE
router.delete("/:id", (req, res) => {
  res.send("delete");
});

//UPDATE Edit
router.put("/:id", (req, res) => {
  res.send("is this it");
});

module.exports = router;
