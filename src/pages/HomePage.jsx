import React from 'react'
import {Link} from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className=' h-screen bg-mpink flex justify-center items-center py-5 place-content-center'>
         <div className='grid grid-cols-1'>
         <Link to='/pregunta'>
            <div className='flex justify-center'>
                    <button className=' h-40 w-40 place-content-center rounded-full text-2xl bg-mbtnfill drop-shadow-2xl
                    transition-all hover:scale-150 duration-500 hover:bg-mgreen flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 text-mbtnpink fill-current">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </button>
                </div>

             <h1 className=' text-5xl py-10 font-semibold'>Empezar ahora</h1>
             
                
             </Link>
        </div>
    </div>
  )
}
