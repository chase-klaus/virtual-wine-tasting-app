'use strict';

const User = require('../models/user.model');

// Create and save a new User
const create = async (req, res) => {
  const { mail, password } = req.body;
  if (!mail) return res.status(400).send({ message: "Content can not be empty!"})
  try {
    const data = await User.create({...req.body})
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({message:"Some error occurred while creating the User."});
  }
};

// GET USER BY ID
const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findByPk(id)
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({message: "Error retrieving User with id=" + id});
  }
};

const findAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (!users) return res.status(500).json({error:"no users in database"})
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500)
    console.log(err, "Some erorr occurred while retrieving users.")
  }
};

module.exports = { create, findAllUsers, findOne}



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