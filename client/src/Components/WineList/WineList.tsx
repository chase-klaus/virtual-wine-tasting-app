import * as React from 'react';
import WineCard from '../WineCard/WineCard';
import ApiService from '../ApiService';
import { useEffect, useState } from 'react';
// import { IWineType } from 'Components/wineDB/WineDB';

interface IUser {
  mail:string, 
  password:string, 
  userId:number
}

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

interface WineListProps {
  user: IUser
}

export default function WineList({user}: any) {

  const [wineListDB, setWineListDB] = useState<IWineProps[]>([])

  useEffect(() => {
    ApiService.getTastings(user.userId)
      .then((res) => setWineListDB(res))
  }, [wineListDB])


  return (<div>

    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine, index) => {
        return (
        <div>
          {/* <WineCard wine={wine}/> */}
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
            overallRating={wine.overallRating} 
          />
        </div>)
      })}
    </div> : <div>LOADING DATA</div>}

  </div>)

}