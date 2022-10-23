import React from 'react'

// Logo
import css from '@/assets/Skillset/css.png'

const Css = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={css} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> CSS </p>
        </div>
      </div>
    </>
  )
}

export default Css
