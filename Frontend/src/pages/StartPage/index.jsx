import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import s from './index.module.css';
import { Context } from '../../context';

export default function StartPage() {

  let { page_name } = useContext(Context);
  page_name = 'start_page';
  console.log(page_name);

  return (
  // <div className='background_img_wrapper'>
    <div className={s.start_page}>
        <h2>Wellcome!</h2>
        <div className={s.explanation_text}>
          <p> Are you in pain?</p>
          <p> Before we can help you, please fill out a simple, anonymous form. </p>
          <p> Answer the 36 short questions and the app will recommend the right therapy for you that has been tested by other users. </p>
        </div>

        <Link to='/select_problem'>
        <Button page_name={page_name}>Let's start</Button>
        </Link>
        
      </div>
  // </div>
  )
}
