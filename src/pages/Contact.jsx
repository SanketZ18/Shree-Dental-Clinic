import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  CreditCard,
  HelpCircle,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles
} from 'lucide-react'
import CTA from '../components/CTA'
import Badge from '../components/ui/Badge'
import { clinic } from '../data/clinic'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Check-up & Cleaning',
    preferredTime: '',
    message: ''
  })

  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const scriptUrl = clinic.googleSheetScriptUrl

    if (!scriptUrl || !scriptUrl.includes('script.google.com/macros/s/')) {
      setStatus('error')
      setErrorMessage('Online booking is not configured yet. Please call or message the clinic directly.')
      return
    }

    try {
      // Prepare payload
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        preferredTime: formData.preferredTime,
        message: formData.message,
        timestamp: new Date().toISOString()
      }

      const formBody = new URLSearchParams()
      for (const key in payload) formBody.append(key, payload[key])

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      })

      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'General Check-up & Cleaning',
        preferredTime: '',
        message: ''
      })
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
      setErrorMessage('Could not connect to the booking server. You can still message us directly on WhatsApp or Call!')
    }
  }

  return (
    <div className="editorial-page contact-page">
      {/* 1. Hero */}
      <section className="editorial-hero contact-hero">
        <div className="shell editorial-hero-grid">
          <div>
            <Badge variant="mint">Contact & Appointment Booking</Badge>
            <h1>
              Your journey to a<br />
              <em>healthy smile starts here.</em>
            </h1>
            <p>
              Have a dental query, experiencing toothache, or ready to book your visit? Our friendly clinic team in Sector 35, Kamothe is ready to assist you.
            </p>
            <div className="hero-actions">
              <a className="ui-button ui-button-primary" href={`tel:${clinic.phone}`}>
                Call the clinic <Phone size={15} />
              </a>
              <a
                className="editorial-call"
                href={clinic.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="contact-hero-panel">
            <Badge variant="blue">Clinic Highlights</Badge>
            <h2>
              Thoughtful care,<br />
              <em>conveniently accessible.</em>
            </h2>
            <div className="hero-panel-row">
              <Clock3 />
              <span>
                <strong>Monday – Sunday (Open All 7 Days)</strong>
                10:00 AM – 10:00 PM
              </span>
            </div>
            <div className="hero-panel-row">
              <ShieldCheck />
              <span>
                <strong>Same-Day Urgent Care</strong>
                Immediate slots for severe toothache & trauma
              </span>
            </div>
            <div className="hero-panel-row">
              <MapPin />
              <span>
                <strong>Central Kamothe Location</strong>
                Shop 27-28, Satyaketu Complex, Sector 35 (Opp Union Bank of India)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Layout (Details + Interactive Form) */}
      <section className="section contact-main">
        <div className="shell contact-layout">
          {/* Left: Contact Info */}
          <div className="contact-details">
            <Badge variant="blue">Visit, Call or Message</Badge>
            <h2>
              We’re always here<br />
              <em>to help your smile.</em>
            </h2>
            <p>
              Walk in during our clinic hours, call our reception, or fill out the appointment enquiry form to reserve your preferred consultation slot.
            </p>

            <a
              className="contact-detail-card"
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin />
              <span>
                <small>Visit our clinic</small>
                {clinic.address}
              </span>
              <ArrowRight />
            </a>

            <a className="contact-detail-card" href={`tel:${clinic.phone}`}>
              <Phone />
              <span>
                <small>Phone consultations & appointments</small>
                +91 9892694771 / +91 9503703143
              </span>
              <ArrowRight />
            </a>

            <a className="contact-detail-card" href={`mailto:${clinic.email}`}>
              <Mail />
              <span>
                <small>Email enquiries</small>
                {clinic.email}
              </span>
              <ArrowRight />
            </a>

            <div className="contact-hours">
              <Clock3 />
              <span>
                <small>Consultation Hours</small>
                Monday to Sunday: 10:00 AM to 10:00 PM (Open All 7 Days)
              </span>
            </div>

            <div className="payment-modes-box">
              <div className="payment-modes-header">
                <CreditCard size={18} />
                <strong>Accepted Payment Methods:</strong>
              </div>
              <p>UPI (GPay / PhonePe / Paytm), Credit & Debit Cards (Visa/Mastercard), Cash, and 0% Interest EMI options for Implants and Aligners.</p>
            </div>
          </div>

          {/* Right: Interactive Contact Form saving to Google Sheets */}
          <form className="enquiry-card" onSubmit={handleSubmit}>
            <Badge variant="mint">Direct Clinic Booking</Badge>
            <h2>
              Request an<br />
              <em>appointment.</em>
            </h2>

            {status === 'success' ? (
              <div className="form-success-message">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You!</h3>
                <p>
                  Your appointment request has been recorded in our system. Our clinic receptionist will contact you shortly on your phone to confirm your preferred timing!
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    className="ui-button ui-button-secondary"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Enquiry
                  </button>
                  <a
                    href={clinic.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="ui-button ui-button-whatsapp"
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <>
                <label>
                  Your Full Name *
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                  />
                </label>

                <div className="form-row-2">
                  <label>
                    Phone Number *
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                    />
                  </label>

                  <label>
                    Email Address
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                    />
                  </label>
                </div>

                <div className="form-row-2">
                  <label>
                    Treatment Needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Check-up & Cleaning">General Check-up & Cleaning</option>
                      <option value="Root Canal Treatment (RCT)">Root Canal Treatment (RCT)</option>
                      <option value="Dental Implants & Crowns">Dental Implants & Crowns</option>
                      <option value="Clear Aligners / Braces">Clear Aligners / Braces</option>
                      <option value="Teeth Whitening / Cosmetic">Teeth Whitening / Cosmetic</option>
                      <option value="Kids Pediatric Dentistry">Kids Pediatric Dentistry</option>
                      <option value="Tooth Extraction / Wisdom Tooth">Tooth Extraction / Wisdom Tooth</option>
                      <option value="Emergency Severe Toothache">Emergency Severe Toothache</option>
                      <option value="Other Dental Concern">Other Dental Concern</option>
                    </select>
                  </label>

                  <label>
                    Preferred Date / Time
                    <input
                      type="text"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="e.g. Tomorrow 5 PM or Weekend"
                    />
                  </label>
                </div>

                <label>
                  Tell us a little about what you need
                  <textarea
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your tooth pain, sensitivity, or smile goals..."
                  />
                </label>

                {status === 'error' && (
                  <div className="form-error-banner">
                    <p>{errorMessage}</p>
                    <a
                      href={clinic.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="ui-button ui-button-whatsapp"
                    >
                      Book on WhatsApp Instead
                    </a>
                  </div>
                )}

                <button
                  className="ui-button ui-button-primary"
                  type="submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="spinner" /> Submitting to Sheet...
                    </>
                  ) : (
                    <>
                      Submit Appointment Request <Send size={15} />
                    </>
                  )}
                </button>
                <p className="form-privacy-note">
                  🔒 We respect your privacy. Your details are securely recorded in our Google Sheet for appointment scheduling only.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* 3. Route & Landmark Card */}
      <section className="contact-route-section">
        <div className="shell contact-route-card">
          <div className="route-main">
            <div className="route-icon">
              <MapPin size={22} />
            </div>
            <div>
              <Badge variant="white">How To Reach Us</Badge>
              <h2>
                Easy to find in Sector 35,<br />
                <em>Kamothe, Navi Mumbai.</em>
              </h2>
              <p>{clinic.address}</p>
              <div className="route-landmarks">
                <span>📍 <strong>Landmark:</strong> Exactly opposite Union Bank of India & near Police Station</span>
                <span>🚆 <strong>Transit:</strong> 5 mins from Mansarovar & Khandeshwar Railway Stations</span>
                <span>🚗 <strong>Parking:</strong> Dedicated visitor parking space in Satyaketu Complex</span>
              </div>
            </div>
          </div>
          <div className="route-side">
            <div>
              <Clock3 />
              <span>
                <strong>Mon – Sun: 10:00 AM – 10:00 PM</strong>
                Open All 7 Days
              </span>
            </div>
            <a
              href={clinic.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="ui-button ui-button-secondary"
            >
              Open in Google Maps <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <CTA className="contact-final-cta" title="Need immediate dental advice or emergency care?" />
    </div>
  )
}
