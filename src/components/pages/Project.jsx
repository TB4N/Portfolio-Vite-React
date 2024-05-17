import React from 'react'
import '../pages/Project.css'
import Working from '../../assets/working.svg'
import Programming from '../../assets/coding.svg'
import Portfolio from '../../assets/project1.jpg'

const Project = () => {

  return (
    <section className='project_section'>
      <h1 className='project_header'>My Project</h1>
      <div class="project__card">
        <img src={Portfolio} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Portfolio</h2>
          <p class="project__description">I made this project using Vite|React Framework and npm packages, this Portfolio is responsive tool for media query for any device to use my project</p>
          <div className="project_buttons">
            <button class=""><span>Live Demo</span></button>
            <button class="secondary"><span>Github</span></button>
          </div>
        </div>
      </div>
      <div class="project__card">
        <img src={Working} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Project</h2>
          <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <div className="project_buttons">
            <button class=""><span>Live Demo</span></button>
            <button class="secondary"><span>Github</span></button>
          </div>
        </div>
      </div>
      <div class="project__card">
        <img src={Programming} alt="Project 1" className='project__img' />
        <div class="project__content">
          <h2 className="project__title">Project</h2>
          <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <div className="project_buttons">
            <button class=""><span>Live Demo</span></button>
            <button class="secondary"><span>Github</span></button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Project