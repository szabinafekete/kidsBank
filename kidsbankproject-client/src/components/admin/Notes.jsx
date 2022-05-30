import React from "react";

export const Notes=()=>{
    return(
        <div className='mt-3 mb-3 container-md'>
            <h3>Heti megbeszélések fontossága</h3>
            {/*Rövid leírás*/}
            <p>              
            Nem tudjuk elégszer hangsúlyozni, hogy az összetartó és egészséges családmodell alapja a kommunikáció és mások meghallgatása, így azt javasoljuk, hogy a megbeszéléseket mindenki vegye komolyan, és koncentráljunk a következő héten ránk váró feladatokra, illetve arra, hogy ezeket hogyan fogjuk csapatként teljesíteni. Javasoljuk a megbeszéléseket hetente egyszer megtartani, jellemzően egy hétvégi napon, de természetesen lehetőségünk nyílik korlátlan mennyiségű jegyzet elkészítésére, akár egy napon belül többször is.           
            </p>
            {/*Jegyzet készítés*/}
            <h3>Jegyzet készítés</h3>
            <input className="form-control w-mc mb-3" type="date"></input>
            <textarea  className="form-control mb-3" rows="8" cols="50"></textarea>
            <button className="btn bg-purple text-white mb-4">
                Mentés
            </button>

            <h3>Korábbi jegyzetek</h3>
        </div>
    )}