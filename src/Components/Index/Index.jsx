import React from 'react'
import Aimagem from '../../assets/Prancheta.png'

function Index() {
  return (
    <main className='flex flex-col-2 justify-between bg-black static p-2'>
      <div className='h-[880px] w-[479px] inset-y-0 left-2'>
          <img src={Aimagem} alt="" />
      </div>

      <aside className='w-72 static right-2 py-4'>
        <div className='flex place-content-around text-3xl p-2'>
          <p className='text-white'>Finalizar</p> 
          <p className='font-bold text-green-700'>Compra</p>
        </div>
        <div className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
        </div>
        <form className='max-w-sm mx-aut' action="">
          <div className="mb-5">
            <input type="text" placeholder='Nome'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='CPF'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='E-mail'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
          <div className="mb-5">
            <input type="text" placeholder='WhatsApp'
            className="block w-full p-4 bg-black text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
          </div>
        </form>
      </aside>
    </main>
  )
}

export default Index