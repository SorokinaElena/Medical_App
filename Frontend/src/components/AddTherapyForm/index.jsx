import React, { useContext } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { Context } from '../../context';


export default function AddTherapyForm() {

    const { therapies, setTherapies } = useContext(Context);

    const addTherapy = (data) => {
      let added_therapies = therapies;
        if (!therapies.find(el => el.therapy === data.therapy)) {
          added_therapies = [...added_therapies, data];
          setTherapies(added_therapies);
        } else {
          setTherapies(added_therapies)
          alert('This therapy has already been added')
        }   
      }  

      console.log(therapies);

    const submit = (data) => {
        addTherapy(data);
      }

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            therapy: '',
            reaction: '',
        }
    });

    const therapyRegister = register('therapy');  
    const reactionRegister = register('reaction');  


  return (
    <form className={s.select_form} onSubmit={handleSubmit(submit)}>
        <div className={s.select_therapy_container}>
            <select {...therapyRegister}>
                <option value='' id='0'>Add your therapy...</option>
                <option value="I didn't use any therapy" id='1'>none</option>
                <option value='Drugs' id='2'>Drugs</option>
                <option value='Massage' id='3'>Massage</option>
                <option value='Yoga' id='4'>Yoga</option>
            </select>
            <select {...reactionRegister}>
                <option value=''>Add your score for therapy...</option>
                <option value='none'>none</option>
                <option value='red'>red</option>
                <option value='light_red'>light red</option>
                <option value='orange'>orange</option>
                <option value='yellow'>yellow</option>
                <option value='light_green'>light green</option>
                <option value='green'>green</option>

            </select>
        </div>  
      <Button>confirm</Button>
    </form>
  )
}

// https://www.w3schools.com/tags/tag_option.asp