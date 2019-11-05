//////////////DEPENDENCIES////////////////////
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose").set("debug", true);

//////////////MODELS///////////////////
const Requests = require("../models/request.js");

//////////////ROUTES////////////////////

//INDEX
router.get("/", (req, res) => {
  res.send("index");
});
//NEW
router.get("/new", (req, res) => {
  res.send("new");
});

//SHOW
router.get("/:index", (req, res) => {
  res.send("show");
});

//CREATE
router.post("/", (req, res) => {
  res.send("create");
  x;
});
//EDIT
router.get("/:id/edit", (req, res) => {
  res.send("edit");
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
