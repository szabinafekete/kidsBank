import React from 'react'

export const Footer=()=> {

    return (
        <div className='bg-purple'>
            <div className='container-md p-2 text-white fs-small'>
                <p className='mb-0 d-flex flex-sm-row flex-column justify-content-center align-items-center'>
                    <span>&copy; {new Date().getFullYear()} KidsBank Hungary &nbsp;</span> 
                    <span>Horváth-Fekete Szabina &amp; Horváth Richárd</span> 
                    </p>
            </div>
        </div>
      )
    }