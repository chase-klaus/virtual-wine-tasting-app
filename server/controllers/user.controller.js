"use strict";
const User = require("../models/user.model");

const create = async (req, res) => {
  console.log(req.body);
  const { mail, password } = req.body;
  if (!mail && password) return res.status(400);
  try {
    const user = await User.create({ ...req.body });
    res.status(200).json(user);
  } catch (err) {
    res.status(500);
    console.log(err, "Something went v wrong in create user");
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findByPk(id);
    res.json(data);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.log(err, "Error retrieving User with id=" + id);
  }
};

const findAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (!users) return res.status(404);
  try {
    res.json(users);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.log(err, "Some error occurred while retrieving users.");
  }
};

module.exports = { findAllUsers, create, findOne };
// if (!req.body.mail) {
//   res.status(400).send({
//     message: "Content can not be empty!"
//   });
//   return;
// }

// Create a new user
// const user = {
//   mail: req.body.mail,
//   password: req.body.password,
// };

// Save user in the database
// const data = await User.create(user)
// //User.create(tasting)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred while creating the User."
//     });
//   });

//   const id = req.params.id;
//   User.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving User with id=" + id,
//       });
//     });
// };

//GET USER BY MAIL
// exports.findOneByMail = (req, res) => {
//   const mail = req.params.mail;

//   User.findByPk(mail)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving User with mail=" + mail
//       });
//     });
// };
//   User.findAll()
//     .then(data => {
//       res.send(data);
//       console.log(err, "Some error occurred while retrieving users.")
//     })
//     .catch(err => {
//       .send({
//         message:
//           err.message || "Some error occurred while retrieving users."
//       });
//     });
