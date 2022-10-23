import React from 'react'

// Logo
import html from '@/assets/Skillset/html.png'

const Html = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={html} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> HTML </p>
        </div>
      </div>
    </>
  )
}

export default Html
