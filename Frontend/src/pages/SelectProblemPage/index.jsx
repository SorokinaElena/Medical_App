import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HumanBody from '../../components/HumanBody';
import s from './index.module.css';
import Button from '../../components/Button';
import { Context } from '../../context';

export default function SelectProblemPage() {

  let { page_name } = useContext(Context);
  page_name = 'select_problem_page';
  console.log(page_name);

  return (
    <div className={s.select_problem_page}>
      <div className={s.human_block}>
        <p>Please mark the place where you feel pain and move on to the next.</p>
        <HumanBody/>
        <Link to='/question'>
          <Button page_name={page_name}>Next</Button> 
        </Link>
      </div>
    </div>
  )
}
