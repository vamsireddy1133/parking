import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Target, Eye, Award, Users, MapPin, Calendar, Linkedin,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const timeline = [
  { year: '2015', title: 'Foundation', desc: 'Mohan Karedla founded Durga Consulting Services in Hyderabad with a two-person team and a single contract for a 50-bay IT park in HITEC City.' },
  { year: '2017', title: 'BMS Division Launched', desc: 'Recognising the gap between physical markings and intelligent management, DCS launched its proprietary ParkOS software platform.' },
  { year: '2019', title: 'Regional Expansion', desc: 'Offices opened in Bengaluru and Chennai, enabling DCS to serve clients across the tri-city corridor of South India.' },
  { year: '2021', title: '500 Projects Milestone', desc: 'DCS completed its 500th project — a 1,200-bay commercial complex in Gachibowli — cementing its position as the region\'s leading parking solutions firm.' },
  { year: '2023', title: 'ISO 9001 Certification', desc: 'DCS received ISO 9001:2015 Quality Management System certification, validating its process excellence across all four service lines.' },
  { year: '2025', title: 'Today', desc: 'Over 500 clients, 1,000+ projects, and a team of 80 specialists across Hyderabad, Bengaluru, Chennai, and Visakhapatnam.' },
]

const values = [
  { icon: Target,  title: 'Precision',    desc: 'We treat a 10 mm deviation in bay line width with the same seriousness as a structural defect. Accuracy is non-negotiable.' },
  { icon: Award,   title: 'Accountability', desc: 'One project manager, one contract, one number to call. No blame-shifting between sub-contractors.' },
  { icon: Users,   title: 'Partnership',   desc: 'Our relationships outlast the project. Many of our clients have engaged us on three or more facilities.' },
  { icon: Eye,     title: 'Innovation',    desc: 'We reinvest 12% of annual revenue into R&D — developing smarter materials, greener processes, and better software.' },
]

export default function About() {
  return (
    <div className="bg-dcs-navy-dark">

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-dcs-red/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-dcs-red/10 border border-dcs-red/25 text-dcs-red text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            A Decade of Defining<br />
            <span className="text-dcs-red">Parking Standards</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            From a two-person startup in 2015 to South India's most trusted parking solutions firm —
            the DCS story is one of relentless standards, earned trust, and a genuine passion for the craft of parking infrastructure.
          </motion.p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dcs-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: Eye,
              label: 'Our Vision',
              heading: 'The Most Trusted Name in Parking Infrastructure Across India',
              body: 'To be the organisation that property developers, facility managers, and municipal bodies turn to first — knowing that DCS will deliver a parking solution that is safe, efficient, and built to outlast the building itself.',
            },
            {
              icon: Target,
              label: 'Our Mission',
              heading: 'Deliver Intelligent, Safe, and Efficient Parking for Every Client',
              body: 'We accomplish this by combining certified materials, CAD-precision design, proprietary technology, and a culture of accountability that permeates every level of the organisation — from the marking technician to the managing director.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-dcs-navy-light border border-white/8 rounded-2xl p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center mb-6">
                <item.icon size={22} className="text-dcs-red" />
              </div>
              <p className="text-dcs-red font-inter text-xs font-semibold uppercase tracking-widest mb-2">{item.label}</p>
              <h3 className="font-outfit font-bold text-2xl text-white mb-4 leading-snug">{item.heading}</h3>
              <p className="text-gray-400 font-inter text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Our Journey"
            title="Ten Years of Milestones"
            subtitle="From a single contract to 1,000+ projects — here is the DCS story, milestone by milestone."
          />
          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/8 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="sm:pl-16 relative"
                >
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-dcs-navy-light border border-white/10 items-center justify-center">
                    <Calendar size={16} className="text-dcs-red" />
                  </div>
                  <div className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6">
                    <span className="text-dcs-red font-outfit font-black text-2xl">{item.year}</span>
                    <h3 className="font-outfit font-bold text-white text-lg mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-inter text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dcs-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Values"
            title="The Principles That Drive Us"
            subtitle="Four values that shape every decision we make — from material selection to client communication."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-7 text-center group glow-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-dcs-red/20 transition-colors">
                  <v.icon size={24} className="text-dcs-red" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Leadership"
            title="The Person Behind DCS"
            subtitle="A decade of building South India's parking infrastructure, one project at a time."
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-dcs-navy-light border border-white/8 rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-5">

                {/* Photo placeholder */}
                <div className="md:col-span-2 bg-gradient-to-br from-dcs-navy to-dcs-navy-dark min-h-[320px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative text-center p-8">
                    <div className="w-32 h-32 rounded-full bg-dcs-red/10 border-2 border-dcs-red/30 flex items-center justify-center mx-auto mb-4">
                      <Users size={48} className="text-dcs-red/50" />
                    </div>
                    <p className="text-gray-500 font-inter text-xs italic">Professional portrait — Mohan Karedla</p>
                  </div>
                </div>

                {/* Bio */}
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <p className="text-dcs-red font-inter text-xs font-semibold uppercase tracking-widest mb-2">Founder & Managing Director</p>
                  <h3 className="font-outfit font-black text-3xl text-white mb-1">Mohan Karedla</h3>
                  <div className="flex items-center space-x-2 mb-6">
                    <MapPin size={13} className="text-gray-500" />
                    <span className="text-gray-500 font-inter text-sm">Hyderabad, Telangana</span>
                  </div>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                    With over 18 years of experience in civil infrastructure and facility management, Mohan founded DCS in 2015 after identifying a critical gap in the South Indian market — the absence of a specialist firm capable of delivering integrated parking solutions from design through to technology.
                  </p>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6">
                    Under his leadership, DCS has grown from a two-person consultancy to an 80-strong organisation that has shaped the parking infrastructure of over 500 clients across four states. Mohan is an active member of the Indian Green Building Council (IGBC) and a regular speaker at infrastructure summits.
                  </p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-white font-inter text-sm transition-colors group"
                  >
                    <Linkedin size={16} className="text-blue-400" />
                    <span>Connect on LinkedIn</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Presence ── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-dcs-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Our Presence" title="Operating Across South India" subtitle="Four offices, one standard of service." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: 'Hyderabad', state: 'Telangana', label: 'Headquarters', address: 'Cyber Hills Colony, HYD 500081' },
              { city: 'Bengaluru', state: 'Karnataka', label: 'South Office', address: 'Whitefield, BLR 560066' },
              { city: 'Chennai',   state: 'Tamil Nadu', label: 'East Office',  address: 'Guindy Industrial Estate, CHN 600032' },
              { city: 'Visakhapatnam', state: 'Andhra Pradesh', label: 'Coastal Office', address: 'MVP Colony, VZG 530017' },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6"
              >
                <MapPin size={18} className="text-dcs-red mb-3" />
                <p className="font-inter text-xs text-dcs-red font-semibold uppercase tracking-wider mb-1">{loc.label}</p>
                <h4 className="font-outfit font-bold text-xl text-white">{loc.city}</h4>
                <p className="text-gray-500 font-inter text-sm">{loc.state}</p>
                <p className="text-gray-400 font-inter text-xs mt-3 leading-relaxed">{loc.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dcs-navy-light to-dcs-navy rounded-3xl p-12 border border-white/10"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-4">Let's Build Something Great Together</h2>
            <p className="text-gray-400 font-inter text-lg mb-8">
              Whether it's a 20-bay complex or a 2,000-bay airport terminal, we're ready.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-10 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
