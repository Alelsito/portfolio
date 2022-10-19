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
              <p className='nav__rectangule__links__container__text'> HOME </p>
              <p className='nav__rectangule__links__container__text'> PORTFOLIO </p>
              <p className='nav__rectangule__links__container__text'> SKILLSET </p>
              <p className='nav__rectangule__links__container__text'> ABOUT | CONTACT </p>
            </div>
          </div>
          <div className='nav__rectangule__social'>
            <div className='nav__rectangule__social__container'>
              <i className='fa-brands fa-linkedin' />
              <i className='fa-brands fa-github' />
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default NavBar
