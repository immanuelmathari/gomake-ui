import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { motion,  AnimatePresence} from 'framer-motion';

const Accordion = ({id, title}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id); // if id is equal to active index, evaluate to null else, if id is not active index evaluate to id
  }
  return (
    <div className='pb-8'>
      <div className='flex items-center justify-between'>
      <div className='sm:text-xl text-base font-bold'>
        {title}
        </div>
      <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0" }   cursor-pointer transition-all duration-300`} onClick={() => handleClick(id)}/>
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div initial={{ height : 0}} animate={{height: 'auto'}} exit={{height : 0}} transition={{duration : 0.3}} style={{overflow: "hidden"}} className='pt-4' >
          <p className='text-sm leading-7 text-gray'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
          </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion