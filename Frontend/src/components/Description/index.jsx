import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Description({ commentRegister, errors }) {

  // const { description, setDescription } = useContext(Context);

  // const addDescription = (event) => {
    // event.preventDefault();
    // let target = event.target;
    // while (target.tagName.toLowerCase() !== "button") {
    // target = target.parentNode;
    // }

    // const answer = {
    //   therapy: therapy_name,
    //   reaction: target.value
    // };
    // console.log(answer)
    // setTherapy([...therapy, answer])
  // };

  // const addDescription = (data) => {
  //   setDescription(data);
  // }

  // const inputDescription = (event) => {
  //   event.preventDefault();
  //   const data = event.target.value;
  //   addDescription(data);
  // }

  // console.log(description);

  return (
      <div className={s.description_wrapper}>
        <div className={s.input_box}>
          <label>Сomment</label>
          <textarea type="text" name="users_commit" maxLength="255" {...commentRegister}/>
        </div>
        <div className={s.error_container_comment}>
          {errors?.comment && <div className={s.error_message}> <AiFillCaretDown className={s.required_icon} /> </div>}
        </div>
        
      </div>
  )
}
