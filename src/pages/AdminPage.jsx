import React, { useState } from 'react'

export const AdminPage = () => {

const [image,setImage] = useState("");

const onSelectFile = (event) => {
  setImage(event.target.files[0]);
};

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
            <input class="shadow appearance-none block border-solid border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pregunta" type="text" placeholder="Question" />
          </div>

          <div class="flex items-center justify-between ">
            <label className='bg-mred hover:scale-105 hover:text-black duration-500 hover:bg-mgray drop-shadow-xl text-white border-solid border-2 border-black font-bold py-2 px-4 rounded-full'>Seleccionar imagen
            <input type="file" name="image" onChange={onSelectFile} accept="image/png, image/jpeg, image/jpg" className='hidden' />
            </label>
          </div>

          <div className="inline-grid grid-cols-1 mt-3">
            {image ? <img src={URL.createObjectURL(image)} alt="image" className='h-60 w-64'/>
            :<img src={""} className='hidden'/>}
            {image ? <button class="bg-mred hover:scale-105 hover:text-black duration-500 hover:bg-mgray drop-shadow-xl text-white border-solid border-2 border-black font-bold py-2 px-4 rounded-full mt-2" type="button"> Borrar </button>  :<img src={""} className='hidden'/>}
            
            
          </div>

          <div class="mb-4 py-5">
            <label class="block text-2xl text-gray-700 font-bold mb-2" for="pregunta"> Inserte respuesta </label>
            <input class="shadow appearance-none border-solid border-2 border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pregunta" type="text" placeholder="Answer" />
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-mred hover:scale-105 hover:text-black duration-500 hover:bg-mgray drop-shadow-xl text-white border-solid border-2 border-black font-bold py-2 px-4 rounded-full" type="button"> Guardar </button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

