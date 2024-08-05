import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
        <div className='mt-24 
        bg-[#0A0A0A] text-gray-300 
        relative inset-x-0 bottom-0'>
        
        <div className='grid pt-5 p-4'>
            <p className='font-bold'>
            Inscreva-se em nossa newsletter
            </p>
            <p>
            As últimas notícias, enviadas para sua caixa de entrada semanalmente.
            </p>
        </div>

        <form action="" className='flex p-4'>
            <div className="mb-5 right-1">
                <input type="text" placeholder='Digite seu e-mail' className='' />
                <button className='bg-teal-600'></button>
            </div>
        </form>
            
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