import { Request, Response } from 'express';
import Tasting from '../models/tasting.model';

// interface ITasting {
//   userId: number,
//   winery: string,
//   year: number,
//   grape: string,
//   fruit: string,
//   acidity: number,
//   tannins: number,
//   body: number,
//   dominantFlavors: string[],
//   arrPossibleFlavors: string[],
//   overallRating: number,
// }
// Create and Save a new Tasting
export async function create(req: Request, res: Response) {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Tasting
  // const tasting = {
  //   userId: req.body.userId,
  //   winery: req.body.winery,
  //   year: req.body.year,
  //   grape: req.body.grape,
  //   fruit: req.body.fruit,
  //   acidity: req.body.acidity,
  //   tannins: req.body.tannins,
  //   body: req.body.year,
  //   dominantFlavors: req.body.dominantFlavors,
  //   arrPossibleFlavors: req.body.arrPossibleFlavors,
  //   overallRating: req.body.overallRating,
  // };
  // const {userId, winery, year, grape, fruit, acidity, tannins, body, dominantFlavors, arrPossibleFlavors, overallRating} = req.body;
  
  // Save Tasting in the database
  try {
    console.log(req.body);
    const data = await Tasting.create({...req.body})
    res.status(200).json(data);
  } catch (error) {
    console.log(req.body)
          res.status(500).send({
        message:"Some error occurred while creating the Tasting."
      });
  }

  //Tasting.create(tasting)
    // .then(data => {
    //   res.send(data);
    //   res.status(200);
    // })
    // .catch(err => {

    // });
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

// Delete a Tasting with the specified id in the request
export function deleteTasting (req: Request, res: Response) {
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
