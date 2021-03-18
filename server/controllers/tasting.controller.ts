import { Request, Response } from 'express';
import Tasting from '../models/tasting.model';
import User from '../models/user.model';

// Create and Save a new Tasting
export async function create(req: Request, res: Response) {
  console.log(req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Save Tasting in the database
  try {
    // console.log(req.body);
    // const { userId, ...tasting } = req.body;
    const data = await Tasting.create(req.body, {include:[{model: User, as: 'tastings'}]});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Some error occurred while creating the Tasting."
    });
  }
};

// Retrieve all Tastings from the database.
export function findAll(req: Request, res: Response) {
  const id = req.params.id;

  Tasting.findAll({ where: { userId: id } })
    .then(data => {
      res.send(data);
      res.status(200);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// // Delete a Tasting with the specified id in the request
export const deleteTasting = (req: Request, res: Response) => {
  const id = req.params.id;

  Tasting.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tasting was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tasting with id=${id}. Maybe Tasting was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tasting with id=" + id
      });
    });
};

// // Find a single Tasting with an id
// export function findOne(req: Request, res: Response) {
// };

// // Update a Tasting by the id in the request
// export function update(req: Request, res: Response) {
// };


// maybe send an update --> PUT 
// update opinions 
// on the final --> put additional notes 

// default export { create, findOne, update, findAll }
