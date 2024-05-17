import React from 'react'
import '../pages/Contact.css'
import { FaLinkedin, FaGithub, FaFacebook, FaTelegram } from 'react-icons/fa'
import ContactImg from '../../assets/envelope.svg'
import GoogleLocation from '../fragments/GoogleLocation'
import ContactForm from '../fragments/ContactForm'
const Contact = () => {
  return (
    <section className='contact_section'>
      <h1 className='contact_header'>Contact</h1>
      <div className="contact_row">
        {/* Form for get in touch */}
        <div className="form_container">
          <span class="heading">Get in touch</span>
          {/* form fragment */}
          <div className="form__row">
            <ContactForm />
            <div className="contact__right">
              <img src={ContactImg} alt="Contact image" className='contact__image' />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="contact_map">
        <GoogleLocation />
      </div>
      <div className="contact__footer">
        {/* my social */}
        <ul class="social__link">
          <li class="social__content">
            <a
              href="https://www.linkedin.com/in/steven-nariz-a103602bb/"
              aria-label="LinkedIn"
              data-social="linkedin"
              target='_blank'>
              <div class="filled"></div>
              <FaLinkedin className='social__icon' />
            </a>
            <div class="tooltip">LinkedIn</div>
          </li>

          <li class="social__content">
            <a href="https://github.com/TB4N" aria-label="GitHub" data-social="github" target='_blank'>
              <div class="filled"></div>
              <FaGithub className='social__icon' />
            </a>
            <div class="tooltip">GitHub</div>
          </li>

          <li class="social__content">
            <a
              href="https://www.facebook.com/steven.nariz"
              aria-label="Facebook"
              data-social="facebook" target='_blank'>
              <div class="filled"></div>
              <FaFacebook className='social__icon' />
            </a>
            <div class="tooltip">Facebook</div>
          </li>

          <li class="social__content">
            <a href="https://t.me/snariz00" aria-label="Telegram" data-social="telegram" target='_blank'>
              <div class="filled"></div>
              <FaTelegram className='social__icon' />
            </a>
            <div class="tooltip">Telegram</div>
          </li>
        </ul>
        <h2 className='footer__created'>&copy; {new Date().getFullYear()} Created by Steven Nariz. All rights reserved.</h2>
      </div>

    </section>
  )
}

export default Contact