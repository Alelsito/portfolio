import React from 'react'

// Logo
import js from '@/assets/Skillset/js.png'

const JavaScript = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={js} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> JS </p>
        </div>
      </div>
    </>
  )
}

export default JavaScript
