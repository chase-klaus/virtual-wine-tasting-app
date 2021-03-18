import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY || 'thisisourwinetastingapp';

  interface IUser {
    id:number, 
    mail:string, 
    password:string
  }

export const create = async (req:Request, res:Response) => {
  const { mail, password } = req.body;
  const user = await User.findOne({where:{mail:mail}});
  
  if (!mail || !password) return res.status(400).send({error:"400", message:"Please fill out all fields"});
  
  if (user) return res.status(400).send({error:"409", message:"User already exists"});
  
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser:any = await User.create({ mail:mail, password:hash });
    const {id} = newUser; 
    const token = jwt.sign({id}, SECRET_KEY);
    // res.status(200).json(newUser);
    res.status(200).send({token});

  } catch (err) {
    res.status(500);
    console.log(err, "Something went v wrong in create user");
  }
};


export async function login(req: Request, res: Response) {
  console.log(req.body);
  const { mail, password } = req.body;
  try {
    const user: any = await User.findOne( {where: { mail: mail }});
    // console.log(user)
    const validatePass: boolean = await bcrypt.compare(password, user.password);
    console.log(validatePass);
    if (!validatePass) throw new Error();
    const token = jwt.sign({ id: user.id }, SECRET_KEY);
    console.log(user.id);
    res.status(200).send(token);
  } catch (err) {
    res.status(500);
    console.log(err, "Could not login");
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
