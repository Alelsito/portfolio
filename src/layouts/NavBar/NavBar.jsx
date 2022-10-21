import React from 'react'

// Images
import navBarIcon from '@/assets/navBar-icon.png'

// Styles
import './NavBar.scss'

const NavBar = () => {
  return (
    <section className='nav-section'>
      <nav className='nav'>
        <div className='nav__rectangule'>
          <div className='nav__rectangule__logo'>
            <img src={navBarIcon} alt='navBarIcon' className='nav__rectangule__logo__image' style={{ width: 130 }} />
          </div>
          <div className='nav__rectangule__links'>
            <div className='nav__rectangule__links__container'>
              <a href='#home'>
                <p className='nav__rectangule__links__container__text'> HOME </p>
              </a>
              <p className='nav__rectangule__links__container__text'> PORTFOLIO </p>
              <p className='nav__rectangule__links__container__text'> SKILLSET </p>
              <p className='nav__rectangule__links__container__text'> ABOUT | CONTACT </p>
            </div>
          </div>
          <div className='nav__rectangule__social'>
            <div className='nav__rectangule__social__container'>
              <a href='https://www.linkedin.com/in/hugolopezblanco/' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-linkedin' />
              </a>
              <a href='https://github.com/Alelsito' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-github' />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default NavBar
