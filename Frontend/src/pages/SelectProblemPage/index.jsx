import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HumanBody from '../../components/HumanBody';
import s from './index.module.css';
import Button from '../../components/Button';
import { Context } from '../../context';

export default function SelectProblemPage() {

  const { pageName, setPageName, questionNum, setQuestionNum } = useContext(Context);
  setPageName('select_problem_page');
  console.log(pageName);
  setQuestionNum(0);
  console.log(questionNum);

  return (
    <div className={s.select_problem_page}>
      <div className={s.human_block}>
        <p>Please mark the place where you feel pain and move on to the next.</p>
        <HumanBody/>
        <Link to='/question'>
          <Button page_name={pageName}>Next</Button> 
        </Link>
      </div>
    </div>
  )
}
