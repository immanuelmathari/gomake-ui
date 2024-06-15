import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Home,About,Teacher,Contact,Course,Footer,Navbar} from './components/index'

function App() {

  return (
   <h1 className='bg-Solitude font-Poppins'>
    <Navbar />
    <Home />
    <About />
    <Course />
    <Teacher />
    <Contact />
    <Footer />
   </h1>
  )
}

export default App
