import React from 'react'

// Components
import Html from '@/components/Html'
import Css from '@/components/Css'
import Sass from '@/components/Sass'
import Bem from '@/components/Bem'
import JavaScript from '@/components/JavaScript'
import ReactJs from '@/components/ReactJs'
import Bootstrap from '@/components/Bootstrap'

// Styles
import './Skillset.scss'

const Skillset = () => {
  return (
    <section className='skillset' id='skillset'>
      <div className='skillset__title'>
        <p> SKILLSET </p>
      </div>
      <div className='skillset__container'>
        <Html />
        <Css />
        <Sass />
        <Bem />
        <JavaScript />
        <ReactJs />
        <Bootstrap />
      </div>
    </section>
  )
}

export default Skillset
