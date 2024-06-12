import React from 'react'
import '../pages/Project.css'
import Working from '../../assets/working.svg'
import Programming from '../../assets/coding.svg'
import Portfolio from '../../assets/project1.jpg'
import { NavLink } from 'react-router-dom'
import LoaderScroll from '../fragments/LoaderScroll'
import { fadeIn } from '../fragments/variants'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <section className='project_section'>
      <h1 className='project_header'>My Project</h1>
      <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      class="project__card">
        <img src={Portfolio} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Portfolio</h2>
          <p class="project__description">I made this project using Vite|React Framework and npm packages, this Portfolio is responsive tool with media query for any device and to show my knowledge to programming.</p>
          <div className="project_buttons">
            <a href='https://drive.google.com/file/d/1PYWBgqbdPhTa7BlRsyihNWQr7gov52x2/view?usp=drive_link' target='_blank'><button class=""><span>Live Demo</span></button></a>
            <a href='https://github.com/TB4N/Portfolio-Vite-React' target='_blank'><button class="secondary"><span>Github</span></button></a>
          </div>
        </div>
      </motion.div>

      <motion.div 
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}

      class="project__card">
        <img src={Working} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Project</h2>
          <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <div className="project_buttons">
            <a href='https://drive.google.com/drive/u/0/folders/1oxciBcN2SuGr5Gk4NMPyeUKqFCkv7HKchttps://drive.google.com/file/d/11c4fvRqHv8Uj1BHYtQy3xQNgEwN0-11v/view?usp=drive_link' target='_blank'><button class=""><span>Live Demo</span></button></a>
            <a href='https://github.com/TB4N/SchoolManagementSystemWithMySql' target='_blank'><button class="secondary"><span>Github</span></button></a>
          </div>
        </div>
      </motion.div>

      <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}

      class="project__card">
        <img src={Programming} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Project</h2>
          <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <div className="project_buttons">
            <a href='https://drive.google.com/file/d/1PYWBgqbdPhTa7BlRsyihNWQr7gov52x2/view?usp=drive_link' target='_blank'><button class=""><span>Live Demo</span></button></a>
            <a href='https://github.com/TB4N/Portfolio-Vite-React' target='_blank'><button class="secondary"><span>Github</span></button></a>
          </div>
        </div>
      </motion.div>
      <LoaderScroll />
    </section>
  )
}

export default Project