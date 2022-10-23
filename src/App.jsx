
// Layouts
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'

// Pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skillset from './pages/Skillset'
import AboutContact from './pages/AboutContact/AboutContact'

function App () {
  return (
    <>
      <NavBar />
      <Home />
      <Portfolio />
      <Skillset />
      <AboutContact />
      <Footer />
    </>
  )
}

export default App
