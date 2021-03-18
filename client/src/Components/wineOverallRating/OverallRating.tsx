import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";
import ApiService from '../ApiService';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

interface OverallRatingProps {
  setValue?: (newValue: number | string) => void,
  submitRating: (newValue: number) => void,
  notes: string,
  updateNotes: (newValue: string) => void,
  wineList: any;
}

export default function OverallRating({ submitRating, wineList, notes, updateNotes }: OverallRatingProps): JSX.Element {
  function handleChangeNotes(event: React.ChangeEvent<any>) {
    setValue(value);
    updateNotes(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    updateNotes(notes);  
  }

  function handleChange(event: React.ChangeEvent<any>) {
    setValue(value);
    submitRating(event.target.value);
  }

  function postTastingToDB() {
    console.log("wineList before post", wineList)
    ApiService.postTasting(wineList);
  }

  const [value, setValue] = useState<number>(2);

  return (
    <div>
      <div className={"centered__container__overallrating"}>

        <h2 className='rating__box__headline'>overall rating of the wine</h2>
        <div>
          <Box component="fieldset" mb={3} borderColor="transparent" className='rating__box'>
            <Typography component="legend"></Typography>
            <StyledRating
              className="style__rating"
              name="overall"
              precision={0.5}
              value={value}
              icon={<FavoriteIcon fontSize="inherit" />}
              onChange={handleChange} />
          </Box>
        </div>

        <div className='overall__text'>
          Now that you have tasted the wine, you can evaluate it. Do all the traits in the wine balance one another? A wine that is out of balance will have characteristics that overpower other flavors in the wine, for example a jarring acidic flavor that dominates the taste. Take your time with wine that you enjoy. Identify what you prefer about them over other wines. You will find yourself to be more articulate when seeking new wine. We use a simple 5-point rating system with focus on drinkability
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="notes__input"
              type="text"
              value={notes}
              onChange={handleChangeNotes}
              placeholder="What else did you taste?"
            ></input>
            <button type="submit" className="save__notes__btn">save your notes</button>
          </form>
          <Link to="/winelist" className='add__wine__button'><button onClick={() => postTastingToDB()}>add wine to your wine list</button></Link>

        </div>
      </div>
    </div>
  );
}
