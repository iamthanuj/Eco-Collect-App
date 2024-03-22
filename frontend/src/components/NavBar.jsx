import React from 'react'
import adminImage from '../assets/adminLogo.jpg'

function NavBar() {
  return (
    <div className='fixed z-10 w-full bg-mainColor h-[80px] flex items-center shadow-md'>
        <div className='container mx-auto flex items-center justify-between'>

            {/* Logo */}
            <div className='flex gap-3'>
                <p to="/home" className='flex items-center text-white text-3xl font-bold'>Eco Collect</p>
            </div>
            
            {/* user profile */}
            <div>
                <img src={adminImage} alt=""  className='w-[40px] h-[40px]  rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default NavBar