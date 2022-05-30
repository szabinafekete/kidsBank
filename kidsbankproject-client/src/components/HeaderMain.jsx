import React from 'react'
import logo from '../icon/logo.png';

export const HeaderMain=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
    <div className="container-fluid">
      {/*Brand*/}
      <div className='navbar-brand pt-2 pb-2 d-flex align-items-center'>
        <span><img src={logo} alt="logo" /></span>
        <span><h3 className='ms-3 mb-0 text-white'>KidsBank</h3></span>
      </div> 
      </div>
    </nav>
  )
}