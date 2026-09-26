import { useEffect, useRef, useState } from 'react'

// TODO: replace with your real WhatsApp Business number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = '919999999999'

const NICHE_OPTIONS = [
  'E-commerce',
  'Real Estate',
  'Finance & Trading',
  'Coaching / Education',
  'Healthcare',
  'Casino / Gaming',
  'Other',
]

const sections = [
  {
    eyebrow: 'Meta Ads Packages',
    title: 'Choose Your Royal Meta Plan',
    enquiryForm: true,
    plans: [
      { name: 'Silver Meta Package', badge: 'M1', details: ['4,50,000 Rs - Monthly Meta Spending', '15,000 Rs - Daily Meta Spending', 'Need 2 API from your side'], cta: 'Start M1' },
      { name: 'Gold Meta Package', badge: 'M2', details: ['9,00,000 Rs - Monthly Meta Spending', '30,000 Rs - Daily Meta Spending', 'Need 5 API from your side'], cta: 'Scale M2' },
      { name: 'Platinum Meta Package', badge: 'M3', details: ['15,00,000 Rs - Monthly Meta Spending', '50,000 Rs - Daily Meta Spending', 'Need 8 API from your side'], cta: 'Dominate M3' },
    ],
  },
  {
    eyebrow: 'Google Ads Packages',
    title: 'Scale Your Search & YouTube Profit',
    plans: [
      { name: 'Silver Google Ads', badge: 'G1', details: ['9,00,000 Rs - Monthly Meta Spending', '30,000 Rs - Daily Meta Spending', '1 Landing Page'], cta: 'Launch G1' },
      { name: 'Gold Google Ads', badge: 'G2', details: ['15,00,000 Rs - Monthly Meta Spending', '50,000 Rs - Daily Meta Spending', '2 Landing Pages'], cta: 'Scale G2' },
      { name: 'Platinum Google Ads', badge: 'G3', details: ['30,00,000 Rs - Monthly Meta Spending', '1,00,000 Rs - Daily Meta Spending', '3 Landing Pages'], cta: 'Dominate G3' },
    ],
  },
  {
    eyebrow: 'API Package',
    title: 'Flexible API Replacement Plans',
    plans: [
      { name: 'API Starter', badge: 'A1', details: ['5 Replacements', '10 Days', 'Perfect for quick scaling tests'], cta: 'Start A1' },
      { name: 'API Growth', badge: 'A2', details: ['7 Replacements', '15 Days', 'Ideal for growing brands'], cta: 'Scale A2' },
      { name: 'API Dominator', badge: 'A3', details: ['10 Replacements', '20 Days', 'Maximum coverage & stability'], cta: 'Dominate A3' },
    ],
  },
  {
    eyebrow: 'SMS Software',
    title: 'One Click, 25,000 SMS',
    plans: [
      { name: 'SMS Software Power Pack', badge: 'S1', details: ['1 Click - 25,000 SMS', 'Lifetime Portal', 'Delivery in 4 Days', 'Total amount payable = Portal + SMS Charges'], cta: 'Activate S1' },
    ],
  },
  {
    eyebrow: 'AI Video Packages',
    title: 'Celebrity Powered Viral Content',
    plans: [
      { name: 'Starter AI', badge: 'A1', price: '5,000 Rs', details: ['1 Celebrity AI Video', 'Custom Sales Scripting', 'High-Conversion Visual Hook', 'HD Quality Delivery'], cta: 'Start A1' },
      { name: 'Growth AI', badge: 'A2', price: '12,000 Rs', details: ['3 Celebrity AI Videos', 'Strategic Branding Hook', 'Viral Storyboard Design', 'Professional Background Score'], cta: 'Scale A2' },
      { name: 'Empire AI', badge: 'A3', price: '15,000 Rs', details: ['5 Celebrity AI Videos', 'Elite VFX & Transitions', 'Multiple A/B Test Hooks', 'Priority Campaign Support'], cta: 'Dominate A3' },
    ],
  },
  {
    eyebrow: 'Poster Design',
    title: 'High-Impact Sports & Casino Visuals',
    plans: [
      { name: 'Cricket Special', badge: 'P1', details: ['Cricket Schedule Graphics', 'Match of the Day Posters', 'Cricket Series Highlights', 'Standard Social Media Sizes'], cta: 'Start P1' },
      { name: 'Multi-Sport Pro', badge: 'P2', details: ['Cricket, Football, Tennis Schedules', 'Match of the Day (All Sports)', 'Dynamic Series Launch Videos', 'Premium Brand Integration'], cta: 'Scale P2' },
      { name: 'Best Seller - All Access', badge: 'P3', details: ['Sports (Cricket, FB, TN) + Casino', 'Unlimited Schedule & Match Posters', 'Casino Game Promo Videos', 'Full Visual Asset Management'], cta: 'Dominate P3' },
    ],
  },
  {
    eyebrow: 'Expert Services',
    title: 'Consultancy & Telecaller Solutions',
    plans: [
      { name: 'Expert Consultancy', badge: 'C1', details: ['Investment vs Deposit Analysis (ROI)', 'Roadmap to 1 Crore Daily Deposit', 'Banking & Payment Issue Solutions', 'Pinned ID Growth Strategies', "Birbal Bhai's 10 Years Experience", 'Ad Performance Strategy (Which ads work?)', 'Complete Brand Building Secrets'], cta: 'Start C1' },
      { name: 'Professional Telecaller', badge: 'T1', details: ['Dedicated Support Staff Available', 'Professional Caller Training Programs', 'Caller ID Generation (Guaranteed by Birbal)', "Market's Cheapest Salary Structure"], cta: 'Launch T1' },
    ],
  },
]

function EnquiryModal({ plan, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const niche = form.niche.value
    const budget = form.budget.value.trim()
    const message = form.message.value.trim()

    const text =
      `New enquiry for ${plan.badge} Package\n\n` +
      `Name: ${name}\n` +
      `WhatsApp: +91 ${phone}\n` +
      `Niche: ${niche}\n` +
      `Monthly Ad Budget: Rs ${budget}\n` +
      `Message: ${message}`

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank')
    onClose()
  }

  return (
    <div className="enquiry-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="enquiry-modal">
        <button type="button" className="enquiry-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="enquiry-title">Get {plan.badge} Package</h2>
        <p className="enquiry-subtitle">Fill this quick form to secure your spot.</p>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-grid">
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              WhatsApp Number
              <span className="enquiry-phone-field">
                <span className="enquiry-phone-code">IN +91</span>
                <input type="tel" name="phone" placeholder="9876543210" pattern="[0-9]{10}" required />
              </span>
            </label>
            <label>
              Niche
              <select name="niche" defaultValue="" required>
                <option value="" disabled>Select niche</option>
                {NICHE_OPTIONS.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </label>
            <label>
              Monthly Ad Budget (Rs)
              <input type="number" name="budget" placeholder="450000" required />
            </label>
          </div>
          <label className="enquiry-message-label">
            Message
            <textarea name="message" defaultValue={`I'm interested in the ${plan.badge} Package.`} rows={4} />
          </label>

          <button type="submit" className="enquiry-submit">Confirm & Send to WhatsApp</button>
          <button type="button" className="enquiry-back" onClick={onClose}>← Back to Plans</button>
        </form>
      </div>
    </div>
  )
}

export default function Packages() {
  const rootRef = useRef(null)
  const [activePlan, setActivePlan] = useState(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const sectionEls = root.querySelectorAll('.package-page-section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="packages-page" ref={rootRef}>
      <style>{`
        .package-page-section.reveal {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .package-page-section.reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .package-page-section .package-page-card {
          opacity: 0;
        }
        .package-page-section.is-visible .package-page-card {
          animation: package-card-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .package-page-section.is-visible .package-page-card:nth-child(1) { animation-delay: 0.08s; }
        .package-page-section.is-visible .package-page-card:nth-child(2) { animation-delay: 0.2s; }
        .package-page-section.is-visible .package-page-card:nth-child(3) { animation-delay: 0.32s; }
        @keyframes package-card-in {
          from { opacity: 0; transform: translateY(24px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .plan-price {
          margin: 4px 0 0;
          color: #f7f8ff;
          font-size: 30px;
          font-weight: 800;
        }
        .package-page-grid.two-plan {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .package-page-section:first-child,
        .package-page-section:first-of-type {
          border-top: none !important;
        }
        @media (max-width: 900px) {
          .package-page-grid.two-plan { grid-template-columns: 1fr; }
        }

        /* ---------- Enquiry modal ---------- */
        .enquiry-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 4, 12, 0.78);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 20px;
          overflow-y: auto;
          z-index: 200;
          animation: enquiry-fade-in 0.25s ease-out both;
        }
        @keyframes enquiry-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .enquiry-modal {
          position: relative;
          width: 100%;
          max-width: 780px;
          background: linear-gradient(180deg, #0c1230 0%, #060814 100%);
          border: 1px solid rgba(242, 181, 68, 0.35);
          border-radius: 28px;
          padding: 48px 56px 40px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(242, 181, 68, 0.08);
          animation: enquiry-pop-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes enquiry-pop-in {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .enquiry-close {
          position: absolute;
          top: 20px;
          right: 24px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(242, 181, 68, 0.55);
          background: transparent;
          color: var(--gold, #f2b544);
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .enquiry-close:hover {
          background: rgba(242, 181, 68, 0.12);
          transform: rotate(90deg);
        }
        .enquiry-title {
          margin: 0 0 8px;
          text-align: center;
          color: #f7f8ff;
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
        }
        .enquiry-subtitle {
          margin: 0 0 30px;
          text-align: center;
          color: var(--text-muted, #a9adc1);
          font-size: 16px;
        }
        .enquiry-form {
          border: 1px solid rgba(242, 181, 68, 0.5);
          border-radius: 20px;
          padding: 28px;
        }
        .enquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .enquiry-form label {
          display: flex;
          flex-direction: column;
          gap: 9px;
          color: #e8d38e;
          font-size: 14px;
          font-weight: 700;
        }
        .enquiry-form input,
        .enquiry-form select,
        .enquiry-form textarea {
          width: 100%;
          border: 1px solid #3b4158;
          border-radius: 14px;
          padding: 15px;
          outline: none;
          background: #070914;
          color: #fff;
          font: inherit;
          resize: vertical;
        }
        .enquiry-form input:focus,
        .enquiry-form select:focus,
        .enquiry-form textarea:focus {
          border-color: var(--gold, #f2b544);
        }
        .enquiry-form input::placeholder,
        .enquiry-form textarea::placeholder {
          color: #636a82;
        }
        .enquiry-phone-field {
          display: flex;
          align-items: center;
          overflow: hidden;
          border: 1px solid #3b4158;
          border-radius: 14px;
          background: #070914;
        }
        .enquiry-phone-code {
          padding: 15px;
          border-right: 1px solid #3b4158;
          color: #d8dbea;
          font-size: 12px;
          white-space: nowrap;
        }
        .enquiry-phone-field input {
          border: 0;
          border-radius: 0;
        }
        .enquiry-message-label {
          margin-bottom: 20px;
        }
        .enquiry-submit {
          width: 100%;
          border: 0;
          border-radius: 999px;
          padding: 17px;
          background: linear-gradient(180deg, #f8df9d 0%, #efb844 45%, #d8921c 100%);
          color: #1a1300;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(242, 181, 68, 0.25);
          transition: transform 0.2s ease;
        }
        .enquiry-submit:hover {
          transform: translateY(-2px);
        }
        .enquiry-back {
          display: block;
          margin: 16px auto 0;
          background: none;
          border: none;
          color: #cfd3e6;
          font-size: 14px;
          cursor: pointer;
        }
        .enquiry-back:hover {
          color: #f5d890;
        }
        @media (max-width: 650px) {
          .enquiry-modal { padding: 36px 22px 30px; }
          .enquiry-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {sections.map((section) => {
        const gridClass =
          section.plans.length === 1
            ? 'single-plan'
            : section.plans.length === 2
            ? 'two-plan'
            : ''

        return (
          <section className="package-page-section reveal" key={section.eyebrow}>
            <div className="container">
              <div className="eyebrow">{section.eyebrow}</div>
              <h2>{section.title}</h2>
              <div className={`package-page-grid ${gridClass}`}>
                {section.plans.map((plan) => (
                  <article className="package-page-card" key={plan.badge}>
                    <div className="package-page-card-heading">
                      <h3>{plan.name}</h3>
                      <span>{plan.badge}</span>
                    </div>
                    {plan.price && <p className="plan-price">{plan.price}</p>}
                    <ul>
                      {plan.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {section.enquiryForm ? (
                      <button
                        type="button"
                        className="plan-action btn-pill primary"
                        style={{ textAlign: 'center', display: 'block', width: '100%' }}
                        onClick={() => setActivePlan(plan)}
                      >
                        {plan.cta}
                      </button>
                    ) : (
                      <a className="plan-action btn-pill primary" href="/#contact" style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}>
                        {plan.cta}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {activePlan && <EnquiryModal plan={activePlan} onClose={() => setActivePlan(null)} />}
    </main>
  )
}