import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'

const services = ['Parking Markings', 'Layout Design', 'Signage Boards', 'BMS Software']
const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers',  path: '/careers' },
  { name: 'Contact',  path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dcs-navy-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-5">
              <img
                src="/logo.png"
                alt="DCS Parking Solutions"
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6">
              Durga Consulting Services — South India's trusted partner for end-to-end parking infrastructure since 2015.
            </p>
            <div className="flex space-x-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dcs-red hover:border-dcs-red transition-all duration-200"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 hover:text-white font-inter text-sm transition-colors flex items-center space-x-2 group">
                    <span className="w-1 h-1 rounded-full bg-dcs-red group-hover:w-2 transition-all" />
                    <span>{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white font-inter text-sm transition-colors flex items-center space-x-2 group">
                    <span className="w-1 h-1 rounded-full bg-dcs-red group-hover:w-2 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={16} className="text-dcs-red mt-0.5 shrink-0" />
                <span className="text-gray-400 font-inter leading-relaxed">
                  Plot No. 12, Cyber Hills Colony,<br />
                  Hyderabad, Telangana — 500081
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={16} className="text-dcs-red shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white font-inter transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={16} className="text-dcs-red shrink-0" />
                <a href="mailto:info@dcshyd.com" className="text-gray-400 hover:text-white font-inter transition-colors">
                  info@dcshyd.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 font-inter text-sm">
            © {new Date().getFullYear()} DCS Parking Solutions (Durga Consulting Services). All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 font-inter text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 font-inter text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
