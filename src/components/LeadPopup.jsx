import { useEffect, useState } from 'react'

export const LEAD_SUBMITTED_KEY = 'birbal_lead_submitted'

export default function LeadPopup({ onClose }) {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)

    try {
      localStorage.setItem(LEAD_SUBMITTED_KEY, 'true')
    } catch (err) {
      // localStorage unavailable — ignore, popup will still show as submitted this session
    }

    setTimeout(onClose, 1000)
  }

  return (
    <div className="lead-popup-backdrop" onClick={onClose}>
      <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lead-popup-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="lead-popup-eyebrow">Welcome To Birbal Marketing</div>
        <h2 className="lead-popup-title">Let's grow your business.</h2>
        <p className="lead-popup-note">
          Share your details and our team will connect with you on WhatsApp soon.
        </p>

        <form className="lead-popup-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your full name" required />

          <div className="phone-field">
            <span>+91</span>
            <input type="tel" name="phone" placeholder="WhatsApp number" required />
          </div>

          <select name="niche" defaultValue="" required>
            <option value="" disabled>Select your niche</option>
            <option>Sports</option>
            <option>Casino</option>
            <option>Stock Market</option>
            <option>Matka</option>
            <option>Other</option>
          </select>

          <textarea name="goal" placeholder="What do you want to achieve?" rows="3" required />

          <button className="btn-pill lead-popup-submit" type="submit">
            {submitted ? "Thanks! We'll connect soon" : 'Submit & continue'}
          </button>
        </form>
      </div>
    </div>
  )
}