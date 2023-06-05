import React from 'react'
import s from './index.module.css'

export default function Button({children, page_name}) {
  return (
    <div>
        {/* <button className={page_name === 'start_page' ? s.btn_start_page : s.btn}>{children}</button> */}
        <button className={[s.btn, page_name === 'start_page' ? s.btn_start_page : ''].join(' ')}>{children}</button>
    </div>
  )
}
