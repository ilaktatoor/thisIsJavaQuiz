import React from 'react'
import {Link} from 'react-router-dom';

export const Calif = ({score}) => {
    return (
        <>
            <div className='bg-mpink h-screen justify-center items-center'>
                <div className="flex flex-col justify-center items-center rounded-lg gap-5">
                    <h1 className="py-5 text-4xl font-bold">Resultados</h1>

                    <div className="py-5 flex flex-col gap-5 text-center text-lg font-bold">
                        <span> Acertaste </span>
                        <span className="font-black bg-gradient-to-r from-mred to-mpink bg-clip-text text-transparent text-7xl animate-bounce"> {score} </span>
                        de las preguntas
                    </div>
                    <div class="flex items-center justify-between">
                        <Link to='/'>
                        <button class="bg-mred hover:scale-105 hover:text-black duration-500 hover:bg-mgray drop-shadow-xl text-white border-solid border-2 border-black font-bold py-2 px-4 rounded-full" type="button">Vamos de nuevo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
