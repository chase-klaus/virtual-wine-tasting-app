import WineCard from '../WineCard/WineCard';
import ApiService from '../ApiService';
import { useEffect, useState } from 'react';


interface IUser {
  mail:string, 
  password:string, 
  id:number
}

interface IWineProps {
  id:number, 
  userId:number,
  winery:string, 
  year:number, 
  grape:string, 
  fruit:number, 
  acidity:number,
  tannins:number,
  body:number,
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
    console.log(user);
    const userId = user.id;
    ApiService.getTastings(userId)
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