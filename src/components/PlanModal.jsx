import { useEffect } from 'react'
import { plansData } from '../data/plansData.js'

export default function PlanModal({ activeKey, onClose }) {
  useEffect(() => {
    document.body.style.overflow = activeKey ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeKey])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!activeKey) return null

  const modal = plansData[activeKey]
  if (!modal) return null

  return (
    <div className="plan-modal-backdrop" onClick={onClose}>
      <div className="plan-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="plan-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="plan-modal-eyebrow">{modal.eyebrow}</div>
        <h2 className="plan-modal-title">{modal.title}</h2>

        {modal.sections.map((section, si) => (
          <div className="plan-modal-section" key={section.heading || si}>
            {section.heading && <h3 className="plan-section-heading">{section.heading}</h3>}
            <div className={`plan-grid plan-grid-cols-${section.cols || 3}`}>
              {section.plans.map((plan) => (
                <div className="plan-card" key={plan.badge}>
                  <div className="plan-card-head">
                    <h4>{plan.name}</h4>
                    <span className="plan-badge">{plan.badge}</span>
                  </div>

                  {plan.price && <div className="plan-price">{plan.price}</div>}

                  <ul className="plan-list">
                    {plan.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <button type="button" className="btn-pill plan-cta">{plan.cta}</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}