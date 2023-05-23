import React from 'react'
import data from '../assets/data';
import {useState, useEffect} from 'react';
import preguntas from '../assets/data';
import {Calif} from '../components/Calif'


export const Question = () => {
    const [preguntaActual,setPreguntaActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleAnswerSubmit(isCorrect, e) {
        // añadir puntuación
        if (isCorrect) setPuntuacion(puntuacion + 1);
        // añadir estilos de pregunta
        e.target.classList.remove(isCorrect? 'bg-white':'bg-white');
        e.target.classList.add(isCorrect ? 'bg-mgreen':'bg-red-600');
        // cambiar a la siguiente pregunta
        setTimeout(() => {
          if (preguntaActual === preguntas.length - 1) {
            setIsFinished(true);
          } else {
            setPreguntaActual(preguntaActual + 1);
          }
        }, 500);
      }

    if(isFinished) return(
       <Calif score={puntuacion}/>      
    );

  return (
    <>
        
        <div className="main flex justify-center items-center bg-mpink h-screen">
            <div className="grid grid-col-1 ">
                <div className="pregunta-top  ">
                    <div className="numero-pregunta justify-self-start py-4 text-white bold text-lg font-bold decoration-black decoration-5"><span>Pregunta {preguntaActual + 1 } de </span>4</div>
                    <div className="titulo-pregunta py-4 px-2 justify-center flex text-3xl border-solid border-2 border-black bg-mred rounded-full text-white drop-shadow-xl tablet:px-7"> <span>{data[preguntaActual].titulo} </span></div>
                </div>
                
                <div className="respuesta-buttom inline-grid grid-cols-2 gap-4 py-10 tablet:grid-cols-1 tablet:px-5">
                    {data[preguntaActual].opciones.map((respuesta)=>(
                            <button key={respuesta.textoRespuesta} 
                            onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
                            className='text-2xl rounded-full bg-white border-solid border-black border-2 drop-shadow-md transition-all hover:scale-105 duration-500 '>
                                {respuesta.textoRespuesta}
                            </button>
                        ))}
                </div>
            </div>
        </div>
     
    </>
  );
}
