// React
import { useState } from 'react'

// Images
import navBarIcon from '@/assets/navBar-icon.png'

// Styles
import './NavBar.scss'

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const styles = {
    mobileMenu: {
      display: displayMenu ? 'block' : 'none'
    }
  }

  const handleOnClickDisplayMenuTrue = () => {
    setDisplayMenu(true)
  }

  const handleOnClickDisplayMenuFalse = () => {
    setDisplayMenu(false)
  }

  return (
    <section className='nav-section'>
      <nav className='nav'>
        <div className='nav__rectangule'>
          <div className='nav__rectangule__logo'>
            <a href='#home'>
              <img src={navBarIcon} alt='navBarIcon' className='nav__rectangule__logo__image' />
            </a>
          </div>
          <div className='nav__rectangule__links'>
            <div className='nav__rectangule__links__container'>
              <a href='#home'>
                <p className='nav__rectangule__links__container__text'> HOME </p>
              </a>
              <a href='#portfolio'>
                <p className='nav__rectangule__links__container__text'> PORTFOLIO </p>
              </a>
              <a href='#skillset'>
                <p className='nav__rectangule__links__container__text'> SKILLSET </p>
              </a>
              <a href='#aboutContact'>
                <p className='nav__rectangule__links__container__text'> ABOUT | CONTACT </p>
              </a>
            </div>
            <div className='nav__rectangule__links__container--mobile'>
              <i className='fa-solid fa-bars' onClick={handleOnClickDisplayMenuTrue} />
              <div
                className='nav__rectangule__links__container--mobile__section'
                style={styles.mobileMenu}
              >
                <div className='nav__rectangule__links__container--mobile__section__text'>
                  <i className='fa-regular fa-circle-xmark' onClick={handleOnClickDisplayMenuFalse} />
                  <a href='#home'>
                    <p className='nav__rectangule__links__container--mobile__section__text__p' onClick={handleOnClickDisplayMenuFalse}> HOME </p>
                  </a>
                  <a href='#portfolio'>
                    <p className='nav__rectangule__links__container--mobile__section__text__p' onClick={handleOnClickDisplayMenuFalse}> PORTFOLIO </p>
                  </a>
                  <a href='#skillset'>
                    <p className='nav__rectangule__links__container--mobile__section__text__p' onClick={handleOnClickDisplayMenuFalse}> SKILLSET </p>
                  </a>
                  <a href='#aboutContact'>
                    <p className='nav__rectangule__links__container--mobile__section__text__p' onClick={handleOnClickDisplayMenuFalse}> ABOUT | CONTACT </p>
                  </a>
                  <div className='nav__rectangule__links__container--mobile__section__text__social'>
                    <a href='https://www.linkedin.com/in/hugolopezblanco/' target='_blank' rel='noreferrer'>
                      <i className='fa-brands fa-linkedin' />
                    </a>
                    <a href='https://github.com/Alelsito' target='_blank' rel='noreferrer'>
                      <i className='fa-brands fa-github' />
                    </a>
                  </div>
                </div>
              </div>
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
