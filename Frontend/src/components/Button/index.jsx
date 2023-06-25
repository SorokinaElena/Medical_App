import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function Button({children, page_name}) {

  const { bodyArea }  = useContext(Context);

  let disabled_value = false;

  let btn_page_name = '';

  if (page_name === 'start_page') {
    btn_page_name = s.btn_start_page;
  } else if (page_name === 'select_problem_page') {
    btn_page_name = s.btn_select_problem_page;
    if (bodyArea.length === 0) {disabled_value = !disabled_value};  
  }

  return (
    <div>
        <button className={[s.btn, btn_page_name].join(' ')} disabled={disabled_value}>{children}</button>
    </div>
  )
}

// https://css-tricks.com/making-disabled-buttons-more-inclusive/