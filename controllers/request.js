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

//DETAIL
router.get("/site", (req, res) => {
  Force.find({}, (error, allRequests) => {
    let syria = allRequests.filter(request => request.location === "Syria");
    let urgentPriority = [];
    let regularPriority = [];
    if (error) {
      res.send(error);
    }
    syria.forEach(request => {
      if (request.urgent) urgentPriority.push(request);
      else regularPriority.push(request);
    });
    res.render("location.ejs", {
      urgentPriority,
      regularPriority,
      syria
    });
  });
});

//DETAIL
router.get("/Syria", (req, res) => {
  Force.find({ location: "Syria" }, (err, FoundOrder));
});

//CREATE
router.post("/", (req, res) => {
  if (req.body.urgent === "on") {
    req.body.urgent = true;
  } else {
    req.body.urgent = false;
  }

  Force.create(req.body, (error, newRequest) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect("/request");
    }
  });
});
//EDIT
router.get("/:id/edit", (req, res) => {
  Force.findById(req.params.id, (error, foundOrder) => {
    if (error) {
      console.log(error);
    } else {
      res.render("edit.ejs", {
        request: foundOrder
      });
    }
  });
});

//DELETE
router.delete("/:id", (req, res) => {
  Force.findByIdAndRemove(req.params.id, (err, deletedOrder) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/request");
    }
  });
});

//UPDATE Edit
router.put("/:id", (req, res) => {
  if (req.body.urgent === "on") {
    req.body.urgent = true;
  } else {
    req.body.urgent = false;
  }

  console.log("is this it", req.body);
  Force.findByIdAndUpdate(
    req.params.id,
    req.body,

    (err, updatedOrder) => {
      if (err) {
        console.log(err);
      } else {
        res.render("show.ejs", { foundOrder: updatedOrder });
      }
    }
  );
});

module.exports = router;
