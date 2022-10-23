import React from 'react'

// Logo
import bootstrap from '@/assets/Skillset/bootstrap.png'

const Bootstrap = () => {
  return (
    <>
      <div className='skillset__card'>
        <div className='skillset__card__top'>
          <img src={bootstrap} alt='logo' />
        </div>
        <div className='skillset__card__bottom'>
          <p> BOOTSTRAP </p>
        </div>
      </div>
    </>
  )
}

export default Bootstrap
