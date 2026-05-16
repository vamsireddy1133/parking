import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About',    path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers',  path: '/careers' },
  { name: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dcs-navy-dark/90 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="DCS Parking Solutions"
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-inter font-medium text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-5 py-2.5 rounded-xl font-inter font-semibold text-sm text-white transition-all duration-200 hover:shadow-lg hover:shadow-dcs-red/40 hover:-translate-y-0.5 animate-pulse-red"
            >
              <span>Get a Quote</span>
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dcs-navy-dark/95 backdrop-blur-xl border-t border-white/8"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-inter font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-white bg-dcs-red/20 border border-dcs-red/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block text-center mt-3 bg-dcs-red hover:bg-dcs-red-dark px-5 py-3 rounded-xl font-inter font-semibold text-white transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
