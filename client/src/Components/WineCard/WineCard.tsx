import ApiService from '../ApiService';
import { useState, useEffect } from "react";

import bottle from '../pictures/bottle.svg';
import bin from '../pictures/bin.svg';

// RATING IS READ ONLY
import Rating from '@material-ui/lab/Rating/index';
import Box from '@material-ui/core/Box/index';

interface IPossibleFlavors {
  fruitFlavors: string[],
  dryFruitFlavors: string[],
  floralFlavors: string[],
  herbalFlavors: string[],
  spiceFlavors: string[],
  earthFlavors: string[],
  otherFlavors: string[],
}

interface IWineProps {
  id:number, 
  userId:number,
  winery:string, 
  year:number, 
  grape:string, 
  fruit: number, 
  acidity:number,
  tannins: number,
  body:number,
  dominantFlavors:string[], 
  arrPossibleFlavors:string[], 
  // possibleFlavors:IPossibleFlavors,
  overallRating: number,
}

// TODO double check that these are correctly named as strings, they could be arrays of strings, actually, but since we are mapping... 
export default function WineCard( wine:IWineProps ) {
  // eslint-disable-next-line
  const [value, setValue] = useState(wine.overallRating);

const [wineListDB, setWineListDB] = useState<IWineProps[]>([])


  // when you delete something, make sure its deleted from the screen without having to refresh it
  // whenever the list of wine changes... 
  useEffect(()=>{
    setValue(wine.overallRating);
  }, [value])

  useEffect(()=>{
    ApiService.getTastings(wine.userId)
      .then((res) => setWineListDB(res))
  }, [setWineListDB])

  function handleDelete (userId:number, wineId:number) {
    ApiService.deleteTasting(wineId);
    ApiService.getTastings(userId)
      .then((res) => setWineListDB(res))
  }

  return (
    <div className='wine__card'>
      <div onClick={() => handleDelete(wine.userId, wine.id)} className="delete__btn__wine__card">
      {/* <div onClick={() => ApiService.deleteTasting(wine.id)} className="delete__btn__wine__card"> */}
        <img src={bin} alt="bin delete sybol" className="bin__delete__symbol"/>
      </div>
      <div className="wrapper__wine__card">
        <div className="wine__card__headline">
          <div className="wine__card__winery">{wine.winery}</div>
          <div className="wine__card__year">{wine.year}</div>
          <div className="wine__card__grape">{wine.grape}</div>
        </div>

        <div className="image__wrap__wine__card">
          <div>
            <img alt="bottle" src={bottle}  className="bottle__image"/>
          </div> 
          <div className="wine__card__more__information">
            <div className="hover__profile__wine__card">
              <div>Fruit: {wine.fruit} / 5</div>
              <div>Acidity: {wine.acidity} /5 </div>
              <div>Tannins: {wine.tannins} / 5</div>
              <div>Body: {wine.body} / 5</div>
            </div>
            <div className="hover__flavors__wine__card">
              <div className='wine__card__flavors'>
                Dominant Flavors: {wine.dominantFlavors.map((flavor:string) => 
                <div className='single__flavor'>{flavor}</div>)}
              </div>
              <div className='wine__card__flavors'>
                Possible Flavors: {wine.arrPossibleFlavors.map((flavor:string) => 
                <div className='single__flavor'> {flavor + ' '}</div>)}
              </div>
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
