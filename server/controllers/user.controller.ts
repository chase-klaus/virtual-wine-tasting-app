import { Request, Response } from 'express';
import User from '../models/user.model';

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



export const test = async (req:Request, res:Response) => {
    res.status(200).send('from router')
}

export async function findOne (req: Request, res: Response) {
  const id = req.params.id;
  try {
    const data = await User.findByPk(id);
    // res.json(data);
    res.status(200).send(data);
  } catch (err) {
    res.status(500);
    console.log(err, "Error retrieving User with id=" + id);
  }
};

export async function findOneByMail (req: Request, res: Response) {
  // const mail = req.body.mail;
  const mail = req.params.mail;
  const user = await User.findOne({where:{mail:mail}});
  if(!user) return res.status(500).send({message:"not found"});
  try {
    // if(!user) return res.status(404);
    res.status(200).send(user);
  } catch (err) {
    res.status(500);
    console.log(err, "Error retrieving User with email= " + mail);
  }
};

export const findAllUsers = async (req: Request, res:Response) => {
  const users = await User.findAll();
  if (!users) return res.status(404);
  try {
    res.status(200);
    res.json(users);
  } catch (err) {
    res.status(500);
    console.log(err, "Some error occurred while retrieving users.");
  }
};
