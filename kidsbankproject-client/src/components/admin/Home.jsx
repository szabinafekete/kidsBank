import React from 'react';
import { FamilyTable } from './FamilyTable';
import {NavLink} from 'react-router-dom';

export const Home=()=> {
  return (
    <div className='mt-3 mb-3 container-md'>
        <div className="row-gap row g-4 row-cols-md-4 d-flex justify-content-between">
            {/*Családtagok összefoglaló box*/}
            <div className='col b-round box-shadow p-4 flex-grow-1 w-50'>
                <h3>Családtagok</h3>
                <FamilyTable/>
                <NavLink to="/admin/csaladtagok" className='btn bg-purple text-white nav-link'>Tovább</NavLink>
            </div>
            {/*Bank összefoglaló box*/}
            <div className='col b-round box-shadow p-4 flex-grow-1'>
                <h3>Bank</h3>
                <p>A Bank menüpontban lehetőségünk nyílik a megszerzett pontokat befektetni és ezáltal jobban megismerni a pénzügyileg tudatos gondolkodásmódot.</p>
                <NavLink to="/admin/bank" className='btn bg-orange text-white nav-link'>Tovább</NavLink>
            </div>
            {/*Heti megbeszélés összefoglaló box*/}
            <div className='col b-round box-shadow p-4 flex-grow-1'>
                <h3>Heti megbeszélés</h3>
                <p>Ebben a menüpontban jegyzetelhetjük le a családi megbeszélésen elhangzott legfontosabb pontokat és így a későbbiekben bármikor egyszerűen visszaolvashatjuk.</p>
                <NavLink to="/admin/heti-megbeszeles" className='btn bg-purple text-white nav-link'>Tovább</NavLink>
            </div>
            {/*Feladatlista összefoglaló box*/}
            <div className='col b-round box-shadow p-4 flex-grow-1'>
                <h3>Feladatlista</h3>
                <p>A Feladatlista menüpontban  könnyedén felvehetünk elvégzendő munkákat, felhasználóhoz rendelhetjük, illetve a sikeres teljesítéskor kapható pontértéket is megadhatjuk.</p>
                <NavLink to="/admin/feladatlista" className='btn bg-orange text-white nav-link'>Tovább</NavLink>
            </div>
            {/*Pontbeváltás összefoglaló box*/}
            <div className='col b-round box-shadow p-4 flex-grow-1'>
                <h3>Pontbeváltás</h3>
                <p>A pontbeváltás az egyik legizgalmasabb része az oldalnak, mivel a gyerekek itt tudják megigényelni az előzetesen felvitt jutalmakat.</p>
                <NavLink to="/admin/heti-pontbevaltas" className='btn bg-purple text-white nav-link'>Tovább</NavLink>
            </div>
        </div>
    </div>
  )
}