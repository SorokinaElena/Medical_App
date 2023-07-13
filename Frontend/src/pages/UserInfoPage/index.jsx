import React, { useContext, useState } from 'react';
import UserInfoForm from '../../components/UserInfoForm';
import { Context } from '../../context';
import s from './index.module.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import AddTherapyForm from '../../components/AddTherapyForm';
import TherapyItem from '../../components/TherapyItem';


export default function UserInfoPage() {

  const { collectUserDataForRequest } = useContext(Context);

  const { questionNum, answers, pageName, setPageName, therapies } = useContext(Context);
  setPageName('user_info_page');

  console.log(pageName);
  console.log(questionNum);
  console.log(answers);
  // console.log(therapies[1].reaction);
  
  
  return (
    <div className={s.user_info_page}>
      <UserInfoForm />
      {/* <div className={s.therapy_container}>
        {
          therapy_list.map(el => <Therapy key={el.id} {...el} />)
        }
      </div> */}
      {/* <Description /> */}
      {/* <div className={s.btn_conteiner} >
        <button className={s.btn} onClick={collectUserDataForRequest}>get tips</button>
      </div> */}

      {
        <div>
        <TherapyItem therapy='test' reaction='test'/>
        <TherapyItem therapy='test' reaction='test'/>
        <TherapyItem therapy='test' reaction='test'/>
        </div>
      }

      <AddTherapyForm />

      <div className={s.btn_container}>
        <Link to='/question'> <Button>go back</Button> </Link>
        <Button page_name={pageName}>get tips</Button>
      </div>
      
      
    </div>
  )
}
