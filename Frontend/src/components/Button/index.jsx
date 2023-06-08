import React from 'react'
import s from './index.module.css'

export default function Button({children, page_name}) {

  let btn_page_name = '';
  if (page_name === 'start_page') {
    btn_page_name = s.btn_start_page;
  } else if (page_name === 'select_problem_page') {
    btn_page_name = s.btn_select_problem_page;
  }

  return (
    <div>
        {/* <button className={page_name === 'start_page' ? s.btn_start_page : s.btn}>{children}</button> */}
        {/* <button className={[s.btn, page_name === 'start_page' ? s.btn_start_page : ''].join(' ')}>{children}</button> */}
        <button className={[s.btn, btn_page_name].join(' ')}>{children}</button>
    </div>
  )
}
