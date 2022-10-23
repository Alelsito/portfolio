import React from 'react'

// Logo
import bem from '@/assets/Skillset/bem.png'

const Bem = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={bem} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> BEM </p>
        </div>
      </div>
    </>
  )
}

export default Bem
