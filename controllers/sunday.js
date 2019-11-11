//////////////DEPENDENCIES////////////////////
const express = require("express");
const router = express.Router();
//const mongoose = require("mongoose").set("debug", true);

//////////////MODELS///////////////////
const Force = require("../models/request.js");

//////////////ROUTES////////////////////

//INDEX
router.get("/", (req, res) => {
  let site = [
    {
      name: "WorldWide",
      qtyByItem: [],
      requests: [],
      regularPriority: [],
      urgentPriority: []
    },
    {
      name: "Sudan",
      qtyByItem: [],
      requests: [],
      regularPriority: [],
      urgentPriority: []
    },
    {
      name: "Syria",
      qtyByItem: [],
      requests: [],
      regularPriority: [],
      urgentPriority: []
    },
    {
      name: "Malaysia",
      qtyByItem: [],
      requests: [],
      regularPriority: [],
      urgentPriority: []
    },
    {
      name: "Venezuela",
      qtyByItem: [],
      requests: [],
      regularPriority: [],
      urgentPriority: []
    }
  ];

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
  //pull data from db first for all sites and then by site
  Force.find({}, (error, allRequests) => {
    if (error) {
      res.send(error);
    }
    //site[0].requests = allRequests;

    let arr = allRquests;

    site[0].urgent = arr.reduce((acc, val) => {
      return val.urgent ? acc + 1 : acc;
    }, 0);

    site[0].urgentPriority = [];
    site[0].regularPriority = [];
    allRequests.forEach(element => {
      if (element.urgent) site[0].urgentPriority.push(element);
      else site[0].regularPriority.push(element);
    });
    const rankedDemand = [];

    
  prescriptions.forEach(item => {
      let count = 0;
      allRequests.forEach(element=>{
        if (element.item >0) count++;
      });
        rankedDemand.push([item, count]);
  });
    medicalSupplies.forEach(item => {
      let count = 0;
      allRequests.forEach(element=>{
        if (element.item >0) count++;
      });
        rankedDemand.push([item, count]);
  });
  //sort demand

  rankedDemand.sort(function(a, b) {
    return a[1] - b[1];
});
console.log(rankedDemand);

});






  
  // for (let i = 1; i < site.length; i++) {
  //   //get data by location
  //   Force.find({ location: site[i].name }, (error, allRequests) => {
  //     if (error) {
  //       res.send(error);
  //     }
  //     site[i].requests = allRequests;
  //     let arr = site[i].requests;
  //     site[i].urgent = arr.reduce((acc, val) => {
  //       return val.urgent ? acc + 1 : acc;
  //     }, 0);

  //     if (site[i].urgent) site[i].urgentPriority.push(element);
  //     else element.regularPriority.push(element);
  //   });
  // }

  // //function to aggregate data across results
  // const sumQty = (item, arr) => {
  //   let sum = arr.reduce((acc, val) => {
  //     return acc + val.item;
  //   }, 0);
  // };

  // //function to sort by type of urgency and supply type
  // const requestRatio = (arr, checkArr) => {
  //   let count = 0;
  // };

  // site[0].urgentRXCount = requestRatio(site[0].urgentPriority, prescriptions);
  // let regularRXCount = requestRatio(site[0].regularPriority, prescriptions);
  // let urgentMSCount = requestRatio(site[0].urgentPriority, medicalSupplies);
  // let regularMSCount = requestRatio(site[0].regularPriority, medicalSupplies);

  // //aggregate data by location and count each item requested
  // site.forEach(location => {
  //   let requests = location.requests;
  //   prescriptions.forEach(item => {
  //     location.qtyByItem.push([{ item: sumQty(item, requests) }]);

  //   });
  //   for (let i = 0; i < qtyByItem.length; i++){
      
  //   }location.qtyByItem
  //   medicalSupplies.forEach(item => {
  //     location.qtyByItem.push([{ item: sumQty(item, requests) }]);
  //   });

    res.render("index.ejs", { site: site });
  });

  //   arr.forEach(request => {
  //     let keyArr = Object.keys(request._doc);
  //     console.log(keyArr);
  //     keyArr.forEach(element => {
  //       if (checkArr.includes(element)) count++;
  //     });
  //   });
  //   return count;
  // };

  // let urgentRXCount = requestRatio(urgentPriority, prescriptions);
  // let regularRXCount = requestRatio(regularPriority, prescriptions);
  // let urgentMSCount = requestRatio(urgentPriority, medicalSupplies);
  // let regularMSCount = requestRatio(regularPriority, medicalSupplies);
  // console.log(urgentRXCount, urgentMSCount, regularRXCount, regularMSCount);

  //display results
  // res.render("index.ejs", {
  //   site: site,
  //   urgentPriority,
  //   regularPriority,
  //   urgentRXCount,
  //   urgentMSCount,
  //   regularRXCount,
  //   regularMSCount
  // });

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
