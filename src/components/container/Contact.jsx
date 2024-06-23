import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='section' id='contact'>
      <div className='text-center max-w-[600px] mx-auto'> 
          <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Subscribe <span>Newsletter</span>
          </div>
          <p className='text-sm leading-7 text-gray'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          <motion.form initial={{ scale:0 }} whileInView={{ scale: 1}} transition={{duration : 0.3}} className='mt-5'>
            <input type='text' placeholder='Enter your email address' className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60' />
            <button className='text-sm p-4 bg-Teal shadow-md font-bold text-white'>Submit</button>
            </motion.form>
      </div>
    </div>
  )
}

export default Contact