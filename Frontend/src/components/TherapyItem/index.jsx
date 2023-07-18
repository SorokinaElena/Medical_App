import React, { useContext } from 'react';
import s from './index.module.css';
import green_smile from '../../media/green_smile.png';
import lightgreen_smile from '../../media/lightgreen_smile.png';
import yellow_smile from '../../media/yellow_smile.png';
import orange_smile from '../../media/orange_smile.png';
import lightred_smile from '../../media/lightred_smile.png';
import red_smile from '../../media/red_smile.png';
import { RxCross2 } from 'react-icons/rx';
import { RxCrossCircled } from 'react-icons/rx';
import { Context } from '../../context';


export default function TherapyItem({ therapy, reaction }) {

const { therapies, setTherapies } = useContext(Context);  

let reaction_img = reaction;
const add_reaction = (reaction) => {
  if (reaction === 'red') {
    reaction_img = red_smile;
  };
  if (reaction === 'light_red') {
    reaction_img = lightred_smile;
  };
  if (reaction === 'orange') {
    reaction_img = orange_smile;
  };
  if (reaction === 'yellow') {
    reaction_img = yellow_smile;
  };
  if (reaction === 'light_green') {
    reaction_img = lightgreen_smile;
  };
  if (reaction === 'green') {
    reaction_img = green_smile;
  }
}

add_reaction(reaction);

const deleteTherapy = () => {
  const new_therapies = therapies.filter(el => el.therapy !== therapy)
  setTherapies(new_therapies)
}  

  return (
    <div>
    {
      therapy === ''
      ? ''
      : <div className={s.therapy_item_container}>
      <div className={s.therapy_container}>{therapy}</div>
      <div>
        <img className={s.reaction_img} src={reaction_img} alt={reaction_img} />
      </div>
      <div className={s.cross_container}><RxCross2 onClick={deleteTherapy} /></div>
    </div>
    }
    </div>
  )
}
