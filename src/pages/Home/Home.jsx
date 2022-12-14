import React from 'react'

// Layouts
import Footer from '@/layouts/Footer'

// Styles
import './Home.scss'

// Images
import cinta from '@/assets/cinta.png'

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <section className='home__left'>
          <img src={cinta} alt='cinta' />
        </section>
        <section className='home__center'>
          <div className='home__center__title'>
            <p> HOME </p>
          </div>
          <div className='home__center__name'>
            <p> HUGO </p>
            <p> LÓPEZ </p>
          </div>
          <div className='home__center__profile'>
            <p> FRONTEND DEVELOPER </p>
          </div>
          <div className='home__center__cv'>
            <a href='/cv-english.pdf' target='_blank'>
              <button className='home__center__cv__download'>
                <i className='fa-solid fa-cloud-arrow-down' />
                <p> DOWNLOAD MY CV </p>
              </button>
            </a>
          </div>
        </section>
        <section className='home__right'>
          <img src={cinta} alt='cinta' />
        </section>
      </section>
      <div className='linkPortfolio' id='portfolio' />
      <Footer />
    </>
  )
}

export default Home
