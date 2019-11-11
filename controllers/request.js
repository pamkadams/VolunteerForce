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
    if (error) {
      res.send(error);
    }

    //variables to sort and analyze the data
    let urgentPriority = [];
    let regularPriority = [];
    let num = 0;
    let medicalSupplies = [
      "saline_bags",
      "iv_supplies",
      "tape",
      "gauze",
      "bandages_2x2",
      "bandages_4x4:",
      "bandages_6x9",
      "aspirin",
      "gluscose"
    ];
    let prescriptions = [
      "benznidazole",
      "albuterol",
      "Fexinidazole",
      "rifampicin",
      "ASMQ",
      "NECT"
    ];

    let sudanUrgent = 0;
    let syriaUrgent = 0;
    let malaysianUrgent = 0;
    let venezuelaUrgent = 0;
    let regularUrgent = [];
    let sortUrgent = [];

    //sort the data by urgency
    allRequests.forEach(request => {
      if (request.urgent) urgentPriority.push(request);
      else regularPriority.push(request);
    });

    //highest demand site

    urgentPriority.forEach(request => {
      switch (request.location) {
        case "Sudan":
          sudanUrgent++;
          break;
        case "Syria":
          syriaUrgent++;
          break;
        case "Malyasia":
          malaysiaUrgent++;
          break;
        case "Venezuela":
          venezuelaUrgent++;
          break;
        default:
          break;
      }
    });
    sortUrgent = [
      ["Sudan", sudanUrgent],
      ["Syria", syriaUrgent],
      ["Malyasia", malaysianUrgent],
      ["Venezuela", venezuelaUrgent]
    ];
    function sortNumber(a, b) {
      return a[1] - b[1];
    }
    sortUrgent.sort(sortNumber);
    console.log("sort", sortUrgent);

    //highest regular site
    sudanUrgent = 0;
    syriaUrgent = 0;
    malaysianUrgent = 0;
    venezuelaUrgent = 0;
    regularPriority.forEach(request => {
      switch (request.location) {
        case "Sudan":
          sudanUrgent++;
          break;
        case "Syria":
          syriaUrgent++;
          break;
        case "Malyasia":
          malaysiaUrgent++;
          break;
        case "Venezuela":
          venezuelaUrgent++;
          break;
        default:
          break;
      }
    });
    sortRegular = [
      ["Sudan", sudanUrgent],
      ["Syria", syriaUrgent],
      ["Malyasia", malaysianUrgent],
      ["Venezuela", venezuelaUrgent]
    ];
    function sortNumber(a, b) {
      return a[1] - b[1];
    }
    sortUrgent.sort(sortNumber);
    console.log("sort", sortRegular);

    //function to sort by type of urgency and supply type
    const requestRatio = (arr, checkArr) => {
      let count = 0;

      arr.forEach(request => {
        let keyArr = Object.keys(request._doc);
        //console.log(keyArr);
        keyArr.forEach(element => {
          if (checkArr.includes(element)) count++;
        });
      });
      return count;
    };

    let urgentRXCount = requestRatio(urgentPriority, prescriptions);
    let regularRXCount = requestRatio(regularPriority, prescriptions);
    let urgentMSCount = requestRatio(urgentPriority, medicalSupplies);
    let regularMSCount = requestRatio(regularPriority, medicalSupplies);
    console.log(urgentRXCount, urgentMSCount, regularRXCount, regularMSCount);

    //display results
    res.render("index.ejs", {
      urgentPriority,
      regularPriority,
      urgentRXCount,
      urgentMSCount,
      regularRXCount,
      regularMSCount,
      sortUrgent,
      sortRegular
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
