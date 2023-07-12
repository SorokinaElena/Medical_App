import React from 'react';
import s from './index.module.css';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Description({ commentRegister, errors }) {

  return (
      <div className={s.description_wrapper}>
        <div className={s.input_box}>
          <label>Сomment</label>
          <textarea type="text" name="comment" maxLength="255" {...commentRegister}/>
        </div>
        <div className={s.error_container_comment}>
          {errors?.comment && <div className={s.error_message}> <AiFillCaretDown className={s.required_icon} /> </div>}
        </div>
        
      </div>
  )
}
