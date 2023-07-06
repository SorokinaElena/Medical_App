import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import s from './index.module.css';
import { Context } from '../../context';

export default function StartPage() {

  const { questionNum, setQuestionNum, pageName, setPageName } = useContext(Context);
  setPageName('start_page');
  console.log(pageName);
  setQuestionNum(0);
  console.log(questionNum);

  return (
    <div className={s.start_page}>
        <h2>Wellcome!</h2>
        <div className={s.explanation_text}>
          <p> Are you in pain?</p>
          <p> Before we can help you, please fill out a simple, anonymous form. </p>
          <p> Answer the 36 short questions and the app will recommend the right therapy for you that has been tested by other users. </p>
        </div>

        <Link to='/select_problem'>
        <Button page_name={pageName}>Let's start</Button>
        </Link>
    </div>
  )
}
