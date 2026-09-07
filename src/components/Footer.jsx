import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        {/* Brand Column */}
        <div className="footer-column footer-brand-column">
          <Link to="/" className="footer-logo">
            <img src="/images/MyPictures/logo.jpg" alt="Shri Dental Care" />
            <span className="brand-text"><span className="brand-blue">Shri Dental </span><span className="brand-pink">Care</span></span>
          </Link>
          <p className="footer-tagline">
            Modern, gentle & trusted dental care in Kamothe for over 15 years.
          </p>
          <div className="footer-trust-pill">
            <ShieldCheck size={14} />
            <span>100% Sterilised & Safe</span>
          </div>
          <a className="footer-whatsapp" href={clinic.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={15} /> Quick WhatsApp Chat
          </a>
        </div>

        {/* Popular Treatments Column */}
        <div className="footer-column">
          <h4>Key Treatments</h4>
          <div className="footer-links">
            <Link to="/services">Painless Root Canal (RCT)</Link>
            <Link to="/services">Dental Implants & Crowns</Link>
            <Link to="/services">Clear Aligners & Braces</Link>
            <Link to="/services">Teeth Whitening & Makeover</Link>
            <Link to="/services">Pediatric Child Care</Link>
            <Link to="/services" className="footer-view-all">
              View All 11 Services <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Clinic & Timings Column */}
        <div className="footer-column">
          <h4>Clinic & Timings</h4>
          <div className="footer-contact-block">
            <div className="contact-line">
              <MapPin size={16} className="footer-icon" />
              <span>
                Shop No 27, 28, Satyaketu Complex, Plot No 09, Opp Union Bank of India, Sector 35, Kamothe, Navi Mumbai
              </span>
            </div>
            <div className="contact-line">
              <Clock3 size={16} className="footer-icon" />
              <span>
                <strong>Mon – Sun: 10:00 AM – 10:00 PM</strong>
                Open All 7 Days
              </span>
            </div>
          </div>
        </div>

        {/* Direct Contacts Column */}
        <div className="footer-column">
          <h4>Direct Contacts</h4>
          <div className="footer-contact-block">
            <a className="contact-line" href={`tel:${clinic.phone}`}>
              <Phone size={16} className="footer-icon" />
              <span>
                <strong>Call for Appointment</strong>
                +91 9892694771 / 9503703143
              </span>
            </a>
            <a className="contact-line" href={`mailto:${clinic.email}`}>
              <Mail size={16} className="footer-icon" />
              <span>{clinic.email}</span>
            </a>
            <a
              className="directions-link"
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              Google Maps Directions <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p className="copyright">
          © {new Date().getFullYear()} Shri Dental Care. All rights reserved. Kamothe, Navi Mumbai — 410209.
        </p>
      </div>
    </footer>
  )
}
