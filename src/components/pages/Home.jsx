import React from 'react'
import Background from '../../assets/background.jpg'
import Profile from '../../assets/profile.png'
import Resume from '../../assets/STEVEN QUISMUNDO NARIZ IT-RESUME.pdf'
import '../pages/Home.css'
import { Typewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';
import { fadeIn } from '../fragments/variants'
import { motion } from 'framer-motion'

const Home = () => {
  const typeEffect = Typewriter({
    words: ['<Website Developer/>','<App Developer/>'],
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
    loop: true,
    cursor: true,
    cursorStyle: ' |',
    cursorColor: '#cacaca',
    cursorBlinking: true,

  })
  return (
    <section className='home_section'>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="home_images">
        <img src={Background} alt="Background" className='home_background' />
        <img src={Profile} alt="Home Profile" className='home_profile' />
      </motion.div>
      {/* ------------------home details bio and button */}
      <motion.div 
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      className="home_details">
        <h1 className='name '>Steven Nariz</h1>
        <div className="typed_container">
          <h2 className='typeText '>{typeEffect}</h2>
        </div>
        <p className='bio '>I create my own portfolio responsive website to show my skills and knowledge in programming, hope you like it a user-friendly website ,I use a React with npm package</p>
        <div className="contact_download">
          <NavLink to="/contact">
            <button className=''><span>Contact me</span></button>
          </NavLink>
          <a href={Resume} download="Steven-Nariz-Resume">
            <button className='secondary' ><span>Download CV</span></button>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Home