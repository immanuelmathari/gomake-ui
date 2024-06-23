import React from 'react'
import teacher1 from '../../assets/A depiction of a sto.jpg.jpg'
import teacher2 from '../../assets/A depiction of a sto.jpg.jpg'
import { accordions } from '../../Data'
import Accordion from './Accordion'

function Teacher() {
  return (
    <div className='section' id='teacher'>
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.075rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>A member</span> <br/> of our team
          </div>
          <p>Our statement of commitment from the ceo</p>
          <p className='text-sm leading-7 text-gray mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>Start With GoMake</button>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher1} alt='sorry'/>
        </div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.075rem] text-[1.5rem] mb-5'>
            Become <span className='text-Teal'>A member</span> <br/> of our team
          </div>
          <p>Our statement of commitment from the ceo</p>
          <p className='text-sm leading-7 text-gray mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold'>Start With GoMake</button>
        </div>
        <div className='p-4 md:w-3/4'>
          <img src={teacher2} alt='sorry'/>
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875rem]'>Frequently <span className='text-Teal'>Asked questions</span></div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  )
}

export default Teacher