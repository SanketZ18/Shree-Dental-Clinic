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
import imgWhitening from '../../images/Services/3.jpeg'
import imgScaling from '../../images/Services/5.jpeg'
import imgImplants from '../../images/Services/6.jpeg'
import imgLaser from '../../images/Services/Laser Dentistry.jpeg'

const featuredServicesList = [
  {
    name: 'PREVENTIVE DENTAL TREATMENTS',
    image: imgPreventive,
    icon: '🦷',
    badge: 'FIRST VISIT & CHECK-UP',
    badgeColor: 'mint',
    desc: 'Your First Visit. Your Complete Dental Check-Up. Your Healthier Smile.',
    about: {
      text: 'At Shri Dental Care, your first visit is focused on understanding your complete oral health and identifying potential dental concerns early—before they become bigger problems.'
    },
    checks: [
      'Complete Dental Check-Up & Oral Examination',
      'Early Detection of Cavities, Gum Problems & Infections',
      'Clear, Personalized Preventive Treatment Plan',
      'Professional Guidance for Lifelong Oral Health'
    ]
  },
  {
    name: 'OPG & CBCT IMAGING',
    image: imgOpgCbct,
    icon: '🔍',
    badge: 'DIGITAL DIAGNOSTICS',
    badgeColor: 'blue',
    desc: 'See More. Diagnose Precisely. Treat Confidently.',
    about: {
      text: 'At Shri Dental Care, advanced OPG and CBCT imaging helps provide detailed views of your teeth, jaw, bone, and surrounding structures for accurate diagnosis and treatment planning.'
    },
    checks: [
      'Detailed 2D Panoramic OPG & 3D CBCT Imaging',
      'Supports Precise Planning for Implants, RCT & Surgery',
      'High-Resolution Visualization of Complex Dental Structures',
      'Quick, Convenient & Low-Radiation Digital Diagnostics'
    ]
  },
  {
    name: 'IMPLANT',
    image: imgImplants,
    icon: '🔩',
    badge: 'IMMEDIATE LOADING',
    badgeColor: 'blue',
    desc: 'Fixed Teeth. Faster Function. A Confident New Smile.',
    about: {
      text: 'At Shri Dental Care, Immediate Loading Implants offer a modern approach to full-mouth rehabilitation—helping eligible patients regain fixed teeth and functional comfort in as little as 48–72 hours, depending on individual clinical conditions.'
    },
    checks: [
      'Fixed Teeth & Crown Loading in as Little as 48–72 Hours',
      'Strategic Design Suitable for Patients with Severe Bone Loss',
      'Suitable for High-Risk Profiles (Controlled Diabetics & Smokers)',
      'Fewer Surgical Stages, Greater Efficiency & Tissue Health'
    ]
  },
  {
    name: 'clear Aligner',
    image: imgClearAligners,
    icon: '✨',
    badge: 'INVISIBLE OPTION',
    badgeColor: 'mint',
    desc: 'Straighten Your Smile. Discreetly. Comfortably. Confidently.',
    about: {
      text: 'At Shri Dental Care, clear aligners offer a modern, virtually invisible way to achieve a beautifully aligned smile—without the look of traditional braces.'
    },
    checks: [
      'Nearly Invisible & Transparent Custom Clear Aligners',
      'Comfortable & Removable While Eating, Brushing & Flossing',
      'Digitally Planned Custom Alignment for Optimal Results',
      'Fewer Lifestyle Restrictions with Minimal Daily Disruption'
    ]
  },
  {
    name: 'Braces ortho',
    image: imgOrthodontics,
    icon: '◇',
    badge: 'SMILE ALIGNMENT',
    badgeColor: 'purple',
    desc: 'Straighten Your Teeth. Transform Your Smile. Elevate Your Confidence.',
    about: {
      text: 'At Shri Dental Care, modern orthodontic treatment is designed to correct tooth alignment and bite problems while creating a healthier, more confident smile.'
    },
    checks: [
      'Precise Alignment for Crooked, Crowded & Uneven Teeth',
      'Naturally Balanced Aesthetics & Beautiful Smile Makeover',
      'Improved Chewing Function, Comfort & Bite Stability',
      'Customized Planning with Metal, Ceramic & Lingual Options'
    ]
  },
  {
    name: 'RCT & RE-RCT',
    image: imgEndodontic,
    icon: '⌁',
    badge: 'PAINLESS RCT',
    badgeColor: 'teal',
    desc: 'Save Your Natural Tooth. Treat It Faster. Smile With Confidence.',
    about: {
      text: 'At Shri Dental Care, advanced root canal treatments are designed to relieve infection, preserve natural teeth, and restore comfortable function.'
    },
    checks: [
      'Single-Sitting RCT Available for Suitable Cases',
      'Preserve Your Natural Tooth & Eliminate Deep Canal Infection',
      'Specialized Re-RCT for Teeth with Persistent or Past Infection',
      'Precise, Gentle Techniques for Zero Post-Procedure Pain'
    ]
  },
  {
    name: 'Dental filling',
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
    name: 'PEDIATRIC DENTISTRY',
    image: imgPediatric,
    icon: '♡',
    badge: 'GENTLE CHILD CARE',
    badgeColor: 'pink',
    desc: 'Happy Visits. Healthy Smiles. Little Patients, Big Care.',
    about: {
      text: 'At Shri Dental Care, we provide a child-friendly, comfortable, and anxiety-conscious dental experience to help children build healthy smiles and positive dental habits from an early age.'
    },
    checks: [
      'Child-Friendly, Welcoming & Anxiety-Free Experience',
      'Pulpotomy Care to Manage Deep Decay in Baby Teeth',
      'Fluoride Varnish Enamel Strengthening & Protection',
      'Pit & Fissure Sealants to Prevent Cavities in Deep Grooves'
    ]
  },
  {
    name: 'TEETH CLEANING & SCALING',
    image: imgScaling,
    icon: '🌿',
    badge: 'GUM HEALTH',
    badgeColor: 'mint',
    desc: 'Clean Teeth. Healthy Gums. A Fresher, Brighter Smile.',
    about: {
      text: 'At Shri Dental Care, professional dental cleaning and scaling help remove plaque, tartar, and surface stains that regular brushing cannot completely eliminate.'
    },
    checks: [
      'Ultrasonic Scaling Removes Hardened Tartar & Plaque Buildup',
      'Helps Reduce Gum Inflammation, Bleeding & Periodontal Risk',
      'Removes Bacteria & Unpleasant Odors for Fresher Breath',
      'Polishes Teeth & Removes Surface Stains for a Brighter Look'
    ]
  },
  {
    name: 'TEETH WHITENING & BLEACHING',
    image: imgWhitening,
    icon: '☼',
    badge: 'SMILE BRIGHTENING',
    badgeColor: 'purple',
    desc: 'Brighten Your Smile. Boost Your Confidence.',
    about: {
      text: 'At Shri Dental Care, professional teeth whitening helps reduce surface and intrinsic stains, giving you a brighter, cleaner-looking smile with personalized care.'
    },
    checks: [
      'Lightens Dental Stains & Enhances Natural Tooth Shade',
      'Clinically Supervised Treatment for Controlled, Safe Whitening',
      'Effective Reduction of Tea, Coffee, Tobacco & Aging Stains',
      'Quick Smile Enhancement with Long-Lasting Radiant Results'
    ]
  },
  {
    name: 'DENTAL VENEERS',
    image: imgCosmetic,
    icon: '💎',
    badge: 'COSMETIC VENEERS',
    badgeColor: 'purple',
    desc: 'Transform Your Smile. Refine Your Look. Smile With Confidence.',
    about: {
      text: 'At Shri Dental Care, dental veneers offer a customized cosmetic solution to enhance the appearance of teeth and create a more balanced, natural-looking smile.'
    },
    checks: [
      'Improve Discolored, Chipped, Spaced or Uneven Teeth',
      'Customized Shape & Natural Shade Tailored to Facial Features',
      'Precision Smile Design Tailored to Individual Aesthetic Goals',
      'Durable, Long-Lasting Cosmetic Transformation'
    ]
  },
  {
    name: 'oral surgery',
    image: imgOralSurgery,
    icon: '⚙',
    badge: 'PAINLESS SURGERY',
    badgeColor: 'red',
    desc: 'Advanced Surgical Care. Gentle Approach. Confident Recovery.',
    about: {
      text: 'At Shri Dental Care, our oral surgical procedures are planned with precision and patient comfort in mind—from routine surgical extractions to advanced procedures supporting implant treatment.'
    },
    checks: [
      'Careful, Comfort-Focused Removal of Damaged Teeth',
      'Expert Wisdom Tooth Disimpaction to Prevent Infection & Crowding',
      'Advanced Jawbone Grafting for Deficient Ridge Reconstruction',
      'Sinus Lift Procedures for Safe Upper Jaw Implant Placement'
    ]
  },
  {
    name: 'REMOVABLE DENTURES',
    image: imgToothReplacement,
    icon: '🦷',
    badge: 'REMOVABLE PROSTHETICS',
    badgeColor: 'blue',
    desc: 'Restore Your Smile. Restore Your Confidence.',
    about: {
      text: 'At Shri Dental Care, customized removable dentures are designed to replace missing teeth, restore everyday function, and give you a natural-looking smile.'
    },
    checks: [
      'Complete & Partial Dentures Custom-Fitted for Missing Teeth',
      'Significantly Improves Chewing Function & Everyday Comfort',
      'Natural-Looking Aesthetics with Custom Shade & Contour',
      'Convenient Removable Design for Simple Daily Maintenance'
    ]
  },
  {
    name: 'IMPLANT-SUPPORTED FIXED DENTURES',
    image: imgRestorative,
    icon: '🔩',
    badge: 'FIXED REHABILITATION',
    badgeColor: 'blue',
    desc: 'Secure Your Smile. Restore Your Function. Live With Confidence.',
    about: {
      text: 'At Shri Dental Care, implant-supported fixed dentures provide a stable, secure solution for patients with multiple or complete tooth loss—helping restore both function and smile confidence.'
    },
    checks: [
      'Implants Anchor Dentures Securely with Zero Slipping or Wobble',
      'Superior Chewing Power & Natural Speech Clarity',
      'Restores Natural Facial Aesthetics & Lip Support',
      'Preserves Underlying Jawbone Density from Bone Resorption'
    ]
  },
  {
    name: 'LASER DENTISTRY',
    image: imgLaser,
    icon: '⌁',
    badge: 'MINIMALLY INVASIVE',
    badgeColor: 'teal',
    desc: 'Advanced Technology. Gentle Treatment. Better Dental Comfort.',
    about: {
      text: 'At Shri Dental Care, laser dentistry offers a modern approach to selected dental procedures, with a focus on precision, comfort, and minimally invasive care.'
    },
    checks: [
      'High-Precision Treatment Minimizing Impact on Healthy Tissue',
      'Painless, Comfortable Experience Often with Minimal Anesthesia',
      'Controlled Bleeding & Coagulation During Soft-Tissue Procedures',
      'Significantly Faster Healing & Tissue Recovery Times'
    ]
  },
  {
    name: 'Emergency Dental Care',
    image: imgEmergency,
    icon: '⚡',
    badge: 'SAME DAY RELIEF',
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
              <Badge variant="blue">Our {clinic.serviceCount} Comprehensive Services</Badge>
              <h2>
                Specialised care,<br />
                <em>delivered with precision.</em>
              </h2>
              <p>
                Each treatment at Shri Dental Care is performed by specialist doctors using modern technology for the best outcomes.
              </p>
            </div>
            <div className="svc-heading-meta">
              <div><strong>{clinic.serviceCount}</strong><span>Services Available</span></div>
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
