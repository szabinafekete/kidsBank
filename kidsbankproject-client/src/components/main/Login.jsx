import React from 'react';
import {NavLink} from 'react-router-dom';

export const Login=()=> {
  return (
    <div className='container-md mt-3 mb-3'>
        <h3 className='text-center'>Bejelentkezés</h3>
        <div className='boxs d-flex justify-content-center'>
            <div className="box d-flex flex-column justify-content-between align-items-center b-round box-shadow col-md-6 p-4">
                <input type="text" class="form-control mb-4" placeholder="Felhasználónév" aria-label="username"/>
                <input type="password" class="form-control mb-4" placeholder="Jelszó" aria-label="password"/>
                <NavLink to="/elfelejtettjelszo" className="mb-4">Elfelejtettem a jelszót.</NavLink>
                <NavLink to="/admin/" className='btn bg-purple text-white'>Bejelentkezek!</NavLink>
            </div>
        </div>
    </div>
  )
}