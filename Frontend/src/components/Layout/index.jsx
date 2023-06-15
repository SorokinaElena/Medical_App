import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import s from './index.module.css';

export default function Layout({ page_name }) {

  return (
    <div className={['content_wrapper', 'background_img'].join(' ')}>
    {/* <div className={['content_wrapper', page_name === 'start_page' ? 'background_img' : ''].join(' ')}> */}
          <Nav />
          <main className='main_wrapper'>
              <Outlet />
          </main> 
    </div>
  )
}
