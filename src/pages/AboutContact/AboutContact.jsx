import React from 'react'

// Layouts
import Footer from '@/layouts/Footer/Footer'

// Styles
import './AboutContact.scss'

// Photo
import selfie from '@/assets/Selfie/hugo.jpeg'

const AboutContact = () => {
  return (
    <>
      <section className='aboutContact'>
        <div className='aboutContact__title'>
          <p> ABOUT | CONTACT </p>
        </div>
        <div className='aboutContact__container'>
          <div className='aboutContact__left'>
            <img src={selfie} alt='HugoLopez' />
          </div>
          <div className='aboutContact__right'>
            <div className='aboutContact__right__about'>
              <p>Passionate learner for web development, looking for work
                experience that allows him potentially increment technicians and
                social abilities, and at the same time contribute ideas and
                knowledge to his work group.
              </p>
              <p>
                <span> Currently: </span> developing my career as a frontend developer. <br />
                <span> Goal in progress: </span> Full Stack Developer.
              </p>
            </div>
            <div className='aboutContact__right__contact'>
              <p> Hugo Alejandro López Blanco </p>
              <p> Puebla, México </p>
              <p> 2227721239 </p>
              <p> hugoalejandrolopezblanco@gmail.com </p>
            </div>
            <div className='aboutContact__right__mailto'>
              <a href='mailto:hugoalejandrolopezblanco@gmail.com'>
                <button>
                  <p> Contact me </p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutContact
