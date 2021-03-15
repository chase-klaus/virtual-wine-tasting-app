"use strict";
// import * as express from 'express';
import {Request, Response} from 'express';
const User = require("../models/user.model");

interface User {
  mail: string;
  password: string;
}

const create = async (req:Request, res:Response) => {
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

const findOne = async (req:Request, res:Response) => {
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

const findAllUsers = async (res:Response) => {
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

module.exports = { create, findAllUsers, findOne}
