import React from 'react'

// Logo
import react from '@/assets/Skillset/react.png'

const ReactJs = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={react} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> REACT.JS </p>
        </div>
      </div>
    </>
  )
}

export default ReactJs
