import React from 'react'
import hero from "../../assets/go two.jpg"
import {logos} from "../../Data"

export default function Home() {
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <div className='font-bold text-xs text-Teal mb-4'>Your licensing patner</div>
          <div className='text-[1.825rem] sm:text-[2.5rem] font-bold'>
            The is <br /> the new way <br /> to get licenses 
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>
            lorem ipsum dolor sit amet consecterur adipisicing elit, Vero offices at vello quit enums readyornot
          </p>
          <div className='mt-6'>
            <button className='bg-Teal px-6 py-3 font-bold text-white rounded-lg mr-4 text-sm hover:bg-white hover:text-Teal hover:translate-x-3 hover:duration-200 hover:transition-all'>Get Started</button>
            <button className='px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm'>Discover</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} alt="gomake" />
        </div>
      </div>
      <div>
        <p className='text-center text-xl'>
        We collaborate with <span className='text-Teal'>list the companies gomake works with</span>
        </p>
        <div className='flex items-center justify-center flex-wrap gap-4' >
          {logos.map((logo,index) => (
            <div className='w-28' key={index}>
              <img src={logo} alt="" className='w-full object-cover' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
