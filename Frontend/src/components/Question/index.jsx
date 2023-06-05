import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { questions } from './data/questions.js';
import s from './index.module.css';
import Button from '../Button/index.jsx';
import { Context } from '../../context';

// import green_smile from '../../media/green_smile_s.png';
// import lightgreen_smile from '../../media/lightgreen_smile_s.png';
// import yellow_smile from '../../media/yellow_smile_s.png';
// import orange_smile from '../../media/orange_smile_s.png';
// import lightred_smile from '../../media/lightred_smile_s.png';
// import red_smile from '../../media/red_smile_s.png';

import green_smile from '../../media/green_smile.png';
import lightgreen_smile from '../../media/lightgreen_smile.png';
import yellow_smile from '../../media/yellow_smile.png';
import orange_smile from '../../media/orange_smile.png';
import lightred_smile from '../../media/lightred_smile.png';
import red_smile from '../../media/red_smile.png';


export default function Question() {

  const navigate = useNavigate();

  const [ questionNum, setQuestionNum ] = useState(0);

  const { answers, setAnswers } = useContext(Context);

  const addAnswer = (idx, answer) => {
    const newAnswers = [...answers];
    newAnswers[idx] = answer;
    setAnswers(newAnswers);     
  }     
  
  const questionNumIncr = (event) => {
    event.preventDefault();
    let target = event.target;
    while (target.tagName.toLowerCase() !== "button") {
    target = target.parentNode;
}
    if (questionNum < 35) {
      const answer = target.value;
      const idx = questionNum;
      addAnswer(idx, answer)
      setQuestionNum(questionNum + 1);
    } else if (questionNum === 35) {
      const answer = target.value;
      const idx = 35;
      addAnswer(idx, answer)
      navigate('/user_info')
    } 
  };

  const questionNumDecr = () => {
    if (questionNum > 0) {
      setQuestionNum(questionNum - 1);
    } else {
      setQuestionNum(questionNum = 0);
    }
  };

  console.log(answers);
  
  return (
    <div className={s.question_container}>
       <div className={s.questions_explanation}>
        {
          questions[questionNum].section_title 
          ? <p className={s.question_title}>{questions[questionNum].section_title}</p> 
          : <></>
        }
        </div>

        <div className={s.question}>
          <div className={s.num_question}>{questions[questionNum].id}</div>
          <img src={`https://counter1px.herokuapp.com/?q=${questionNum}`} alt="" className={s.analitica}  />
          <p>{questions[questionNum].question}</p>
          
        <div className={s.answers_block}>
          <div className={s.btns_answers}>
            <button value={questions[questionNum].answer_green} onClick={questionNumIncr}><img src={green_smile} alt="green_smile" /></button>
            <button value={questions[questionNum].answer_light_green} onClick={questionNumIncr}><img src={lightgreen_smile} alt="lightgreen_smile" /></button>
            <button value={questions[questionNum].answer_light_yellow} onClick={questionNumIncr}><img src={yellow_smile} alt="yelow_smile" /></button>
            <button value={questions[questionNum].answer_yellow} onClick={questionNumIncr}><img src={orange_smile} alt="orange_smile" /></button>
            <button value={questions[questionNum].answer_orange} onClick={questionNumIncr}><img src={lightred_smile} alt="lightred_smile" /></button>
            <button value={questions[questionNum].answer_red} onClick={questionNumIncr}><img src={red_smile} alt="red_smile" /></button>
          </div>
          <div className={s.btns_back_help}>
          {
            questionNum === 0 
            ? <Link to='/select_problem'> <Button>return to problem choose</Button> </Link>
            :<button onClick={questionNumDecr} className={s.btn_back}>go back</button>
          }
          </div>
        </div>   
      </div>     
    </div>
  )
}
