// React
import { useState } from 'react'

// Styles
import '../pages/Portfolio/Portfolio.scss'

// Images
import vhs from '@/assets/vhs.png'
import atm from '@/assets/Projects/atm.png'

const Atm = () => {
  const [display, setDisplay] = useState(false)

  const styles = {
    display: {
      visibility: display ? 'visible' : 'hidden',
      opacity: display ? 1 : 0
    },
    text: {
      transform: display ? 'translateY(-87px)' : 'translateY(0px)'
    },
    buttons: {
      visibility: display ? 'visible' : 'hidden',
      opacity: display ? 1 : 0,
      transform: display ? 'translateY(88px)' : 'translateY(0px)'
    }
  }

  const onMouseOverDisplay = () => {
    setDisplay(true)
  }

  const onMouseLeaveDisplay = () => {
    setDisplay(false)
  }

  return (
    <div className='portfolio__container__project'>
      <div className='portfolio__container__project__line' />
      <img src={vhs} alt='vhs' className='portfolio__container__project__vhs' />
      <div
        className='portfolio__container__project__info'
        onMouseOver={onMouseOverDisplay}
        onMouseLeave={onMouseLeaveDisplay}
      >
        <p
          className='portfolio__container__project__info__text'
          style={styles.text}
        >
          ATM
        </p>
        <div
          className='portfolio__container__project__info__image-container'
          style={styles.display}
        >
          <img src={atm} alt='atm' className='portfolio__container__project__info__image-container__image' />
        </div>
        <div
          className='portfolio__container__project__info__buttons'
          style={styles.buttons}
        >
          <a href='https://cajero-automatico.netlify.app/' target='_blank' rel='noreferrer'>
            <button className='portfolio__container__project__info__buttons__live-site'> LIVE SITE </button>
          </a>
          <a href='https://github.com/Alelsito/atm' target='_blank' rel='noreferrer'>
            <button className='portfolio__container__project__info__buttons__repository'> REPOSITORY </button>
          </a>
        </div>
      </div>
      <div className='portfolio__container__project__line--bottom' />
    </div>
  )
}

export default Atm
