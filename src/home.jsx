import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Index from './Components/Index/Index'

const App = () => {
  return (
    <>
    <div className='h-screen space-y-20 bg-black'>
      <Navbar />
      <Index />
      <Footer />
    </div>
    </>
  )
}

export default App