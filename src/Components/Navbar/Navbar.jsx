import React from 'react'
import logo from "../../assets/recrut.svg"

const Navbar = () => {
  return (
    <div>
        <header className="header absolute top-0 left-0 w-full px-10 py-5 bg-black flex justify-between items-center z-[100]">
            <div className='w-96 h-16'>
              <img src={logo} alt="" />
              </div>
            <a href="" className="logo"></a>

            <nav className="navbar flex">
                <a href="/" className='relative text-[18px] text-[#f6f8f8] font-medium ml-10 hover:text-[#008261]'>Home</a>
                <a href="/cadastro" className='relative text-[18px] text-[#f6f8f8] font-medium ml-10 hover:text-[#008261]'>Meus números</a>
                <a href="/" className='relative text-[18px] text-[#f6f8f8] font-medium ml-10 hover:text-[#008261]'>Termos</a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar