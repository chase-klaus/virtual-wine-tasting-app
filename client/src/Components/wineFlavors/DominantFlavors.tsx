import * as React from 'react';
import { useState } from "react";
import {IWineType} from '../wineDB/WineDB';

type typeOfFlavor = string;
const FlavorObj:{[flavorName:string]:typeOfFlavor} = {};

interface IDominantFlavorsProps {
  grape:string,
  wineDB:{[index:string]:IWineType},
  updateDominantFlavors:(args:{ratingCompleted:boolean, flavors:typeof FlavorObj}) => void
}
export default function DominantFlavors({grape,wineDB,updateDominantFlavors}:IDominantFlavorsProps) {
  // type fruitType = {fruit:string};
  
  const [flavors, setFlavors] = useState(FlavorObj);
  
  const  updateFlavors = (flavor:string):void => {
    if (flavors[flavor]) {
      delete flavors[flavor];
      setFlavors((prev) => ({
        ...prev,
      }));
    } else {
      setFlavors((prev) => ({
        ...prev,
        [flavor]: flavor,
      }));
    }
  }

  return (
  <div>
    <div className={"centered__container__dominant__flavors"}>
      <span className="dominant__flavor__headline">
        <h2>dominant flavors in {grape}</h2>
      </span>
      <div className='container__and__button'>
        <div className="dominant__flavors__container">
          {wineDB[grape].dominantFlavors.map((flavor:string) => (
            <div onClick={() => updateFlavors(flavor)} className={(flavors[flavor] === flavor ? 'dominant__flavors__box__toggled' : 'dominant__flavors__box')}>{flavor}</div>

          ))}
        </div>
        <button
          className='dominant__flavor__btn'
          onClick={() =>
            updateDominantFlavors({ ratingCompleted: true, flavors: flavors })
          }>
          next
        </button>
      </div>
    </div>
  </div>
  );
}
