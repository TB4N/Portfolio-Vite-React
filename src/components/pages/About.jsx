import React from 'react'
import '../pages/About.css'
import Profile from '../../assets/profile.png'
import Working from '../../assets/working.svg'
import Certificate from '../../assets/certificate.svg'
import { SiHtml5, SiJavascript, SiCss3, SiVisualstudio, SiVisualbasic, SiReact, SiMongodb, SiXampp, SiNpm } from 'react-icons/si'
import { FaJava, FaGitAlt, FaGithub } from 'react-icons/fa'
import LoaderScroll from '../fragments/LoaderScroll'
import { fadeIn } from '../fragments/variants'
import { motion } from 'framer-motion'


const About = () => {

  return (
    <section className='about-section'>
      <h1 className='header_about'>About Me</h1>
      <div className="card_about">
        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="card">
          <div className="card_content">
            <img src={Profile} alt="My Profile on About" className='profile' />
            <p className='about_me'>I am a graduate of Bachelor of Science in Information Technology and live in San Jose Rodriguez Rizal Province. I have a passion for web development and aspire to be a Full-Stack developer. I worked as an encoder to help my family and bought a computer to practice other programming languages and grow as a programmer. Give me a chance to prove my programming skills.</p>
          </div>
        </motion.div>

        <h1 className='header_about'>Experience</h1>
        <motion.div 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

        className="card">
          <div className="card_content">
            <img src={Working} alt="My Experience in About" className='profile' />
            <p className='about_me'>
              Junior Office Aide (Data Encoder)<br />
              University of the Philippines Office of Admissions<br />
              <em>October 24, 2023 - February 2024</em><br />
              Data entry of UPCAT Applicants information to the systems;
              verifying of encoded data;
              <br />
              <br />
              On The Job Training<br />
              Office of the College Secretary, UP Diliman College of Mass Communication<br />
              <em>April 11, 2023 – July 2023</em><br />
              Sorting of student jacket and forms;
              Assist in answer telephone calls;
              Encoding office documents;
              Assist to OCS events;
              Installing software;
            </p>
          </div>
        </motion.div>

        <h1 className='header_about'>Certificate</h1>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}

        className="card">
          <div className="card_content">
            <img src={Certificate} alt="My Certificate in About" className='profile' />
            <p className='about_me'>
              <a href="https://www.freecodecamp.org/certification/StevenNariz/responsive-web-design" target="_blank" rel="noopener noreferrer">Responsive Web  Design
                Free Code Camp
                April 16, 2024</a>
              <br />
              <br />
              TWSP Programming (JAVA) NC III
              Technical Education and Skills Development Authority (TESDA)
              October 10, 2023
              <br />
              <br />
              Website Design and Maintenance
              UPD College of Mass Communication
              May 15, 2023
            </p>
          </div>
        </motion.div>
      </div>
      <h1 className='header_about'>Technologies</h1>
      <motion.div 
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      
      className="components">
        <div className="btn">
          <span className="img_container">
            <SiHtml5 className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiCss3 className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiJavascript className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <FaJava className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiVisualstudio className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiVisualbasic className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiReact className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiMongodb className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiXampp className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <FaGitAlt className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <FaGithub className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
        <div className="btn">
          <span className="img_container">
            <SiNpm className='icon-component' />
          </span>
          <span className="bg"></span>
        </div>
      </motion.div>
      <LoaderScroll />
    </section>
  )
}

export default About