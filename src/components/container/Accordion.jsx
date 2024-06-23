import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Accordion = ({id, title}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  }
  return (
    <div className='pb-8'>
      <div className='sm:text-xl text-base font-bold'>
        {title}
      </div>
      <BsChevronDown />
    </div>
  )
}

export default Accordion