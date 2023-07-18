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

    const therapyRegister = register('therapy', {
      required: true,
    });  
    const reactionRegister = register('reaction', {
      required: true,
    });  


  return (
    <form className={s.select_form} onSubmit={handleSubmit(submit)}>
        <div className={s.select_therapy_container}>
            <select {...therapyRegister}>
                <option value=''>Add your therapy...</option>
                <option value='Pills'>Pills</option>
                <option value='Massage'>Massage</option>
                <option value='Yoga'>Yoga</option>
            </select>
            <select {...reactionRegister}>
                <option value=''>Add your score for therapy...</option>
                <option value='red'>very bad experience</option>
                <option value='light_red'>bad experience</option>
                <option value='orange'>rather a bad experience</option>
                <option value='yellow'>with no positive or negative effect</option>
                <option value='light_green'>good experience</option>
                <option value='green'>totally effective</option>

            </select>
        </div>  
      <Button>confirm</Button>
    </form>
  )
}

// https://www.w3schools.com/tags/tag_option.asp