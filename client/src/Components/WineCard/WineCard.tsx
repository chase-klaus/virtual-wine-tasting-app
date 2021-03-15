import * as React from 'react';
import ApiService from '../ApiService';
import { useState } from "react";

import bottle from "../pictures/bottle.svg";
import bin from "../pictures/bin.svg"

// RATING IS READ ONLY
import Rating from '@material-ui/lab/Rating/index';
import Box from '@material-ui/core/Box/index';

// do i need to define it or will it be inferred? 
// interface IValue {
//   value:number
// }
interface IWineProps {
  id:number, 
  winery:string, 
  year:number, 
  grape:string, 
  fruit: string, 
  acidity:string,
  tannins: string,
  body:string,
  dominantFlavors:string[], 
  arrPossibleFlavors:string[],
  overallRating: number,
}

// TODO double check that these are correctly named as strings, they could be arrays of strings, actually, but since we are mapping... 

export default function WineCard(wine:IWineProps ) {

  const [value, setValue] = useState(wine.overallRating);

  return (
    <div className='wine__card'>
      <div onClick={() => ApiService.deleteTasting(wine.id)} className="delete__btn__wine__card"><img src={bin} alt="bin delete sybol" className="bin__delete__symbol"></img></div>
      <div className="wrapper__wine__card">
        <div className="wine__card__headline">
          <div className="wine__card__winery">{wine.winery}</div>
          <div className="wine__card__year">{wine.year}</div>
          <div className="wine__card__grape">{wine.grape}</div>
        </div>

        <div className="image__wrap__wine__card">
          <div><img alt="bottle" src={bottle}  id={wine.grape} className="bottle__image" /*fill="#d82525"*/></img></div> 
          <div className="wine__card__more__information">
            <div className="hover__profile__wine__card">
              <div>Fruit: {wine.fruit} / 5</div>
              <div>Acidity: {wine.acidity} /5 </div>
              <div>Tannins: {wine.tannins} / 5</div>
              <div>Body: {wine.body} / 5</div>
            </div>
            <div className="hover__flavors__wine__card">
              <div className='wine__card__flavors'>Dominant Flavors: {wine.dominantFlavors.map((flavor:string) => <div className='single__flavor'>{flavor} </div>)}</div>
              <div className='wine__card__flavors'>PossibleFlavors Flavors: {wine.arrPossibleFlavors.map((flavor:string) => <div className='single__flavor'>{flavor}</div>)}</div>
            </div>
          </div>
        </div>

        <div className="wine__card__rating">
          <Box component="fieldset" mb={3} borderColor="transparent" className="hola">
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </div>
      </div>
    </div>

  )
}