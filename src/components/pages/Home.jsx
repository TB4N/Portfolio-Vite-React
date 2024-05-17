import React from 'react'
import Background from '../../assets/background.jpg'
import Profile from '../../assets/profile.png'
import Resume from '../../assets/STEVEN QUISMUNDO NARIZ IT-RESUME.pdf'
import '../pages/Home.css'
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css'

const Home = () => {
  const typeEffect = Typewriter({
    words: ['<Website Developer/>'],
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
      <div className="home_images">
        <img src={Background} alt="Background" className='home_background' />
        <img src={Profile} alt="Home Profile" className='home_profile' />

      </div>
      {/* ------------------home details bio and button */}
      <div className="home_details">
        <h1 className='name animate__animated animate__zoomInDown'>Steven Nariz</h1>
        <div className="typed_container">
          <h2 className='typeText animate__animated animate__fadeIn'>{typeEffect}</h2>
        </div>
        <p className='bio animate__animated animate__fadeIn'>I create my own portfolio responsive website to show my skills and knowledge in programming, hope you like it a user-friendly website ,I use a React with npm package</p>
        <div className="contact_download">
          <a href="/contact">
          <button className='animate__animated animate__jello'><span>Contact me</span></button>
          </a>
          <a href={Resume} download="Steven-Nariz-Resume">
          <button className='secondary animate__animated animate__jello' ><span>Download CV</span></button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home