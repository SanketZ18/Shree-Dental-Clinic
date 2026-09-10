import { useState } from 'react'
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  Clock3,
  HeartHandshake,
  Phone,
  Scan,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
  HelpCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BentoGrid from '../components/ui/BentoGrid'
import BentoCard from '../components/ui/BentoCard'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import HeroCarousel from '../components/HeroCarousel'
import {
  clinic,
  specialists,
  clinicalHighlights,
  patientJourney,
  faqs,
  symptomGuide
} from '../data/clinic'

const treatments = [
  ['Teeth Cleaning & Scaling', 'Ultrasonic plaque removal & enamel polish', '🦷'],
  ['Painless Root Canal (RCT)', 'Save your natural tooth with rotary micro-precision', '✦'],
  ['Dental Implants & Crowns', 'Permanent, natural-looking tooth replacement', '◉'],
  ['Clear Aligners & Braces', 'Discreet teeth straightening for all ages', '⌁'],
  ['Pediatric Dental Care', 'Gentle, fear-free care for children', '♡'],
  ['Teeth Whitening & Makeovers', 'Enamel-safe brightening & porcelain veneers', '☼'],
]

const reviews = [
  ['Nishant Chavan', 'I needed a re-RCT and the treatment was smooth and professional. The team was helpful and explained the options clearly.'],
  ['Prathmesh Lad', 'I was advised correctly for my dental sensitivity and received the treatment I actually needed. Very knowledgeable and patient-focused care.'],
  ['Binay Bhanu Das', 'Very well managed clinic with experienced dentists and polite staff. Prompt service and special attention are given to patient comfort.'],
  ['Manoj Kumar Bhardwaj', 'I had an excellent experience at this dental clinic during my root canal process and jaw problem. The doctors explained everything clearly and made me feel comfortable throughout the treatment.'],
  ['Suresh Shinde', "Along with my wife, I've been having dental treatment here since 2014. Both doctors are excellent and we are fully satisfied with the treatment."],
  ['Bhupendra Tiwari', 'Wonderful experience. The staff is professional, polite and supportive. The clinic is clean, well-maintained and equipped with modern facilities.'],
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={26} />
      case 'Sparkles': return <Sparkles size={26} />
      case 'Scan': return <Scan size={26} />
      case 'HeartHandshake': return <HeartHandshake size={26} />
      case 'Clock3': return <Clock3 size={26} />
      case 'Award': return <Award size={26} />
      default: return <Sparkles size={26} />
    }
  }

  return (
    <div className="home-bento">
      {/* 1. Hero Section */}
      <section className="bento-hero-section">
        <div className="shell">
          <BentoGrid className="hero-bento">
            <BentoCard colSpan={2} rowSpan={2} className="hero-copy">
              <Badge variant="mint">Trusted Dental Clinic in Kamothe, Sector 35</Badge>
              <h1>
                Beautiful Smiles With<br />
                <em>Precision & Care.</em>
              </h1>
              <p>
                Modern dentistry, experienced care and a comfortable experience for every patient at Shri Dental Care.
              </p>
              <div className="bento-actions">
                <Button href="/contact">Book Consultation</Button>
                <Button href={`tel:${clinic.phone}`} variant="emergency">
                  Emergency: +91 9892694771
                </Button>
              </div>
            </BentoCard>
            <BentoCard colSpan={2} rowSpan={2} className="carousel-card">
              <HeroCarousel />
            </BentoCard>
            <BentoCard className="metric-card">
              <Star fill="currentColor" />
              <strong>{clinic.rating}</strong>
              <small>{clinic.reviewCount} Verified Google Reviews</small>
            </BentoCard>
            <BentoCard className="metric-card mint-card">
              <Zap />
              <strong>{clinic.experience}</strong>
              <small>Years of Clinical Trust</small>
            </BentoCard>
            <BentoCard className="metric-card blue-card">
              <span className="metric-emoji">😊</span>
              <strong>{clinic.patients}</strong>
              <small>Happy Smiles Restored</small>
            </BentoCard>
            <BentoCard className="metric-card doctors-card">
              <Users />
              <strong>{specialists.length}</strong>
              <small>Specialist Dental Surgeons</small>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* 2. Clinical Highlights / Why Patients Choose Us */}
      <section className="bento-section highlights-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge variant="mint">Why Families Trust Us</Badge>
              <h2>
                Care built on <em>hygiene, skill & comfort.</em>
              </h2>
            </div>
            <p>
              We combine hospital-level hygiene protocols with gentle, pain-managed procedures so you feel confident and relaxed.
            </p>
          </div>
          <div className="highlights-grid">
            {clinicalHighlights.map((item, idx) => (
              <div key={idx} className="highlight-item-card">
                <div className="highlight-icon-box">{getHighlightIcon(item.icon)}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Overview Bento */}
      <section className="bento-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge>Our Treatments</Badge>
              <h2>Complete care for <em>every smile.</em></h2>
            </div>
            <p>
              From routine dental hygiene and painless root canals to digital smile designing and implants under one roof.
            </p>
          </div>
          <BentoGrid className="services-bento">
            <BentoCard colSpan={1} rowSpan={2} className="services-lead">
              <span className="eyebrow">Explore our care</span>
              <h3>
                Everything your smile<br />
                <em>needs to thrive.</em>
              </h3>
              <p>Personalised treatment plans, modern rotary instruments, and honest advice.</p>
              <Link className="bento-link" to="/services">
                Explore all 11 services <ArrowRight size={16} />
              </Link>
            </BentoCard>
            {treatments.map(([title, sub, icon], i) => (
              <BentoCard key={title} className={`treatment-card treatment-${i}`}>
                <span className="treatment-icon">{icon}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{sub}</p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 4. 4-Step Patient Journey */}
      <section className="bento-section journey-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge variant="blue">Your Visit Experience</Badge>
              <h2>How  we  care  for <em> your  teeth.</em></h2>
            </div>
            <p>
              A transparent, smooth 4-step consultation process ensuring you understand every aspect of your oral health.
            </p>
          </div>
          <div className="journey-grid">
            {patientJourney.map((step) => (
              <div key={step.step} className="journey-step-card">
                <div className="journey-num">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Specialist Dental Team */}
      <section className="bento-section staff-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge variant="blue">Specialist Doctors</Badge>
              <h2>Experienced hands,<br /><em>kind hearts.</em></h2>
            </div>
            <Link className="bento-link" to="/team">
              Meet the full team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="staff-strip">
            {specialists.map(([name, role, image, bio]) => (
              <Link to="/team" className="staff-person" key={image}>
                <img src={image} alt={name} />
                <span>{name}</span>
                <small>{role}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials */}
      <section className="bento-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge variant="blue">Verified Patient Reviews</Badge>
              <h2>Patient Experience. <em> Trusted by patients, valued for care.</em></h2>
            </div>
            <p>Real experiences from patients who trusted Shri Dental Care with their smiles.</p>
          </div>
          <BentoGrid className="reviews-bento">
            {reviews.map(([name, quote]) => (
              <BentoCard key={name} className="review-card">
                <div className="review-top">
                  <div>
                    <strong>{name}</strong>
                    <span>Verified Patient</span>
                  </div>
                  <div className="stars">★★★★★</div>
                </div>
                <p>“{quote}”</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* 8. Dental FAQs Section */}
      <section className="bento-section faqs-section">
        <div className="shell">
          <div className="bento-heading">
            <div>
              <Badge variant="mint">Common Questions</Badge>
              <h2>Frequently asked <em>dental questions.</em></h2>
            </div>
            <p>Quick answers to common questions regarding treatments, safety, and appointment bookings.</p>
          </div>
          <div className="faqs-container">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <span className="faq-q-icon"><HelpCircle size={18} /></span>
                    <h3>{faq.q}</h3>
                    <ChevronDown className={`faq-chevron ${isOpen ? 'rotate' : ''}`} size={18} />
                  </div>
                  {isOpen && <div className="faq-answer"><p>{faq.a}</p></div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. Bottom Banner */}
      <div className="bento-bottom-cta">
        <div className="shell">
          <span>
            <ShieldCheck size={20} /> Experiencing toothache, bleeding gums, or planning a smile makeover?
          </span>
          <Link to="/contact">
            Schedule a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
