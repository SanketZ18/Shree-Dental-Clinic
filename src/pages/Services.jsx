import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import Badge from '../components/ui/Badge'
import { clinic } from '../data/clinic'

// Direct image imports from images/Services/
import imgClearAligners from '../../images/Services/Clear Aligners.jpeg'
import imgOpgCbct from '../../images/Services/OPG-CBCT.jpeg'
import imgOralSurgery from '../../images/Services/Oral Surgery.jpeg'
import imgOrthodontics from '../../images/Services/Orthodontics.jpeg'
import imgPediatric from '../../images/Services/Pediatric Dentistry.jpeg'
import imgToothReplacement from '../../images/Services/Tooth Replacement.jpeg'
import imgCosmetic from '../../images/Services/Cosmetic Dentistry.jpeg'
import imgDentalFilling from '../../images/Services/Dental Filling.jpeg'
import imgEndodontic from '../../images/Services/Endodontic Treatment.jpeg'
import imgPeriodontal from '../../images/Services/Periodontal.jpeg'
import imgPreventive from '../../images/Services/1.jpeg'
import imgRestorative from '../../images/Services/2.jpeg'
import imgEmergency from '../../images/Services/10.jpeg'
import imgSpecialized from '../../images/Services/11.jpeg'
import imgReRct from '../../images/Services/12.jpeg'

const featuredServicesList = [
  {
    name: 'Clear Aligners',
    image: imgClearAligners,
    icon: '✨',
    badge: 'INVISIBLE OPTION',
    badgeColor: 'mint',
    desc: 'Custom 3D-designed clear invisible aligners for discreet, comfortable, and efficient teeth straightening without metal wires.',
    about: {
      text: 'Clear aligners offer a transparent, removable alternative to traditional braces. Custom-crafted trays gradually shift teeth into position while allowing easy eating and oral hygiene.'
    },
    checks: [
      'Clear aligners (Invisalign & custom aligners)',
      '3D digital smile scan & treatment plan',
      'Removable, comfortable & virtually invisible'
    ]
  },
  {
    name: 'OPG-CBCT',
    image: imgOpgCbct,
    icon: '🔍',
    badge: 'DIGITAL DIAGNOSTICS',
    badgeColor: 'blue',
    desc: 'Advanced 2D Panoramic OPG and 3D CBCT volumetric digital imaging for high-precision diagnosis with ultra-low radiation.',
    about: {
      text: 'Digital panoramic OPG and 3D CBCT scans provide detailed views of teeth, jawbone density, root structures, and nerves, enabling safe and accurate treatment planning.'
    },
    checks: [
      'Full-mouth 2D OPG panoramic X-ray',
      '3D CBCT high-resolution scanning',
      'Instant low-radiation digital evaluation'
    ]
  },
  {
    name: 'Oral Surgery',
    image: imgOralSurgery,
    icon: '⚙',
    badge: 'PAIN-FREE SURGERY',
    badgeColor: 'red',
    desc: 'Specialized surgical extractions, painless wisdom tooth removal, bone grafting, and sinus lifts performed by experienced oral surgeons.',
    about: {
      text: 'Oral surgery includes planned procedures such as extractions and bone-related treatments when a tooth cannot be safely managed with routine care.'
    },
    checks: [
      'Simple & surgical tooth extraction',
      'Painless wisdom tooth removal',
      'Jawbone grafting & sinus lift procedures'
    ]
  },
  {
    name: 'Orthodontics',
    image: imgOrthodontics,
    icon: '◇',
    badge: 'SMILE ALIGNMENT',
    badgeColor: 'purple',
    desc: 'Comprehensive orthodontic correction with traditional metal braces, high-aesthetic ceramic braces, and lingual systems.',
    about: {
      text: 'Orthodontic treatment gradually moves teeth to improve alignment, bite and appearance using fixed braces or removable clear aligners.'
    },
    checks: [
      'Metal braces & ceramic braces',
      'Lingual braces & bite alignment',
      'Fixed & removable retention care'
    ]
  },
  {
    name: 'Pediatric Dentistry',
    image: imgPediatric,
    icon: '♡',
    badge: 'GENTLE CHILD CARE',
    badgeColor: 'pink',
    desc: 'Anxiety-free, child-friendly dental care focusing on preventive fluoride varnish, pit/fissure sealants, and pulpotomy.',
    about: {
      text: 'Children benefit from early dental visits, fluoride and sealants, which can help prevent cavities and build healthy habits from the first teeth onward.'
    },
    checks: [
      'Child-friendly anxiety-free visits',
      'Fluoride varnish & pit sealants',
      'Pulpotomy / Pulpectomy care'
    ]
  },
  {
    name: 'Tooth Replacement',
    image: imgToothReplacement,
    icon: '🔩',
    badge: 'PERMANENT SOLUTION',
    badgeColor: 'blue',
    desc: 'Long-lasting titanium dental implants, implant-supported ceramic crowns/bridges, and custom removable or fixed dentures.',
    about: {
      text: 'Implants are placed in the jaw to support a crown, bridge or denture, providing a stable option for replacing one or more missing teeth.'
    },
    checks: [
      'Titanium precision dental implants',
      'Implant-supported crowns & bridges',
      'Complete & partial precision dentures'
    ]
  },
  {
    name: 'Cosmetic Dentistry',
    image: imgCosmetic,
    icon: '☼',
    badge: 'SMILE MAKEOVER',
    badgeColor: 'purple',
    desc: 'Custom smile design combining laser teeth whitening, ultra-thin porcelain veneers, composite bonding, and tooth contouring.',
    about: {
      text: 'Whitening, veneers, bonding and contouring can improve the appearance of teeth. A dentist should first check that the teeth and gums are healthy.'
    },
    checks: [
      'Teeth whitening (bleaching)',
      'Porcelain veneers & dental bonding',
      'Tooth contouring & smile design'
    ]
  },
  {
    name: 'Dental Filling',
    image: imgDentalFilling,
    icon: '🦷',
    badge: 'RESTORATIVE CARE',
    badgeColor: 'gold',
    desc: 'Tooth-colored composite fillings, inlays, and onlays to repair decayed or broken teeth and restore original strength.',
    about: {
      text: 'Fillings repair tooth decay, while crowns, inlays, onlays and bridges rebuild damaged teeth or replace missing tooth structure for improved function.'
    },
    checks: [
      'Tooth-colored (composite) fillings',
      'Amalgam (silver) fillings & inlays/onlays',
      'Seamless cavity repair & restoration'
    ]
  },
  {
    name: 'Endodontic Treatment',
    image: imgEndodontic,
    icon: '⌁',
    badge: 'PAINLESS RCT',
    badgeColor: 'teal',
    desc: 'Rotary laser-assisted root canal treatment (RCT) and re-RCT retreatment to relieve toothache and save infected natural teeth.',
    about: {
      text: 'Root canal care treats infection inside a tooth by removing the infected pulp, cleaning the canals and sealing the tooth to help prevent reinfection.'
    },
    checks: [
      'Single-visit rotary RCT treatment',
      'Laser canal sterilization & sealing',
      'Root canal retreatment (Re-RCT)'
    ]
  },
  {
    name: 'Periodontal',
    image: imgPeriodontal,
    icon: '🌿',
    badge: 'GUM HEALTH',
    badgeColor: 'mint',
    desc: 'Comprehensive gum care including ultrasonic scaling, deep root planing, and flap surgery to protect underlying jaw bone.',
    about: {
      text: 'Gum treatment focuses on removing plaque and tartar, controlling inflammation and protecting the tissues and bone that support the teeth.'
    },
    checks: [
      'Scaling & root planing (deep cleaning)',
      'Gum flap surgery & grafting',
      'Periodontal maintenance care'
    ]
  },
  {
    name: 'Preventive Treatments',
    image: imgPreventive,
    icon: '🦷',
    badge: 'COMPLETE CARE',
    badgeColor: 'mint',
    desc: 'Routine examinations, professional ultrasonic scaling, fluoride varnishes and sealants to prevent dental disease.',
    about: {
      text: 'Routine examinations, professional cleaning, fluoride and sealants help identify problems early and reduce the risk of cavities and gum disease.'
    },
    checks: [
      'Dental check-up (oral examination)',
      'Professional teeth cleaning (scaling & polishing)',
      'Fluoride treatment & oral hygiene instructions'
    ]
  },
  {
    name: 'Restorative Treatments',
    image: imgRestorative,
    icon: '🔧',
    badge: 'RESTORE',
    badgeColor: 'gold',
    desc: 'Precision dental crowns (caps), bridges, and composite restorations to rebuild damaged teeth to full strength.',
    about: {
      text: 'Fillings repair tooth decay, while crowns, inlays, onlays and bridges rebuild damaged teeth or replace missing tooth structure for improved function.'
    },
    checks: [
      'Tooth-colored composite & silver fillings',
      'Dental crowns (caps) & dental bridges',
      'Precision inlays & onlays'
    ]
  },
  {
    name: 'Emergency Dental Care',
    image: imgEmergency,
    icon: '⚡',
    badge: 'EMERGENCY CARE',
    badgeColor: 'red',
    desc: 'Immediate same-day priority treatment for severe toothaches, broken teeth, trauma, and dental abscesses.',
    about: {
      text: 'Prompt assessment can help manage dental pain, infection, broken teeth and dental trauma while protecting the tooth and surrounding tissues.'
    },
    checks: [
      'Same-day emergency treatment for toothache',
      'Broken or chipped tooth repair',
      'Knocked-out tooth & abscess management'
    ]
  },
  {
    name: 'Other Specialized Treatments',
    image: imgSpecialized,
    icon: '◉',
    badge: 'SPECIALIST CARE',
    badgeColor: 'purple',
    desc: 'Targeted care for jaw-joint TMJ pain, custom sports mouthguards, bruxism night guards, and oral lesion screenings.',
    about: {
      text: 'Specialized care can address jaw-joint symptoms, tooth grinding, sports protection and unusual mouth sores through examination and an individual treatment plan.'
    },
    checks: [
      'TMJ (jaw joint) disorder treatment',
      'Night guards for teeth grinding (bruxism)',
      'Mouthguards for sports & oral screenings'
    ]
  },
  {
    name: 'Root Canal Retreatment (Re-RCT)',
    image: imgReRct,
    icon: '⌁',
    badge: 'RE-TREATMENT',
    badgeColor: 'teal',
    desc: 'Specialized re-cleaning and sterilisation of previously treated root canals to eliminate persistent infection.',
    about: {
      text: 'Root canal retreatment (Re-RCT) is performed when a previously treated tooth becomes re-infected or fails to heal. The canals are re-cleaned, reshaped, and re-sealed.'
    },
    checks: [
      'Re-cleaning & reshaping of previously treated canals',
      'Removal of old filling material & deep infection',
      'Laser canal sterilisation & crown restoration'
    ]
  }
]

// Badge color map
const badgePalette = {
  mint: { bg: '#dcfce7', text: '#16a34a' },
  gold: { bg: '#fef9c3', text: '#a16207' },
  blue: { bg: '#dbeafe', text: '#1d4ed8' },
  teal: { bg: '#ccfbf1', text: '#0f766e' },
  purple: { bg: '#ede9fe', text: '#7c3aed' },
  pink: { bg: '#fce7f3', text: '#be185d' },
  red: { bg: '#fee2e2', text: '#b91c1c' }
}

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
      </div>

      <div className="svc-card-body">
        <div className="svc-card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="svc-icon">{service.icon}</span>
            <h3 className="svc-title" style={{ margin: 0 }}>{service.name}</h3>
          </div>
          {service.badge && (
            <span
              className="svc-badge-inline"
              style={{
                background: palette.bg,
                color: palette.text,
                fontSize: '10px',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {service.badge}
            </span>
          )}
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

      {/* 2. Our Services Catalogue */}
      <section className="section svc-featured-section">
        <div className="shell">
          <div className="svc-featured-heading">
            <div>
              <Badge variant="blue">Our 15 Comprehensive Services</Badge>
              <h2>
                Specialised care,<br />
                <em>delivered with precision.</em>
              </h2>
              <p>
                Each treatment at Shri Dental Care is performed by specialist doctors using modern technology for the best outcomes.
              </p>
            </div>
            <div className="svc-heading-meta">
              <div><strong>15</strong><span>Services Available</span></div>
              <div><strong>4.9★</strong><span>Patient Rating</span></div>
              <div><strong>{clinic.experience}</strong><span>Years Trusted</span></div>
            </div>
          </div>

          <div className="svc-card-grid">
            {featuredServicesList.map((service) => (
              <ServiceCard key={service.name} service={service} />
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
