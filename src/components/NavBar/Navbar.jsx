import React, { useState } from 'react'
import { navLinks } from '../../Data'
import { HiMenuAlt1, HiX } from 'react-icons/hi'
import NavLink from './NavLink'
import MobileNavLinks from './MobileNavLinks'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // makes it kind of sticky even when you scroll
    <div className='fixed w-full top-0 left-0 z-20'>
      <div className='container py-4 mx-auto flex items-center justify-between px-2'>
        <div className='flex items-center gap-4'>
          <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(!toggle)}/>
          <div className='text-xl text-Teal uppercase tracking-wide font-bold'>
            GoMake
          </div>
        </div>
        <div className='sm:flex items-center hidden'>
          {navLinks.map((navLink) => {
            return <NavLink key={navLink.id} {...navLink}/>
          })}
        </div>
        <button className='border py-3 px-6 font-bold text-sm border-solid rounded-lg bg-Teal text-white hover:bg-white hover:text-Teal hover:translate-x-3 duration-200 hover:scale-110 cursor-pointer'>Sign up</button>
        {toggle && (
          <div className='fixed top-0 left-0 w-96 h-full z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8 sm:hidden'>
          {navLinks.map((navLink) => {
            return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}/>
          })}
          <HiX className='absolute right-12 top-8 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar