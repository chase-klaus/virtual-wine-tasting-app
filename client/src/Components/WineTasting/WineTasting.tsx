import React, { useState } from "react";
import FruitRating from "../wineProfile/FruitRating";
import BodyRating from "../wineProfile/BodyRating";
import TanninsRating from "../wineProfile/TanninsRating";
import AcidityRating from "../wineProfile/AcidityRating";
import DominantFlavors from "../wineFlavors/DominantFlavors";
import PossibleFlavors from "../wineFlavors/PossibleFlavors";
import WineDB from "../wineDB/WineDB";
import OverallRating from "../wineOverallRating/OverallRating";

interface IUser {
  mail: string;
  password: string;
  userId: number;
  // user: any
}

interface IFlavors<T> {
  flavors:T;
  ratingCompleted:boolean;
}


interface IPossibleFlavors {
  fruitFlavors: string[],
  dryFruitFlavors: string[],
  floralFlavors: string[],
  herbalFlavors: string[],
  spiceFlavors: string[],
  earthFlavors: string[],
  otherFlavors: string[],
}

type TypeDominantFlavors = IFlavors<string[]>;
type TypePossibleFlavors = IFlavors<IPossibleFlavors>;

interface WineTastingProps {
  user: IUser;
}

// interface IChangeGrapeProps {
//   handleChangeGrape: (event: React.ChangeEvent<HTMLInputElement>) => void
// }

export default function WineTasting({ user }: WineTastingProps) {

  const [startTasting, setStartTasting] = useState<boolean>(false);
  const [winery, setWinery] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [grape, setGrape] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [body, setBody] = useState<number|null>(0);
  const [fruit, setFruit] = useState<number|null>(0);
  const [tannins, setTannins] = useState<number|null>(0);
  const [acidity, setAcidity] = useState<number|null>(0);
  const [possibleFlavors, setPossibleFlavors] = useState<any>({});
  const [dominantFlavors, setDominantFlavors] = useState<any>([]);
  const [wineList, setWineList] = useState<any>({});

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (winery && year && grape) {
      setWinery(winery);
      setYear(year);
      setGrape(grape.toLowerCase());
      setStartTasting(true);
    } else setError(true);
  }

  function handleChangeWinery(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setWinery(event.target.value);
  }

  function handleChangeYear(event: React.ChangeEvent<HTMLInputElement>) {
    if (error) setError(false);
    setYear(event.target.value);
  }

  function handleChangeGrape(event: React.ChangeEvent<HTMLSelectElement>) {
    if (error) setError(false);
    setGrape(event.target.value);
  }

  function showRatingOfFruit() {
    return startTasting === true && fruit === 0;
  }

  function showRatingOfAcidity() {
    return fruit !== 0 && acidity === 0;
  }

  function showRatingOfTannins() {
    return acidity !== 0 && tannins === 0;
  }

  function showRatingOfWineBody() {
    return tannins !== 0 && body === 0;
  }

  function updateBody(event: React.ChangeEvent<{}>, value: number|null) {
    setBody(value);
  }

  function updateFruit(event: React.ChangeEvent<{}>, value: number|null) {
    setFruit(value);
  }

  function updateTannins(event: React.ChangeEvent<{}>, value: number|null) {
    setTannins(value);
  }

  function updateAcidity(event: React.ChangeEvent<{}>, value: number|null) {
    setAcidity(value);
  }

  function updateDominantFlavors(flavors:TypeDominantFlavors) {
    setDominantFlavors(flavors);
  }

  function updatePossibleFlavors(flavors: TypePossibleFlavors) {
    setPossibleFlavors(flavors);
  }

  function submitRating(value: number) {

    let arrDominantFlavors = Object.values(dominantFlavors.flavors);
    // PossibleFlavors(Nested Object) will be transformed in an 1 dimensional Array
    let arrPossibleFlavors = (Object.values(possibleFlavors).filter(value => Object.keys((value) as any[]).length !== 0).map(element => Object.values((element) as any[])));

    setWineList(
      {
        userId: user.userId,
        winery: winery,
        year: year,
        grape: grape,
        fruit: fruit,
        acidity: acidity,
        tannins: tannins,
        body: body,
        dominantFlavors: arrDominantFlavors,
        arrPossibleFlavors: arrPossibleFlavors,
        // possibleFlavors: possibleFlavors,
        overallRating: value,
      }
    )
  }

  return (
    <div>
      {startTasting === false ? (<div className='centered__container__start__tasting'>
        {console.log("render happening")}
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <label htmlFor='new-wine-tasting'>New Wine Tasting</label>
            <input
              id='new-wine-tasting'
              className="start__tasting__input"
              type="text"
              value={winery}
              onChange={handleChangeWinery}
              placeholder="Type in name of winery ..."
            ></input>
            <input
              className="start__tasting__input"
              type='number'
              min={1930}
              max={2030}
              value={year}
              onChange={handleChangeYear}
              placeholder="Type in year ..."
            ></input>
            <select value={grape} onChange={handleChangeGrape} name="grape" className="start__tasting__input">
              <option disabled={true} value="">select grape variety</option>
              <option value='malbec'>Malbec</option>
              <option value='merlot'>Merlot</option>
              <option value='syrah'>Syrah</option>
              <option value='riesling'>Riesling</option>
              <option value='gewürztraminer'>Gewürztraminer</option>
              <option value='cabernetSauvignon'>Cabernet Sauvignon</option>
              <option value='pinotNoir'>Pinot Noir</option>
            </select>
            <button type="submit" className="start__tasting__btn">start tasting</button>
          </form>
        </div>
      </div>) : (
        <></>
      )}

      {showRatingOfFruit() ? (
        <FruitRating fruit={fruit} updateFruit={updateFruit} />
      ) : (
        <></>
      )}

      {showRatingOfAcidity() ? (
        <AcidityRating acidity={acidity} updateAcidity={updateAcidity} />
      ) : (
        <></>
      )}

      {showRatingOfTannins() ? (
        <TanninsRating tannins={tannins} updateTannins={updateTannins} />
      ) : (
        <></>
      )}

      {showRatingOfWineBody() ? (
        <BodyRating body={body} updateBody={updateBody} />
      ) : (
        <></>
      )}

      {body !== 0 && !dominantFlavors.ratingCompleted ? (
        <DominantFlavors
          updateDominantFlavors={updateDominantFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {dominantFlavors.ratingCompleted && !possibleFlavors.ratingCompleted ? (
        <PossibleFlavors
          updatePossibleFlavors={updatePossibleFlavors}
          grape={grape}
          wineDB={WineDB}
        />
      ) : (
        <></>
      )}

      {possibleFlavors.ratingCompleted === true ? (
        <OverallRating submitRating={submitRating} wineList={wineList} />
      ) : (
        <></>
      )}

    </div>

  );
}