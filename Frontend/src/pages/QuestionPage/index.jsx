import React, { useContext } from 'react';
import Question from '../../components/Question';
import { Context } from '../../context';
import s from './index.module.css';

export default function QuestionPage() {

let { page_name } = useContext(Context);
page_name = 'question_page'
console.log(page_name);

  return (
    <div className={s.question_page}>
      <Question page_name={page_name}/>
    </div>
  )
}
