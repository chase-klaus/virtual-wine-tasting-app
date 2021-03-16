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

//not including the id bc that one is automatically assigned by pg
interface IWineProps {
  id:number, 
  userId:number, 
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

export default function WineList({user}: WineListProps) {

  const [wineListDB, setWineListDB] = useState<IWineProps[]>([])

  useEffect(() => {
    const dbId = user.userId
    ApiService.getTastings(dbId)
      .then((res) => setWineListDB(res))
  }, [])


  return (<div>

    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine, index) => {
        return (
        <div>
          {/* <WineCard wine={wine}/> */}
          <WineCard
            id={wine.id}
            userId={wine.userId}
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