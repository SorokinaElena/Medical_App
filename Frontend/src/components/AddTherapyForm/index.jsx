import React, { useContext } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { Context } from '../../context';
import green_smile from '../../media/green_smile.png';
import lightgreen_smile from '../../media/lightgreen_smile.png';
import yellow_smile from '../../media/yellow_smile.png';
import orange_smile from '../../media/orange_smile.png';
import lightred_smile from '../../media/lightred_smile.png';
import red_smile from '../../media/red_smile.png';

export default function AddTherapyForm() {

    const { therapies, setTherapies } = useContext(Context);

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

    // console.log(therapies);


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
