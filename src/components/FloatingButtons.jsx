import { useState } from 'react'

// TODO: replace with your real WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919999999999'
const WHATSAPP_MESSAGE = 'Hi Birbal Marketing, I want to grow my business.'

export default function FloatingButtons({ onAskAI }) {
  const [hasUnread, setHasUnread] = useState(true)

  function handleWhatsAppClick() {
    const text = encodeURIComponent(WHATSAPP_MESSAGE)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  function handleAskAIClick() {
    setHasUnread(false)
    onAskAI()
  }

  return (
    <div className="floating-buttons">
      <button
        type="button"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat on WhatsApp"
        onClick={handleWhatsAppClick}
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.6a11.94 11.94 0 0 0 3.95.67C22.63 28.07 28 22.7 28 16.06 28 9.43 22.64 3 16.01 3zm0 21.86c-1.31 0-2.6-.25-3.8-.75l-.27-.11-4.79.95.98-4.67-.18-.3a9.7 9.7 0 0 1-1.52-5.16c0-5.4 4.4-9.8 9.8-9.8 5.39 0 9.79 4.4 9.79 9.8s-4.4 9.84-10.01 9.84zm5.4-7.36c-.29-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.22 1.35.19 1.86.12.57-.09 1.75-.72 2-1.41.24-.69.24-1.28.17-1.41-.07-.13-.27-.2-.56-.35z" />
        </svg>
      </button>

      <button
        type="button"
        className="floating-btn floating-btn-ai"
        onClick={handleAskAIClick}
      >
        <span className="floating-btn-ai-star" aria-hidden="true">✦</span>
        <span>Ask Birbal AI</span>
        <span className="floating-btn-ai-status" aria-hidden="true" />
        {hasUnread && <span className="floating-btn-ai-badge">1</span>}
      </button>
    </div>
  )
}