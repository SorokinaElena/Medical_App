import React, { useContext, useState } from 'react';
import s from './index.module.css';
import red from '../../media/red.jfif';
import yellow from '../../media/yellow.jfif';
import green from '../../media/green.jfif';
import { Context } from '../../context';

export default function Therapy({ therapy_name, therapyRegister }) {

  const { therapy, setTherapy } = useContext(Context);

  const [ color_btn, setColorBtn ] = useState({});

    const addTherapy = (event) => {
    event.preventDefault();
    let target = event.target;
    while (target.tagName.toLowerCase() !== "button") {
    target = target.parentNode;
    }

    const answer = {
      therapy: therapy_name,
      reaction: target.value
    };
    console.log(answer)
    setTherapy([...therapy, answer])


      setColorBtn({
        backgroundColor: 'green'
      })
    }

  console.log(therapy)

  return (
    <div>
      {/* <select {...register('category')}>
        <option value=''>Select...</option>
        <option value='A'>Category A</option>
        <option value='B'>Category B</option>
      </select> */}

      <select {...therapyRegister}>
        <option value='' onClick={addTherapy}>Select your therapies...</option>
        <option value='' onClick={addTherapy}>I didn't use any therapy</option>
        <option value='Drugs'>Drugs</option>
        <option value='Massage'>Massage</option>
        <option value='Yoga'>Yoga</option>
      </select>
        {/* <div className={s.therapy_block}>
          <div className={s.therapy} style={color_btn}>{ therapy_name }</div>
          <div className={s.smile_block}>
            <button value='3' onClick={addTherapy} ><img src={green} alt="green" /></button>
            <button value='2' onClick={addTherapy} ><img src={yellow} alt="yellow" /></button>
            <button value='1' onClick={addTherapy} ><img src={red} alt="red" /></button>
          </div>
        </div> */}
    </div>
  )
}
