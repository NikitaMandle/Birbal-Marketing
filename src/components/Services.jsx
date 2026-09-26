const services = [
  { title: 'Meta Ads', desc: 'Birbal ke high-performance Meta Ads API, landing pages aur WhatsApp par run hote hain. Low-cost leads, strong conversions aur fast brand growth guaranteed.' },
  { title: 'Google Ads', desc: 'Google Search aur Display Ads se high-intent buyers seedha aapke WhatsApp tak aate hain. Lower lead cost ke saath better results aur agency GST savings.' },
  { title: 'Poster & AI Video', desc: 'Daily unlimited posters, AI celebrity videos, banners aur marketing creatives. Content jo brand ko viral kare aur clients ko attract kare.' },
  { title: 'WATI - API', desc: 'Powerful WhatsApp API setup for ads aur customer support systems. Strong Business Manager, low setup cost aur zero banning tension.' },
  { title: 'SMS & RCS Blaster', desc: 'Birbal Software se 1 click mein 1 lakh SMS blast possible. Photos aur links ke saath messages send karo apne company name se.' },
  { title: 'Consultancy & Telecaller', desc: 'Birbal ke strategists aur trained callers leads ko clients banate hain. Smart strategy aur professional calling se high-value deals close hoti hain.' },
]

const industries = ['Sports', 'Casino', 'Dabba', 'Stock Market', 'Prop Firm', 'Matka']

export default function Services() {
  return (
    <section className="services-section container" id="services">
      <div className="eyebrow">Our Services Worldwide</div>
      <h2 className="section-title">Famous For High-Impact Marketing</h2>
      <p className="services-intro">
        Birbal Marketing ka mission simple hai - aapka brand famous banana, powerful leads lana aur business ko profit machine banana.
      </p>

      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <button type="button" className="service-button">View Plans</button>
          </div>
        ))}
      </div>

      <div className="industries-block">
        <h2 className="industries-title">We Are Generating Crores of Deposit In</h2>
        <p className="industries-intro">
          Birbal Marketing un industries mein kaam karta hai jahan competition high hota hai aur profit aur bhi bada. Hum sirf marketing nahi karte - brands ko market leader banate hain.
        </p>
        <div className="industry-list">
          {industries.map((industry) => (
            <span className="industry-chip" key={industry}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
