import React, { useContext, useState } from 'react';
import UserInfoForm from '../../components/UserInfoForm';
import Therapy from '../../components/Therapy';
import { Context } from '../../context';
import s from './index.module.css';
import { therapy_list } from './data/therapy_list';
import Description from '../../components/Description';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export default function UserInfoPage() {

  const { collectUserDataForRequest } = useContext(Context);

  const { questionNum, setQuestionNum } = useContext(Context);
  let { page_name } = useContext(Context);
  page_name = 'user_info_page';

  console.log(page_name);
  console.log(questionNum);
  
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

      <div className={s.btn_container}>
        <Link to='/question'> <Button page_name={page_name}>go back</Button> </Link>
        <Button page_name={page_name}>get tips</Button>
      </div>
      
      
    </div>
  )
}
