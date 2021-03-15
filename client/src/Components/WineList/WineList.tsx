import * as React from 'react';
import WineCard from '../WineCard/WineCard';
import ApiService from '../ApiService';
import { useEffect, useState } from 'react';

interface IUserProps {
  mail:string, 
  password:string, 
  userId:number
}

// interface IWineProps {
//   id:number, 
//   winery:string, 
//   year:number, 
//   grape:string, 
//   fruit: string, 
//   acidity:string,
//   tannins: string,
//   body:string,
//   dominantFlavors:string[], 
//   arrPossibleFlavors:string[],
//   overallRating: number,
// }

export default function WineList(user:IUserProps) {

  const [wineListDB, setWineListDB] = useState([])

  useEffect(() => {
    ApiService.getTastings(user.userId)
      .then((res) => setWineListDB(res))
  }, [wineListDB])


  return (<div>

    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine) => {
        return (
        <div>
          <WineCard 
          id={wine.id}
          winery={wine.winery} 
          year={wine.year} 
          grape={wine.grape} 
          fruit={wine.fruit} 
          acidity={wine.acidity} 
          tannins={wine.tannins} 
          body={wine.body} 
          dominantFlavors={wine.dominantFlavors} 
          arrPossibleFlavors={wine.arrPossibleFlavors} 
          overallRating={wine.overallRating} ></WineCard>
        </div>)
      })}
    </div> : <div>LOADING DATA</div>}

  </div>)

}