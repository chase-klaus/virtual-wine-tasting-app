import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/user.model';
const SECRET_KEY = process.env.SECRET_KEY || 'thisisourwinetastingapp';

export const create = async (req: Request, res: Response) => {
  const user = await User.findOne({ where: { mail: req.body.mail } });
  if (user)
    return res
      .status(409)
      .send({ error: "409", message: "User already exists " });
  try {
    if (req.body.password === "") throw new Error();
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser: any = await User.create({
      mail: req.body.mail,
      password: hash,
    });
    console.log(newUser);
    const { id } = await newUser.save();
    const token = jwt.sign({ id }, SECRET_KEY)
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error, message: "Could not create user" });
  }
};

export async function login(req: Request, res: Response) {
  console.log(req.body);
  const { password } = req.body;
  try {
    const user: any = await User.findOne( {where: { mail: req.body.mail }});
    const validatePass: any = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();
    const token = jwt.sign({ id: user.id }, SECRET_KEY);
    console.log(token);
    res.status(200).send(token);
  } catch (err) {
    res.status(500);
    console.log(err, "Could not login");
  }
};

export async function findOneByMail(req: Request, res: Response) {
  const mail = req.params.mail;
  try {
    const user = await User.findOne({ where: { mail: mail } });
    res.json(user);
    res.status(200);
  } catch (err) {
    res.status(500);
    console.log(err, "Error retrieving User with mail= " + mail);
  }
}

export const findAllUsers = async (req: Request, res: Response) => {
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
