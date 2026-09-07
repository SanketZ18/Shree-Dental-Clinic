import { ArrowRight, Check, HeartHandshake, Phone, ShieldCheck, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import Badge from '../components/ui/Badge'
import AutoCarousel from '../components/AutoCarousel'
import { clinic, specialists } from '../data/clinic'

const doctorImages = specialists.map(([name, role, src]) => ({
  src,
  alt: `${name} - ${role}`,
  name,
  role,
}))

export default function Team() {
  const lead = specialists[0]

  return (
    <div className="editorial-page team-page">
      {/* 1. Hero */}
      <section className="editorial-hero team-hero">
        <div className="shell editorial-hero-grid">
          <div>
            <Badge variant="blue">Your Dedicated Dental Specialists</Badge>
            <h1>
              Experienced hands,<br />
              <em>caring hearts.</em>
            </h1>
            <p>
              Meet our team of experienced dental surgeons, implantologists, endodontists, and pediatric specialists in Kamothe dedicated to gentle, pain-free dental care.
            </p>
            <div className="hero-actions">
              <Link className="ui-button ui-button-primary" to="/contact">
                Consult with our doctors <ArrowRight size={16} />
              </Link>
              <a className="editorial-call" href={`tel:${clinic.phone}`}>
                Call +91 9892694771
              </a>
            </div>
          </div>
          <div className="team-lead-image team-carousel">
            <AutoCarousel
              images={doctorImages}
              subcaption="Multi-specialist clinical team at Shri Dental Care"
            />
          </div>
        </div>
      </section>

      {/* 2. Team Approach */}
      <section className="section team-intro">
        <div className="shell team-intro-grid">
          <div>
            <Badge>Collaborative Care</Badge>
            <h2>
              Multi-specialty expertise<br />
              <em>for precision results.</em>
            </h2>
            <p>
              Complex dental cases often require different skills—from endodontic root canal treatments and cosmetic restorations to precision implantology and child dentistry. Our specialists collaborate on your treatment plan so you receive the most optimal clinical outcome.
            </p>
            <p>
              Every doctor at Shri Dental Care shares our commitment to painless techniques, conservative tooth preservation, and patient comfort.
            </p>
          </div>
          <div className="team-approach-card">
            <Badge variant="mint">Patient Care Standard</Badge>
            <h3>
              One clinic.<br />
              <em>Complete dental expertise.</em>
            </h3>
            <p>
              Whether you need routine scaling, a ceramic crown, orthodontic aligners, or urgent toothache relief, our team makes your visit reassuring and stress-free.
            </p>
            <ul>
              <li>
                <Check /> Collaborative diagnostic treatment planning
              </li>
              <li>
                <Check /> Clear explanations with intraoral camera views
              </li>
              <li>
                <Check /> Gentle local anesthesia & pain management
              </li>
              <li>
                <Check /> Dedicated post-procedure follow-ups
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Doctors Directory */}
      <section className="section team-directory">
        <div className="shell">
          <div className="directory-heading">
            <div>
              <Badge variant="mint">Clinical Specialists</Badge>
              <h2>
                Meet your<br />
                <em>dental care team.</em>
              </h2>
            </div>
            <span>
              <Stethoscope size={18} /> {specialists.length} Dental Care Professionals
            </span>
          </div>

          <div className="team-directory-grid">
            {specialists.map(([name, role, image, bio, qualification, experience], index) => (
              <article
                className={index === 0 ? 'doctor-profile featured-doctor' : 'doctor-profile'}
                key={image}
              >
                <div className="doctor-photo">
                  <img src={image} alt={name} />
                  <span className="doctor-index">0{index + 1}</span>
                </div>
                <div className="doctor-details">
                  <div className="doctor-badges" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <Badge variant="blue">{role}</Badge>
                    {qualification && <Badge variant="mint">{qualification}</Badge>}
                    {experience && <Badge variant="white">{experience}</Badge>}
                  </div>
                  <h3>{name}</h3>
                  <p>{bio || 'Bringing careful clinical expertise and a calm, reassuring approach to every patient in Kamothe.'}</p>
                  <a href={`tel:${clinic.phone}`}>
                    <Phone size={14} /> Connect with doctor
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Multi-Specialty Promise */}
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

      <CTA title="Meet the doctors who will care for your smile." />
    </div>
  )
}
