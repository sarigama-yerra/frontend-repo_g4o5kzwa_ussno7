import { Link, NavLink } from 'react-router-dom'
import { Moon } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#0a0f1a]/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <Link to="/" className="font-bold text-lg">Dozemate</Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-sky-400' : 'text-white/80 hover:text-white'}>Home</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-sky-400' : 'text-white/80 hover:text-white'}>Dashboard</NavLink>
          <NavLink to="/history" className={({isActive}) => isActive ? 'text-sky-400' : 'text-white/80 hover:text-white'}>History</NavLink>
        </nav>
        <Moon size={18} className="text-white/60" />
      </div>
    </header>
  )
}
