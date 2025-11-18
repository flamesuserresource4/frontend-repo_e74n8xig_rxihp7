import { Link, NavLink } from 'react-router-dom'
import { Menu, Brain, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) => `px-4 py-2 rounded-md transition-colors ${isActive ? 'text-white bg-blue-600/20' : 'text-blue-100 hover:text-white hover:bg-white/5'}`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold">
          <Brain className="w-6 h-6 text-blue-400" />
          trainingpshyco
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItem('/', 'Home')}
          {navItem('/about', 'About')}
          {navItem('/portfolio', 'Portfolio')}
          {navItem('/ai-tools', 'AI & Tools')}
          {navItem('/ai-plan', 'AI Integration Plan')}
          {navItem('/ethics', 'Ethics Charter')}
          {navItem('/contact', 'Contact')}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" aria-label="GitHub" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Github className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Email" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Mail className="w-5 h-5" /></a>
        </div>

        <button className="md:hidden p-2 rounded text-blue-100 hover:bg-white/5" onClick={() => setOpen(!open)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 animate-in fade-in slide-in-from-top-2">
          <div className="grid gap-2 bg-slate-800/60 rounded-lg p-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/ai-tools', 'AI & Tools')}
            {navItem('/ai-plan', 'AI Integration Plan')}
            {navItem('/ethics', 'Ethics Charter')}
            {navItem('/contact', 'Contact')}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Github className="w-5 h-5" /></a>
              <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Linkedin className="w-5 h-5" /></a>
              <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5 text-blue-100"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
