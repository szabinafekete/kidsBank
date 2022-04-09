import React from 'react';
import {NavLink} from 'react-router-dom';
import reg from '../icon/registration.png';
import acc from '../icon/account.png';

export const Main=()=> {
  return (
    <div className='main container-md mt-3 mb-3'>
        <div>
            <h3 className=''>Leírás</h3>
            <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aspernatur voluptates dolor, quam debitis distinctio aut voluptas fugit non, a laborum qui nihil. Quibusdam totam dignissimos aliquam enim ducimus? Beatae ut corrupti adipisci excepturi est explicabo mollitia dolorum eius rerum voluptatibus blanditiis voluptate deleniti hic minus architecto, nihil eos possimus.</p> 
        </div>

        <div className='boxs d-flex justify-content-between'>
            <div className="box d-flex flex-column justify-content-between align-items-center b-round box-shadow p-4 col">
                <p>Ha még nincs fiókod regisztráj!</p>
                <img src={reg} alt="ico" />
                <NavLink to="/regisztracio" className='btn bg-orange text-white'>Regisztrálok!</NavLink>
            </div>
            <div className="box d-flex flex-column justify-content-between align-items-center b-round box-shadow p-4 col">
                <p>Már van fiókom.</p>
                <img src={acc} alt="ico" />
                <NavLink to="/bejelentkezes" className="btn bg-purple text-white">Bejelentkezek!</NavLink>
            </div>
        </div>

    </div>
  )
}