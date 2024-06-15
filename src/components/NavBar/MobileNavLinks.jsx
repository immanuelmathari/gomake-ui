import React from 'react'
import { Link } from 'react-scroll'


const MobileNavLinks = ({link, href, setToggle}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
        <Link to={href} spy={true} smooth={true} duration={500} offset={-50} className="font-semibold transition-all duration-300" onClick={(prev) => setToggle(!prev)}>{link}</Link>
    </li>
  )
}

export default MobileNavLinks