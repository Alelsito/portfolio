import React from 'react'

// Styles
import './AboutContact.scss'

// Photo
import selfie from '@/assets/Selfie/hugo.jpeg'

const AboutContact = () => {
  return (
    <section className='aboutContact' id='aboutContact'>
      <div className='aboutContact__title'>
        <p> ABOUT | CONTACT </p>
      </div>
      <div className='aboutContact__container'>
        <div className='aboutContact__left'>
          <img src={selfie} alt='HugoLopez' />
        </div>
        <div className='aboutContact__right'>
          <div className='aboutContact__right__about'>
            <p>Passionate learner for web development, looking for work <br />
              experience that allows him potentially increment technicians and <br />
              social abilities, and at the same time contribute ideas and <br />
              knowledge to his work group. <br />
              <br />
              <span> Currently: </span> developing my career as a frontend developer. <br />
              <span> Goal in progress: </span> Full Stack Developer.
            </p>
          </div>
          <div className='aboutContact__right__contact'>
            <p>Hugo Alejandro López Blanco <br />
              Puebla, México <br />
              2227721239 <br />
              hugoalejandrolopezblanco@gmail.com <br />
            </p>
          </div>
          <div className='aboutContact__right__mailto'>
            <a href='mailto:hugoalejandrolopezblanco@gmail.com'>
              <p> Contact me </p>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutContact
