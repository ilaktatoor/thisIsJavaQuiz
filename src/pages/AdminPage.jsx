import React from 'react'

export const AdminPage = () => {
  return (
    <>

      <div className='bg-mpink h-screen gap-y-3 jusify-center items-center'>
      <div className='py-6 flex justify-center'>
        <h1 className='text-4xl font-bold'>Agregar preguntas</h1>
      </div>

      <div className="py-7 flex justify-center items-center w-screen">
        <form class='justify-center'>
          <div class="mb-4">
            <label class="block text-2xl text-gray-700 font-bold mb-2" for="pregunta"> Inserte pregunta </label>
            <input class="shadow appearance-none block border-solid border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" id="pregunta" type="text" placeholder="Question" />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-mred hover:scale-105 hover:text-black hover:bg-mgray duration-500 drop-shadow-xl text-white             border-solid border-2 border-black font-bold py-2 px-4 rounded-full
                            " type="button"> Seleccionar imagen </button>
          </div>

          <div class="mb-4 py-5">
            <label class="block text-2xl text-gray-700 font-bold mb-2" for="pregunta"> Inserte respuesta </label>
            <input class="shadow appearance-none border-solid border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" id="pregunta" type="text" placeholder="Answer" />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-mred hover:scale-105 hover:text-black duration-500 hover:bg-mgray drop-shadow-xl text-white border-solid border-2 border-black font-bold py-2 px-4 rounded-full
                            " type="button"> Guardar </button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

