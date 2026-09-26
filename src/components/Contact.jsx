import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy">
          <div className="eyebrow">Contact</div>
          <h2>Book a 15-Minute Strategy Call</h2>
          <p>Fill this quick form and our team will connect with you on WhatsApp within 24 hours.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <label>Name<input type="text" name="name" placeholder="Your full name" required /></label>
            <label>WhatsApp Number<span className="phone-field"><span>IN +91</span><input type="tel" name="phone" placeholder="9876543210" required /></span></label>
            <label>Niche<select name="niche" defaultValue="" required><option value="" disabled>Select niche</option><option>Sports</option><option>Casino</option><option>Stock Market</option><option>Other</option></select></label>
            <label>Monthly Ad Budget (Rs)<input type="number" name="budget" placeholder="450000" min="0" required /></label>
          </div>
          <label>What do you want to achieve in 4 months?<textarea name="goal" placeholder="Share your targets, current challenges and timeline." rows="4" required /></label>
          <button className="contact-submit" type="submit">{submitted ? 'Request Received' : 'Send to Birbal Marketing'}</button>
          <p className="contact-note">*Profit timeline depends on compliance, product-market fit and execution speed. We will review this on the call.</p>
        </form>
      </div>
    </section>
  )
}