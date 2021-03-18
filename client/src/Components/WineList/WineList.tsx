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
  const fetchDB = async () => {
    const res = await ApiService.getTastings(user.userId);
    setWineListDB(res);
  }

  // useEffect(() => {
  //   fetchDB();
  // }, []);
  useEffect(() => {
    fetchDB();
  }, [wineListDB]);


  // useEffect(() => {
  //   const userId = user.userId
  //   const wineDB = ApiService.getTastings(userId)
  //   function setWineDB(wineDB) {
  //     setWineListDB(wineDB)}
  //     // ((data) => setWineListDB(data))
  //     // console.log(wineListDB.length)
  // }, [wineListDB]);

  return (<div>
    {wineListDB ? <div className="wine__card__container">
      {wineListDB.map((wine, index) => {
        return (
        <div>
          {/* <WineCard wine={wine}/> */}
          {/* do we HAVE to include the userId and id here?  */}
          <WineCard
            key={index}
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