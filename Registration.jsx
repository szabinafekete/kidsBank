import React from 'react';
import {NavLink} from 'react-router-dom';

export const Registration=()=> {
  return (
    <div className='container-md mt-3 mb-3'>
        <h3 className='text-center'>Regisztráció</h3>
        <div className='boxs d-flex justify-content-center'>
            <div className="box d-flex flex-column b-round box-shadow col-md-6 col-sm-12 p-4">
                <div className='d-flex justify-content-between mb-3'>
                    <div className="col-12">
                        <div className='d-flex flex-column justify-content-end mb-4'>
                            <label className='mb-2' htmlFor="username">Add meg a felhasználóneved!</label>
                            <input type="text" className="form-control" placeholder="Felhasználónév" aria-label="username"/>
                        </div>
                        <div className='d-flex flex-column justify-content-end mb-4'>
                            <label className='mb-2' htmlFor="e-mail">Add meg az e-mail címed!</label>
                            <input type="password" class="form-control" placeholder="E-mail" aria-label="e-mail"/>
                        </div>
                        <div className='d-flex flex-column justify-content-end mb-4'>
                            <label className='mb-2' htmlFor="password">Add meg a jelszavad!*</label>
                            <input type="text" className="form-control" placeholder="Jelszó" aria-label="password"/>
                        </div>
                        <div className='d-flex flex-column justify-content-end'>
                            <label className='mb-2' htmlFor="password">Add meg még egyszer a jelszavad!*</label>
                            <input type="password" className="form-control" placeholder="Jelszó" aria-label="password"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-muted fs-small">*Legalább 8 karaktert használjon, és szerepeljenek köztük betűk, számok és szimbólumok is.</p>
                    <div className='text-center'>
                        <button className='btn bg-purple text-white'>Regisztrálok!</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}