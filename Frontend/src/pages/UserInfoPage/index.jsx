import React, { useContext, useState } from 'react';
import FormValidation from '../../components/FormValidation';
import Therapy from '../../components/Therapy';
import { Context } from '../../context';
import s from './index.module.css';
import { therapy_list } from './data/therapy_list';
import Description from '../../components/Description';
import Button from '../../components/Button';

export default function UserInfoPage() {

  const { collectUserDataForRequest } = useContext(Context);

  let { page_name } = useContext(Context);
  page_name = 'user_info_page';
  console.log(page_name);
  
  return (
    <div className={s.user_info_page}>
      <FormValidation />
      {/* <div className={s.therapy_container}>
        {
          therapy_list.map(el => <Therapy key={el.id} {...el} />)
        }
      </div> */}
      <Description />
      {/* <div className={s.btn_conteiner} >
        <button className={s.btn} onClick={collectUserDataForRequest}>get tips</button>
      </div> */}
      <Button page_name={page_name}>get tips</Button>
      
    </div>
  )
}
