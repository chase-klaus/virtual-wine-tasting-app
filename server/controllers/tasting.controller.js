'use strict';

// const db = require("../models");
const Tasting = require('../models/tasting.model');
// const Op = db.Sequelize.Op;

// Create and Save a new Tasting
const create = async (req, res) => {
  // Validate request
  //if (!req.body.user) {
  if (!req.body.winery) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tasting
  const tasting = {
    userId: req.body.userId,
    winery: req.body.winery,
    year: req.body.year,
    grape: req.body.grape,
    fruit: req.body.fruit,
    acidity: req.body.acidity,
    tannins: req.body.tannins,
    body: req.body.year,
    dominantFlavors: req.body.dominantFlavors,
    arrPossibleFlavors: req.body.arrPossibleFlavors,
    overallRating: req.body.overallRating,
  };

  // Save Tasting in the database
  const data = await Tasting.create(tasting)
    //Tasting.create(tasting)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tasting."
      });
    });
};

// Retrieve all Tastings from the database.
const findAll = (req, res) => {
  const id = req.params.id;

  Tasting.findAll({where: {userId: id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// // Delete a Tasting with the specified id in the request
// const deleteTasting = (req, res) => {
//   const id = req.params.id;

//   Tasting.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Tasting was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Tasting with id=${id}. Maybe Tasting was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tasting with id=" + id
//       });
//     });
// };

// Find a single Tasting with an id
const findOne = (req, res) => {
};

// Update a Tasting by the id in the request
const update = (req, res) => {
};


// maybe send an update --> PUT 
// update opinions 
// on the final --> put additional notes 

module.exports = { create, findOne, update }