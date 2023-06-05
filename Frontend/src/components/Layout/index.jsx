import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import s from './index.module.css';
import { Context } from '../../context';

export default function Layout() {

  let { page_name, content_wrapper } = useContext(Context);
  
  if (page_name === 'start_page' || 'question_page') {
    content_wrapper = 'content_wrapper_with_img'
  } else {
    content_wrapper = 'content_wrapper_without_img'
  };

  return (
    <div className='background_wrapper'>
      <div className={content_wrapper}>
          <Nav />
          <main className='main_wrapper'>
            <Outlet />
          </main> 
      </div>
    </div>
  )
}
