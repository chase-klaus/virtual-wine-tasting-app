import {Request, Response} from 'express';
import User from "../models/user.model";

// interface IUser {
//   mail: string;
//   password: string;
// }

export const create = async (req:Request, res:Response) => {
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

export const findOne = async (req:Request, res:Response) => {
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

export const findAllUsers = async (res:Response) => {
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
