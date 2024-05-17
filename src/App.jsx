import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import HeadNavbar from './components/HeadNavbar'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App