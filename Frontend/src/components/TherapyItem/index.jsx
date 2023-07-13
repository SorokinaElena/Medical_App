import React from 'react';
import s from './index.module.css';

export default function TherapyItem({ therapy, reaction }) {
  return (
    <div className={s.therapy_item_container}>
      <div>therapy: {therapy}</div>
      <div>reaction: {reaction}</div>
    </div>
  )
}
