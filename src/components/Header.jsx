import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { clinic, navItems } from '../data/clinic'

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header glass-panel">
    <div className="shell nav-wrap">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img src="/images/MyPictures/logo.jpg" alt="Shri Dental Care"/>
        <span className="brand-text"><span className="brand-blue">Shri Dental </span><span className="brand-pink">Care</span></span>
      </Link>
      <nav className={open ? 'main-nav open' : 'main-nav'}>{navItems.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>{item.label}</NavLink>)}<a className="nav-book" href={clinic.appointment} target="_blank" rel="noreferrer">Book Appointment <ArrowUpRight size={16}/></a></nav>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}
