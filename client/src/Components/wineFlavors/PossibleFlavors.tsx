import * as React from 'react';
import { useState } from 'react';
import { IWineType } from '../wineDB/WineDB'

//do i have to be more specific about types of flavors? 
// type typeOfFlavor = string;
const FlavorObj:{[index:string]:string} = {};

interface IPossibleFlavorsProps {
  grape:string,
  wineDB:{[index:string]:IWineType},
  // updatePossibleFlavors:{[index:string]:string[]},
  updatePossibleFlavors:(possibleFlavorName:{ fruitFlavors:typeof FlavorObj, 
                                              dryFruitFlavors:typeof FlavorObj, 
                                              floralFlavors:typeof FlavorObj, 
                                              herbalFlavors:typeof FlavorObj, 
                                              spiceFlavors:typeof FlavorObj, 
                                              earthFlavors:typeof FlavorObj, 
                                              otherFlavors:typeof FlavorObj, 
                                              ratingCompleted:boolean,}) => void
}

//will it still be able to reach the reference to the ./winedb file?
export default function PossibleFlavors({ updatePossibleFlavors, grape, wineDB }:IPossibleFlavorsProps) {
  // type fruitType = {fruit:string};
  
  const [fruitFlavors, setFruitFlavors] = useState(FlavorObj);
  const [dryFruitFlavors, setDryFruitFlavors] = useState(FlavorObj);
  const [floralFlavors, setFloralFlavors] = useState(FlavorObj);
  const [herbalFlavors, setHerbalFlavors] = useState(FlavorObj);
  const [spiceFlavors, setSpiceFlavors] = useState(FlavorObj);
  const [earthFlavors, setEarthFlavors] = useState(FlavorObj);
  const [otherFlavors, setOtherFlavors] = useState(FlavorObj);

  const updateFruitFlavors = (fruit:string) => {
    if (fruitFlavors[fruit] === fruit) {
      delete fruitFlavors[fruit]
      setFruitFlavors(prev => ({
        ...prev
      }))
    } else {
      setFruitFlavors(prev => ({
        ...prev,
        [fruit]: fruit
      }))
    }
  }

  function updateDryFruitFlavors(dryFruit:string) {
    if (dryFruitFlavors[dryFruit] === dryFruit) {
      delete dryFruitFlavors[dryFruit]
      setDryFruitFlavors(prev => ({
        ...prev
      }))
    } else {
      setDryFruitFlavors(prev => ({
        ...prev,
        [dryFruit]: dryFruit
      }))
    }
  }

  function updateFloralFlavors(floral:string) {
    if (floralFlavors[floral] === floral) {
      delete floralFlavors[floral]
      setFloralFlavors(prev => ({
        ...prev
      }))
    } else {
      setFloralFlavors(prev => ({
        ...prev,
        [floral]: floral
      }))
    }
  }

  function updateHerbalFlavors(herbal:string) {
    if (herbalFlavors[herbal] === herbal) {
      delete herbalFlavors[herbal]
      setHerbalFlavors(prev => ({
        ...prev
      }))
    } else {
      setHerbalFlavors(prev => ({
        ...prev,
        [herbal]: herbal
      }))
    }
  }

  function updateSpiceFlavors(spice:string) {
    if (spiceFlavors[spice] === spice) {
      delete spiceFlavors[spice]
      setSpiceFlavors(prev => ({
        ...prev
      }))
    } else {
      setSpiceFlavors(prev => ({
        ...prev,
        [spice]: spice
      }))
    }
  }

  function updateEarthFlavors(earth:string) {
    if (earthFlavors[earth] === earth) {
      delete earthFlavors[earth]
      setEarthFlavors(prev => ({
        ...prev
      }))
    } else {
      setEarthFlavors(prev => ({
        ...prev,
        [earth]: earth
      }))
    }
  }

  function updateOtherFlavors(other:string) {
    if (otherFlavors[other] === other) {
      delete otherFlavors[other]
      setOtherFlavors(prev => ({
        ...prev
      }))
    } else {
      setOtherFlavors(prev => ({
        ...prev,
        [other]: other
      }))
    }
  }

  return (
  <div>
    <div className={"centered__container__possible__flavors"}>
      <div>
        <span className='possible__flavor__headline'>
          <h2>possible flavors in {grape}</h2>
        </span>
        <div className='possible__flavors'>
          {wineDB[grape].possibleFlavors.fruits.map((fruit:string) => <div
            onClick={() => updateFruitFlavors(fruit)}
            className={(fruitFlavors[fruit] === fruit ? 'toggled__flavor__box' : '') + ' flavor__box'} ><h6 className='fruit'>fruit flavor</h6>{fruit}</div>)}

          {wineDB[grape].possibleFlavors.dryFruits.map((dryFruit:string) => <div
            onClick={() => updateDryFruitFlavors(dryFruit)}
            className={(dryFruitFlavors[dryFruit] === dryFruit ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='dry__fruit'>dry fruit flavor</h6>{dryFruit}</div>)}

          {wineDB[grape].possibleFlavors.florals.map((floral:string) => <div
            onClick={() => updateFloralFlavors(floral)}
            className={(floralFlavors[floral] === floral ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='floral'>floral flavor</h6>{floral}</div>)}

          {wineDB[grape].possibleFlavors.herbs.map((herb:string) => <div
            onClick={() => updateHerbalFlavors(herb)}
            className={(herbalFlavors[herb] === herb ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='herbal'>herbal flavor</h6>{herb}</div>)}

          {wineDB[grape].possibleFlavors.spices.map((spice:string) => <div
            onClick={() => updateSpiceFlavors(spice)}
            className={(spiceFlavors[spice] === spice ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='spice'>spice flavor</h6>{spice}</div>)}

          {wineDB[grape].possibleFlavors.earthFlavors.map((earthFlavor:string) => <div
            onClick={() => updateEarthFlavors(earthFlavor)}
            className={(earthFlavors[earthFlavor] === earthFlavor ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='earth'>eath flavor</h6>{earthFlavor}</div>)}

          {wineDB[grape].possibleFlavors.others.map((other:string) => <div
            onClick={() => updateOtherFlavors(other)}
            className={(otherFlavors[other] === other ? 'toggled__flavor__box' : '') + ' flavor__box'}><h6 className='other'>other flavor</h6>{other}</div>)}
        </div>
        <button onClick={() =>
          updatePossibleFlavors({ fruitFlavors, dryFruitFlavors, floralFlavors, herbalFlavors, spiceFlavors, earthFlavors, otherFlavors, ratingCompleted: true })}
          className='possible__flavors__button'>next</button>
      </div>
    </div>
  </div>

  );
}

