
// Layouts
import NavBar from './layouts/NavBar'

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
    </>
  )
}

export default App
