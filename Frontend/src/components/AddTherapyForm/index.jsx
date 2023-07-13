import React, { useContext } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist'
import Button from '../Button';
import { Context } from '../../context';
import TherapyItem from '../TherapyItem';

export default function AddTherapyForm() {

    const { therapies, setTherapies, therapyList, setTherapyList } = useContext(Context);

    const addTherapy = (data) => {
        const new_therapies = [...therapies, data];
        // const if_exist_therapy = (data.value) => {
        //     therapy.map
        // }
        // new_therapy.map(el => <TherapyItem />)
        setTherapies(new_therapies);    
      }  
      
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

    console.log(therapies);
    

  return (
    <form className={s.select_form} onSubmit={handleSubmit(submit)}>
        <div className={s.select_therapy_container}>
            <select {...therapyRegister}>
                <option value=''>add your therapies...</option>
                <option value=''>I didn't use any therapy</option>
                <option value='Drugs'>Drugs</option>
                <option value='Massage'>Massage</option>
                <option value='Yoga'>Yoga</option>
            </select>
            <select {...reactionRegister}>
                <option value=''>?...</option>
                <option value='red'>red</option>
                <option value='yellow'>yellow</option>
                <option value='green'>green</option>
            </select>
        </div>  
      <Button>confirm</Button>
    </form>
  )
}
