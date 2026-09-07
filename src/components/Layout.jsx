import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollReveal from './ScrollReveal'
export default function Layout() { return <><Header/><ScrollReveal/><main><Outlet/></main><Footer/></> }
