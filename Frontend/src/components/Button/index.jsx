import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function Button({children, page_name, questionNumDecr}) {

  const { bodyArea }  = useContext(Context);
  const { collectUserDataForRequest } = useContext(Context);

  let disabled_value = false;

  let btn_page_name = '';

  let func;

  if (page_name === 'start_page') {
    btn_page_name = s.btn_start_page;
  } else if (page_name === 'select_problem_page') {
    btn_page_name = s.btn_select_problem_page;
    if (bodyArea.length === 0) {disabled_value = !disabled_value};  
  } else if (page_name === 'question_page') {
    btn_page_name = s.btn_question_page;
    func = questionNumDecr;
  } else if (page_name === 'user_info_page' ) {
    btn_page_name = s.btn_user_info_page;
    // func = collectUserDataForRequest;
  }

  return (
    <div>
        <button className={[s.btn, btn_page_name].join(' ')} disabled={disabled_value} onClick={func}>{children}</button>
    </div>
  )
}

// https://css-tricks.com/making-disabled-buttons-more-inclusive/