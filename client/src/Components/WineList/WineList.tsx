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
  fruit: number, 
  acidity:number,
  tannins: number,
  body:number,
  dominantFlavors:string[], 
  arrPossibleFlavors:string[],
  overallRating: number,
}

interface WineListProps {
  user: IUser
}

export default function WineList({user}: WineListProps) {

  const [wineListDB, setWineListDB] = useState<IWineProps[]>([])

  // get tastings belonging to the user logged in
  useEffect(() => {
    const userId = user.userId
    ApiService.getTastings(userId)
      .then((res) => setWineListDB(res))
      // console.log(wineListDB.length)
  }, []);


  // i want it to reload whenever there is a change to the winelist, but it gives me an infinite loop
  // useEffect(() => {
  //   setWineListDB([])
  // }, [wineListDB])

  return (<div>
    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine) => {
        return (
        <div>
          {/* <WineCard wine={wine}/> */}
          {/* do we HAVE to include the userId and id here?  */}
          <WineCard
            key={wine.id}
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