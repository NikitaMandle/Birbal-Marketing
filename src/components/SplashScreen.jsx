import { useEffect, useState } from 'react'

const FULL_TEXT = 'Welcome To Birbal Marketing'
const TYPE_SPEED_MS = 55
const LEAVE_ANIMATION_MS = 500

export default function SplashScreen({ onEnter }) {
  const [typed, setTyped] = useState('')
  const [doneTyping, setDoneTyping] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    let index = 0
    const typeTimer = setInterval(() => {
      index += 1
      setTyped(FULL_TEXT.slice(0, index))

      if (index >= FULL_TEXT.length) {
        clearInterval(typeTimer)
        setDoneTyping(true)
      }
    }, TYPE_SPEED_MS)

    return () => clearInterval(typeTimer)
  }, [])

  useEffect(() => {
    if (!doneTyping) return undefined

    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 200)
    const buttonTimer = setTimeout(() => setShowButton(true), 650)

    return () => {
      clearTimeout(subtitleTimer)
      clearTimeout(buttonTimer)
    }
  }, [doneTyping])

  function handleEnter() {
    if (isLeaving) return
    setIsLeaving(true)
    setTimeout(onEnter, LEAVE_ANIMATION_MS)
  }

  return (
    <div className={`splash-screen${isLeaving ? ' splash-leaving' : ''}`}>
      <img className="splash-logo" src="/assets/logo.png" alt="Birbal Marketing" />

      <h1 className="splash-title">
        {typed}
        <span className="splash-cursor" aria-hidden="true">|</span>
      </h1>

      <p className={`splash-subtitle${showSubtitle ? ' is-visible' : ''}`}>
        Worlds #1 in Surrogate Marketing – Dhanda, Rishtey aur Munafa !
      </p>

      <button
        type="button"
        className={`btn-pill splash-enter${showButton ? ' is-visible' : ''}`}
        onClick={handleEnter}
      >
        Enter Site
      </button>
    </div>
  )
}