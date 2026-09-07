import { ArrowUpRight } from 'lucide-react'
export default function Button({ children, variant = 'primary', className = '', ...props }) { return <a className={`ui-button ui-button-${variant} ${className}`} {...props}>{children}<ArrowUpRight size={16}/></a> }
