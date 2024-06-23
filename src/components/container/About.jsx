import React from 'react'
import about from '../../assets/go one.jpg'

function About() {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} alt='about gomake' className='p-4' />
        </div>
        <div>
          <div className='font-bold mb-5 text-[1.5rem] sm:text-[1.875rem]'>
            We provide the best <span className='text-Teal'> licensing services </span>
          </div>
          <p className='text-sm text-gray leading-7 mb-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <button className='bg-Teal px-6 py-3 font-bold text-white rounded-lg mr-4 text-sm hover:bg-white hover:text-Teal hover:translate-x-3 hover:duration-200 hover:transition-all'>Know more</button>
          <button className='px-6 py-3 text-sm border border-solid border-gray rounded-lg font-bold'>Know little</button>
        </div>
      </div>
    </div>
  )
}

export default About