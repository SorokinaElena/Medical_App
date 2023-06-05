import React, { useContext } from 'react';
import Question from '../../components/Question';
import { Context } from '../../context';

export default function QuestionPage() {

let { page_name } = useContext(Context);
page_name = 'question_page';
console.log(page_name);

  return (
    <div>
      <Question />
    </div>
  )
}
