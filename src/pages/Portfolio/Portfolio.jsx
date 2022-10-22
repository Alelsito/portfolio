// Styles
import './Portfolio.scss'

// Components
import Ecommerce from '@/components/Ecommerce'
import TvShowSearcher from '@/components/TvShowsSearcher'
import BreakingBad from '@/components/BreakingBad'
import MarvelComics from '@/components/MarvelComics'
import Atm from '@/components/Atm'
import NasaApod from '@/components/NasaApod'

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio__title'>
        <p> PORTFOLIO </p>
      </div>
      <div className='portfolio__container'>
        <Ecommerce />
        <TvShowSearcher />
        <BreakingBad />
        <MarvelComics />
        <Atm />
        <NasaApod />
      </div>

    </section>
  )
}

export default Portfolio
