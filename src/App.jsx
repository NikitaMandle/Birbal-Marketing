import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoGrid from './components/LogoGrid.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Packages from './components/Packages.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import LeadPopup, { LEAD_SUBMITTED_KEY } from './components/LeadPopup.jsx'

const SPLASH_SEEN_KEY = 'birbal_splash_seen'
const LEAD_POPUP_DELAY_MS = 2000

export default function App() {
  // Splash shows once per browser tab session (not on every route/section change)
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return !sessionStorage.getItem(SPLASH_SEEN_KEY)
    } catch (err) {
      return true
    }
  })

  const [showLeadPopup, setShowLeadPopup] = useState(false)

  useEffect(() => {
    if (showSplash) return undefined

    let alreadySubmitted = false
    try {
      alreadySubmitted = localStorage.getItem(LEAD_SUBMITTED_KEY) === 'true'
    } catch (err) {
      alreadySubmitted = false
    }

    if (alreadySubmitted) return undefined

    const timer = setTimeout(() => setShowLeadPopup(true), LEAD_POPUP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [showSplash])

  function handleEnterSite() {
    try {
      sessionStorage.setItem(SPLASH_SEEN_KEY, 'true')
    } catch (err) {
      // ignore if sessionStorage is unavailable
    }
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onEnter={handleEnterSite} />
  }

  const isPackagesPage = window.location.pathname === '/packages'

  return (
    <>
      <Navbar />

      {isPackagesPage ? <Packages /> : (
        <>
          <Hero />
          <LogoGrid />
          <Services />
          <About />
        </>
      )}

      <Contact />
      <Footer />

      {showLeadPopup && <LeadPopup onClose={() => setShowLeadPopup(false)} />}
    </>
  )
}