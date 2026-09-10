import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock3,
  Cpu,
  HeartHandshake,
  Info,
  ShieldCheck,
  Sparkles,
  Syringe,
  X
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import CTA from '../components/CTA'
import Badge from '../components/ui/Badge'
import { clinic, serviceCategories } from '../data/clinic'
import serviceImage1 from '../../images/Services/1.jpeg'
import serviceImage2 from '../../images/Services/2.jpeg'
import serviceImage3 from '../../images/Services/3.jpeg'
import serviceImage4 from '../../images/Services/4.jpeg'
import serviceImage5 from '../../images/Services/5.jpeg'
import serviceImage6 from '../../images/Services/6.jpeg'
import serviceImage7 from '../../images/Services/7.jpeg'
import serviceImage8 from '../../images/Services/8.jpeg'
import serviceImage9 from '../../images/Services/9.jpeg'
import serviceImage10 from '../../images/Services/10.jpeg'
import serviceImage11 from '../../images/Services/11.jpeg'
import serviceImage12 from '../../images/Services/12.jpeg'

const serviceImages = [
  serviceImage1,
  serviceImage2,
  serviceImage3,
  serviceImage4,
  serviceImage5,
  serviceImage6,
  serviceImage7,
  serviceImage8,
  serviceImage9,
  serviceImage10,
  serviceImage11,
  serviceImage12
]

const serviceInformation = [
  {
    text: 'Routine examinations, professional cleaning, fluoride and sealants help identify problems early and reduce the risk of cavities and gum disease.',
    source: 'CDC: Oral Health',
    href: 'https://www.cdc.gov/oral-health/'
  },
  {
    text: 'Fillings repair tooth decay, while crowns, inlays, onlays and bridges rebuild damaged teeth or replace missing tooth structure for improved function.',
    source: 'ADA: Dental Filling Options',
    href: 'https://www.mouthhealthy.org/all-topics-a-z/dental-filling-options'
  },
  {
    text: 'Whitening, veneers, bonding and contouring can improve the appearance of teeth. A dentist should first check that the teeth and gums are healthy.',
    source: 'ADA: Improving Your Smile',
    href: 'https://www.mouthhealthy.org/ways-to-improve-smile'
  },
  {
    text: 'Root canal care treats infection inside a tooth by removing the infected pulp, cleaning the canals and sealing the tooth to help prevent reinfection.',
    source: 'NHS: Root Canal Treatment',
    href: 'https://www.nhs.uk/tests-and-treatments/root-canal-treatment/'
  },
  {
    text: 'Gum treatment focuses on removing plaque and tartar, controlling inflammation and protecting the tissues and bone that support the teeth.',
    source: 'CDC: Periodontal Disease',
    href: 'https://www.cdc.gov/oral-health/about/gum-periodontal-disease.html'
  },
  {
    text: 'Implants are placed in the jaw to support a crown, bridge or denture, providing a stable option for replacing one or more missing teeth.',
    source: 'NHS: Dental Treatments',
    href: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/'
  },
  {
    text: 'Orthodontic treatment gradually moves teeth to improve alignment, bite and appearance using fixed braces or removable clear aligners.',
    source: 'NHS: Dental Treatments',
    href: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/'
  },
  {
    text: 'Oral surgery includes planned procedures such as extractions and bone-related treatments when a tooth cannot be safely managed with routine care.',
    source: 'ADA: Dental Treatment Terms',
    href: 'https://www.mouthhealthy.org/dental-care/dental-treatment-terms'
  },
  {
    text: 'Children benefit from early dental visits, fluoride and sealants, which can help prevent cavities and build healthy habits from the first teeth onward.',
    source: 'CDC: Children’s Oral Health',
    href: 'https://www.cdc.gov/oral-health/prevention/oral-health-tips-for-children.html'
  },
  {
    text: 'Prompt assessment can help manage dental pain, infection, broken teeth and dental trauma while protecting the tooth and surrounding tissues.',
    source: 'NHS: Dental Treatments',
    href: 'https://www.nhs.uk/live-well/healthy-teeth-and-gums/dental-treatments/'
  },
  {
    text: 'Specialized care can address jaw-joint symptoms, tooth grinding, sports protection and unusual mouth sores through examination and an individual treatment plan.',
    source: 'NHS: Teeth Grinding',
    href: 'https://www.nhs.uk/symptoms/teeth-grinding/'
  },
  {
    text: 'Root canal retreatment (Re-RCT) is performed when a previously treated tooth becomes re-infected or fails to heal. The canals are re-cleaned, reshaped, and re-sealed to save the natural tooth and eliminate pain.',
    source: 'AAE: Root Canal Retreatment',
    href: 'https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/root-canal-retreatment/'
  }
]

// Badge color map
const badgePalette = {
  mint:   { bg: '#dcfce7', text: '#16a34a' },
  gold:   { bg: '#fef9c3', text: '#a16207' },
  blue:   { bg: '#dbeafe', text: '#1d4ed8' },
  teal:   { bg: '#ccfbf1', text: '#0f766e' },
  purple: { bg: '#ede9fe', text: '#7c3aed' },
  pink:   { bg: '#fce7f3', text: '#be185d' },
  red:    { bg: '#fee2e2', text: '#b91c1c' }
}

const categoryIcons = ['🦷', '🔧', '✨', '◈', '♡', '⚙', '◇', '⚡', '✦', '♡', '◉', '⌁']
const categoryBadges = ['COMPLETE CARE', 'RESTORE', 'SMILE DESIGN', 'PAINLESS', 'GENTLE CARE', 'PERMANENT SOLUTION', 'INVISIBLE OPTION', 'SAME DAY', 'CHILD-FRIENDLY', 'EMERGENCY CARE', 'SPECIALIST CARE', 'RE-TREATMENT']
const categoryColors = ['mint', 'gold', 'purple', 'teal', 'pink', 'blue', 'mint', 'red', 'pink', 'red', 'purple', 'teal']

function ServiceCard({ service }) {
  const [optionsOpen, setOptionsOpen] = useState(false)
  const palette = badgePalette[service.badgeColor] || badgePalette.teal

  return (
    <article className="svc-card">
      <div className="svc-card-media">
        {service.image ? (
          <img src={service.image} alt={service.name} className="svc-card-img" />
        ) : (
          <div className="svc-card-no-img">{service.icon}</div>
        )}
        <span
          className="svc-badge"
          style={{ background: palette.bg, color: palette.text }}
        >
          {service.badge}
        </span>
      </div>

      <div className="svc-card-body">
        <div className="svc-card-header">
          <span className="svc-icon">{service.icon}</span>
          <h3 className="svc-title">{service.name}</h3>
        </div>

        <p className="svc-desc">{service.desc}</p>

        <ul className="svc-checks">
          {service.checks.map((item) => (
            <li key={item}>
              <span className="svc-check-icon"><Check size={13} /></span>
              {item}
            </li>
          ))}
        </ul>

        {service.about?.text && (
          <div className="svc-info-box">
            <p>{service.about.text}</p>
          </div>
        )}

        {service.options?.length > 0 && (
          <div className="svc-options">
            <button
              type="button"
              className="svc-options-toggle"
              onClick={() => setOptionsOpen(!optionsOpen)}
            >
              <span>Available Options ({service.options.length})</span>
              {optionsOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
            {optionsOpen && (
              <ul className="svc-options-list">
                {service.options.map((opt) => (
                  <li key={opt.tag}>
                    <span className="opt-tag">{opt.tag}</span>
                    <span className="opt-label">{opt.label}</span>
                    {opt.warranty && (
                      <span className="opt-warranty">{opt.warranty}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="svc-card-footer">
          <Link to="/contact" className="svc-book-btn">
            Book Consultation <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  // The 11 category entries are the complete service list shown on this page.
  const filteredCategories = serviceCategories.map(([category, items], categoryIndex) => [
    category,
    items,
    categoryIndex
  ])

  return (
    <div className="editorial-page services-page">

      {/* 1. Hero */}
      <section className="editorial-hero services-hero">
        <div className="shell editorial-hero-grid">
          <div>
            <Badge variant="mint">Advanced & Gentle Dental Treatments</Badge>
            <h1>
              Everything your smile<br />
              <em>needs to stay healthy & bright.</em>
            </h1>
            <p>
              {clinic.serviceCount} comprehensive dental services delivered with advanced rotary instruments, digital imaging, and high-precision restorative materials in Kamothe.
            </p>
            <div className="service-hero-meta">
              <span><ShieldCheck size={18} /> Pain-Managed Procedures</span>
              <span><Check size={18} /> Multi-Specialist Dental Team</span>
              <span><Sparkles size={18} /> 100% Autoclaved Sterility</span>
            </div>
          </div>
          <div className="services-hero-image">
            <img
              src="/images/digital-dental-treatment.jpg"
              alt="Digital dental treatment at Shri Dental Care Kamothe"
            />
            <div>
              <strong>From preventive hygiene to full-mouth restoration.</strong>
              <span>One trusted dental clinic in Sector 35, Kamothe.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our 11 Core Services */}
      <section className="section svc-featured-section">
        <div className="shell">
          <div className="svc-featured-heading">
            <div>
              <Badge variant="blue">Our 12 Core Services</Badge>
              <h2>
                Specialised care,<br />
                <em>delivered with precision.</em>
              </h2>
              <p>
                Each treatment at Shri Dental Care is performed by specialist doctors using modern technology for the best outcomes.
              </p>
            </div>
            <div className="svc-heading-meta">
              <div><strong>10+</strong><span>Core Services</span></div>
              <div><strong>4.9★</strong><span>Patient Rating</span></div>
              <div><strong>{clinic.experience}</strong><span>Years Trusted</span></div>
            </div>
          </div>

          <div className="svc-card-grid">
            {filteredCategories.map(([category, items, categoryIndex]) => (
              <ServiceCard
                key={category}
                service={{
                  icon: categoryIcons[categoryIndex],
                  badge: categoryBadges[categoryIndex],
                  badgeColor: categoryColors[categoryIndex],
                  name: category,
                  desc: `Complete ${category.toLowerCase()} planned around your comfort, oral health, and long-term results.`,
                  image: serviceImages[categoryIndex],
                  about: serviceInformation[categoryIndex],
                  detailDesc: `Our ${category.toLowerCase()} is planned after a careful consultation and explained clearly before treatment begins. We focus on comfortable care, modern techniques, and results that support your long-term oral health.`,
                  checks: items,
                  options: []
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promise Banner */}
      <section className="section team-promise-section">
        <div className="shell team-promise-card">
          <div className="promise-icon"><HeartHandshake size={32} /></div>
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

      <CTA title="Have questions about a specific dental procedure?" />
    </div>
  )
}
