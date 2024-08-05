import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <div className='bg-[#0A0A0A] text-gray-300 relative inset-x-0 bottom-0'>
            <div className='flex justify-between items-center'>
                <div className='grid pt-5 p-4'>
                    <p className='font-bold'>Inscreva-se em nossa newsletter</p>
                    <p>As últimas notícias, enviadas para sua caixa de entrada semanalmente.</p>
                </div>

                <form action="">
                    <div className='flex justify-end p-4 space-x-2'>
                        <input type="text" placeholder='Digite seu e-mail' className="flex row-span-3 p-2 bg-black text-gray-900 border border-gray-300 rounded-lg
                        focus:ring-green-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                        
                        <button className="rounded-lg bg-green-500 font-sans text-sm 
                        uppercase text-black shadow-gray-900/10 transition-all hover:shadow-lg
                        hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none 
                        disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Me inscrever
                        </button>
                    </div>
                </form>
        </div>
            
            <div className="max-x-[1240px] mx-auto border-t-4 border-white py-8
            sm:flex-row text-center divide-y-2">
                <h6 className='absolute right-4 font-bold upercase'>
                © 2024 Nossa Sorte Oficial. Todos os direitos reservados.
                </h6>
            </div>
                <div className='sm:w-[30px] pt-4 text-2xl absolute bottom-2 left-4 hover:text-white cursor-pointer'>
                    <FaInstagram />
                </div>
        </div>
        </>
    )
}
export default Footer