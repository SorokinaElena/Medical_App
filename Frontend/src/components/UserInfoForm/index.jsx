import React from 'react';
import { useContext } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Context } from '../../context';
import s from './index.module.css';
import Button from '../Button';
import { AiFillCaretDown } from 'react-icons/ai';
import Description from '../Description';


export default function UserInfoForm() {

const { bmi, setBmi } = useContext(Context);

const addAnswer = (data) => {
  setBmi(data);     
}  

const submit = (data) => {
  addAnswer(data)
}

console.log(bmi);

const { register, handleSubmit, formState: { errors }, control } = useForm({
    mode: 'onBlur'
});

// const heightRegex = /^\d{2,3}$/;
// const weightRegex = /^\d{1,3}$/;
// const ageRegex = /^\d{1,3}$/;

const heightRegister = register('height', { 
    required: true,   /* 'Required field' */
    type: "number",
    minLength: 2,
    maxLength: 3,
    min: 10,
    max: 251,
    // pattern: {
    //     value: heightRegex,
    //     message: 'Not valid height format'
    // } 
});

// console.log(heightRegister)

const weightRegister = register('weight', { 
    required: true,
    type: "number",
    minLength: 1,
    maxLength: 3,
    min: 1,
    max: 727,
    // pattern: {
    //     value: weightRegex,
    //     message: 'Not valid weight format'
    // } 
});

const ageRegister = register('age', { 
    required: true,
    type: "number",
    minLength: 1,
    maxLength: 3,
    min: 1,
    max: 150,
    // pattern: {
    //     value: ageRegex,
    //     message: 'Not valid age format'
    // } 
});

const commentRegister = register('comment', { 
  // required: true,
  type: "string",
  maxLength: 255,
  // pattern: {
  //     value: ageRegex,
  //     message: 'Not valid age format'
  // } 
});

const { dirtyFields } = useFormState({
  control
});

  return (
    <form onSubmit={handleSubmit(submit)}>

      <div className={s.inputs_container}>
        <div className={s.input_box}>
          <label>Height</label>
          <input type="number" name='height' placeholder='180' autoComplete="off" {...heightRegister}/>
        </div>
        <div className={s.input_box}>
          <label>Weight</label>
          <input type="number" name='weight' placeholder='85' autoComplete="off" {...weightRegister}/>
        </div>
        <div className={s.input_box}>
          <label>Age</label>
          <input type="number" name='age' placeholder='45' autoComplete="off" {...ageRegister}/>
        </div>
      </div>

      <div className={s.errors_container}>
        <div className={s.error_container_height}>
          {errors?.height && <div className={s.error_message}> <AiFillCaretDown className={s.required_icon} /> </div>}
        </div>
        <div className={s.error_container_weight}>
          {errors?.weight && <div className={s.error_message}> <AiFillCaretDown className={s.required_icon} /> </div>}
        </div>
        <div className={s.error_container_age}>
          {errors?.age && <div className={s.error_message}> <AiFillCaretDown className={s.required_icon} /> </div>}
        </div> 
      </div>

      <Description commentRegister={commentRegister}/>
        
      <Button>confirm</Button>

    </form>
  )
}

// https://www.youtube.com/watch?v=Jxfun6Jnt5Q&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9