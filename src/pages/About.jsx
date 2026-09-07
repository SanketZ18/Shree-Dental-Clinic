import {
  ArrowRight,
  Award,
  Check,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  Search,
  ClipboardList,
  Star,
  Stethoscope,
  Smile
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import Badge from '../components/ui/Badge'
import AutoCarousel from '../components/AutoCarousel'
import { clinic, specialists } from '../data/clinic'

const aboutImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/About/${index + 1}.jpg`,
  alt: `Shri Dental Care clinic about gallery view ${index + 1}`
}))

const patientJourneySteps = [
  {
    step: '1',
    title: 'Digital Evaluation',
    desc: 'Intraoral scan, digital X-rays or 3D CBCT imaging for a complete, precise diagnosis of your dental health.',
    icon: Search
  },
  {
    step: '2',
    title: 'Customized Care Plan',
    desc: 'A transparent treatment plan — with clear session counts, realistic timeline, and honest cost breakdown.',
    icon: ClipboardList
  },
  {
    step: '3',
    title: 'Painless Procedure',
    desc: 'Advanced laser precision and targeted local anesthesia ensure zero discomfort throughout your treatment.',
    icon: Sparkles
  },
  {
    step: '4',
    title: 'Lasting Results',
    desc: 'Post-care guidance, follow-up reviews, and warranty certificates to protect your investment long-term.',
    icon: Star
  }
]

export default function About() {
  const leadDoctor = specialists[0]

  return (
    <div className="editorial-page about-page">
      {/* 1. Hero */}
      <section className="editorial-hero">
        <div className="shell editorial-hero-grid">
          <div>
            <Badge variant="mint">About Shri Dental Care</Badge>
            <h1>
              Modern dentistry,<br />
              <em>made personal & painless.</em>
            </h1>
            <p>
              Smile is God's gift to us. With it we can express our happiness even without words. Shining white teeth contribute a lot to personality and increase our face value!
            </p>
            <div className="hero-actions">
              <Link className="ui-button ui-button-primary" to="/contact">
                Plan your visit <ArrowRight size={16} />
              </Link>
              <a className="editorial-call" href={`tel:${clinic.phone}`}>
                Call +91 9892694771
              </a>
            </div>
          </div>
          <div className="about-carousel">
            <AutoCarousel
              images={aboutImages}
              caption="Inside Shri Dental Care"
              subcaption="A calm, sterile & welcoming space in Sector 35, Kamothe"
            />
          </div>
        </div>
      </section>

      {/* 2. Stat Band */}
      <section className="stat-band">
        <div className="shell stat-band-grid">
          <div>
            <strong>15<span>+</span></strong>
            <small>Years of Clinical Trust</small>
          </div>
          <div>
            <strong>5,000<span>+</span></strong>
            <small>Happy Smiles Cared For</small>
          </div>
          <div>
            <strong>10<span>+</span></strong>
            <small>Specialised Dental Services</small>
          </div>
          <div>
            <strong>4.9<span>★</span></strong>
            <small>Rated by 133+ Patients</small>
          </div>
        </div>
      </section>

      {/* 3. About Us & Lead Doctor Section */}
      <section className="section about-story">
        <div className="shell about-story-grid">
          <div>
            <Badge>About Shri Dental Care</Badge>
            <h2>
              Gentle care tailored<br />
              <em>to make you feel confident.</em>
            </h2>
            <p>
              Smile is God's gift to us. With it we can express our happiness even without words. Shining white teeth contribute a lot to personality and increase our face value!
            </p>
            <p>
              We, at Shri Dental Care, offer a wide range of everyday dental treatments for our esteemed patients which are designed to help them look & feel healthy and more confident.
            </p>
            <p>
              We also understand that dental treatments can be stressful… just the thought of it. Hence, we offer painless and gentle dentistry to make sure our patients enjoy their visit rather than dreading it.
            </p>
            <p>
              With a perfect blend of personalized care, expertise and modern technology in a comfortable, stress-free atmosphere, we assure all our patients a lifetime of beautiful smiles & optimum oral health…..
            </p>
            <ul className="editorial-checks">
              <li>
                <Check /> <strong>Zero-Overtreatment Promise:</strong> Honest diagnostics and clear explanations.
              </li>
              <li>
                <Check /> <strong>Painless & Gentle Dentistry:</strong> Targeted anesthesia & laser precision.
              </li>
              <li>
                <Check /> <strong>Child-Friendly Environment:</strong> Fun, fear-free visits for little ones.
              </li>
              <li>
                <Check /> <strong>Open All 7 Days:</strong> Convenient 10:00 AM to 10:00 PM timings.
              </li>
            </ul>
          </div>

          {/* Lead Doctor Card */}
          <div className="doctor-feature-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '24px', boxShadow: '0 15px 35px rgba(15,23,42,0.06)' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '420px', marginBottom: '20px', background: '#eaf3f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={leadDoctor[2]}
                alt={leadDoctor[0]}
                style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <Badge variant="mint">Lead Dentist & Dental Surgeon</Badge>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '22px', margin: '12px 0 6px', color: '#0f172a' }}>
              {leadDoctor[0]}
            </h3>
            <p style={{ fontSize: '12px', color: '#0284c7', fontWeight: '700', marginBottom: '12px' }}>
              BDS · Dental Surgeon (Since 2013)
            </p>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.55', margin: 0 }}>
              {leadDoctor[3]}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Patient Journey: How Your Treatment Works (Screenshot Aligned Replacing Infection Standards) */}
      <section className="pj-dark-section">
        <div className="shell">
          <div className="pj-header">
            <span className="pj-badge">Patient Journey</span>
            <h2>How Your Treatment Works</h2>
            <p>Transparent, step-by-step care from your first visit to your lasting smile.</p>
          </div>
          <div className="pj-grid">
            {patientJourneySteps.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.step} className="pj-card">
                  <div className="pj-num">{item.step}</div>
                  <div className="pj-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Mission & Core Values Section */}
      <section className="section about-care" style={{ background: '#f8fafc' }}>
        <div className="shell">
          <div className="section-heading">
            <div>
              <Badge variant="blue">Our Foundation</Badge>
              <h2>
                Our Mission &<br />
                <em>Core Values.</em>
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '40px' }}>
            <div style={{ background: '#0e7072', color: '#fff', padding: '35px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(14,112,114,0.15)' }}>
              <Badge variant="white">Our Mission</Badge>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', margin: '16px 0 12px', color: '#fff' }}>
                Building Lifelong Relationships
              </h3>
              <p style={{ fontSize: '15px', lineHeight: '1.65', color: '#d1fae5', margin: 0 }}>
                To build lasting relationships with our patients by providing top-quality dental care in a warm, welcoming and comfortable atmosphere at honest, affordable prices.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '35px', borderRadius: '24px', boxShadow: '0 15px 35px rgba(15,23,42,0.04)' }}>
              <Badge variant="mint">Our Core Values</Badge>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', margin: '16px 0 12px', color: '#0f172a' }}>
                Preserving What Exists
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.65', color: '#475569', margin: 0 }}>
                Our fundamental principle is that we address today's needs while nurturing tomorrow's well-being. At Shri Dental Care, we plan every treatment with your long-term oral health in mind. We firmly believe that preserving what exists is more valuable than substituting what is lost, and we follow ethical, transparent practices that protect your smile for years ahead.
              </p>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '35px' }}>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', margin: '0 0 14px', color: '#0f172a' }}>
              Trusted Care & Comprehensive Technology in Kamothe
            </h4>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', marginBottom: '14px' }}>
              Shri Dental Care has been a trusted name in Kamothe, Navi Mumbai for over 15 years, rated 4.9★ from 133+ patients. We follow strict hygiene and sterilization protocols at every step, so you can always feel safe and cared for in our hands.
            </p>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', margin: 0 }}>
              Our practice provides a complete range of dental procedures including root canal treatment (RCT), ceramic & CAD/CAM crowns and bridges, dental implants, braces & clear aligners, laser dentistry, ultrasonic scaling & polishing, and in-house digital X-ray, OPG & CBCT scanning — all delivered with gentle care and modern technology.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Values Quick Band */}
      <section className="about-values">
        <div className="shell value-cards">
          <article>
            <ShieldCheck size={28} />
            <h3>Patient Safety First</h3>
            <p>Strict sterilization and disposable barrier protocols for every patient.</p>
          </article>
          <article>
            <Users size={28} />
            <h3>Compassionate Doctors</h3>
            <p>Gentle, patient-focused consultations where we listen to your dental goals.</p>
          </article>
          <article>
            <Clock3 size={28} />
            <h3>Mon – Sun: 10 AM – 10 PM</h3>
            <p>Open all 7 days a week in Sector 35, Kamothe.</p>
          </article>
        </div>
      </section>

      {/* Promise Banner */}
      <section className="section team-promise-section">
        <div className="shell team-promise-card">
          <div className="promise-icon">
            <HeartHandshake size={32} />
          </div>
          <div>
            <Badge variant="white">Our Clinical Promise</Badge>
            <h2>We treat you like family, not just a patient file.</h2>
            <p>
              We believe in building lifelong relationships with families across Kamothe. You will always receive honest assessments, ethical recommendations, and transparent pricing.
            </p>
          </div>
          <Link to="/contact" className="ui-button ui-button-secondary">
            Book an appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA title="Ready to experience gentle, trusted dentistry?" />
    </div>
  )
}
