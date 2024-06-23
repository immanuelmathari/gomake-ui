import React from 'react'
import { categories } from '../../../Data'
import { courses } from '../../../Data'
import Category from './Category'
import Corse from './Corse'

function Course() {
  return (
    <div className='section' id='courses'>
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our top <span className='text-Teal'>Categories</span>
        </div>
        <p className='text-sm leading-7 text-gray max-w-[700px] mx-auto' >
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
        {/* {categories.map((category) => (
          <div>{category.category}</div>
        ))} */}
        {categories.map((category) => {
          return <Category key={category.id} {...category}/>
        })}
      </div>
      <div className='text-xl font-bold mt-32'>Popular services</div>
      <div className='mt-12 overflow-x-hidden w-full'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
          {courses.map((course) => {
            return <Corse key={course.id} {...course}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Course