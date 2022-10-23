import React from 'react'

// Logo
import sass from '@/assets/Skillset/sass.png'

const Sass = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={sass} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> SASS </p>
        </div>
      </div>
    </>
  )
}

export default Sass
