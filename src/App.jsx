import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoGrid from './components/LogoGrid.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Packages from './components/Packages.jsx'


export default function App() {
  if (window.location.pathname === '/packages') {
    return (
      <>
        <Navbar />
        <Packages />
        <Contact />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <LogoGrid />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
