import React from 'react'

export const Footer=()=> {

    return (
        <div className='bg-purple'>
            <div className='container-md p-2 text-white text-center fs-small'>
                <p className='mb-0'>&copy; {new Date().getFullYear()} KidsBank Hungary | Horváth Richárd &amp; Horváth-Fekete Szabina</p>
            </div>
        </div>
      )
    }