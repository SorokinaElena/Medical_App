import React, { useContext } from 'react';
import Question from '../../components/Question';
import { Context } from '../../context';
import s from './index.module.css';

export default function QuestionPage() {

const { pageName, setPageName } = useContext(Context);
setPageName('question_page');
console.log(pageName);

  return (
    <div className={s.question_page}>
      <Question page_name={pageName}/>
    </div>
  )
}
