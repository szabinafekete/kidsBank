import React from 'react'
import logo from '../icon/logo.png';
import {NavLink} from 'react-router-dom';

export const Header=()=> {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
    <div className="container-fluid">
      {/*Brand*/}
      <div className='navbar-brand pt-2 pb-2 d-flex align-items-center'>
        <span><img src={logo} alt="logo" /></span>
        <span><h3 className='ms-3 mb-0 text-white'>KidsBank</h3></span>
      </div>
      {/*Hamburger menü*/}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/*Menüpontok*/}
      <div id="navbarNav">
      <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/admin/" className="nav-link" aria-current="page">Főoldal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/csaladtagok" className="nav-link">Családtagok</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/feladatlista" className="nav-link">Feladatlista</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/heti-megbeszeles" className="nav-link ">Heti megbeszélés</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/pontbevaltas" className="nav-link ">Pontbeváltás</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/bank" className="nav-link ">Bank</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link ">Kijelentkezés</NavLink>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}