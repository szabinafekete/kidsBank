import React from 'react'
import logo from '../icon/logo.png';

export const Header=()=> {
  return (
    <div className='bg-purple'>
        <div className='container-md p-2 d-flex align-items-center'>
          <span><img src={logo} alt="logo" /></span>
          <span><h3 className='ms-3 mb-0 text-white'>KidsBank</h3></span>
        </div>
    </div>
  )
}