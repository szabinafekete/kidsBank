import React from 'react';
import {NavLink} from 'react-router-dom';
import reg from '../../icon/registration.png';
import acc from '../../icon/account.png';

export const Main=()=> {
  return (
    <div className='main container-md mt-3 mb-3'>
        <div>
            <h3 className=''>Leírás</h3>
            <p className='mb-4'>A KidsBank célja a gyermekek pénzügyi tudatosságának fejlesztése játékos körülmények között, a modern technika előnyeit kihasználva, a család minden tagjának bevonásával. Az oldalon lehetőség van pontok gyűjtésére, jutalmak beváltására, de akár be is fektethetjük a munkával szerzett pontjainkat annak érdekében, hogy a későbbiekben kamatostul kapjuk vissza.</p> 
        </div>

        <div className='boxs d-flex justify-content-between'>
            {/*Regisztrációs box*/}
            <div className="box d-flex flex-column justify-content-between align-items-center b-round box-shadow p-4 col">
                <p>Ha még nincs fiókod regisztráj!</p>
                <img src={reg} alt="ico" />
                <NavLink to="/regisztracio" className='btn bg-orange text-white'>Regisztrálok!</NavLink>
            </div>
            {/*Bejelentkező box*/}
            <div className="box d-flex flex-column justify-content-between align-items-center b-round box-shadow p-4 col">
                <p>Már van fiókom.</p>
                <img src={acc} alt="ico" />
                <NavLink to="/bejelentkezes" className="btn bg-purple text-white">Bejelentkezek!</NavLink>
            </div>
        </div>
    </div>
  )
}