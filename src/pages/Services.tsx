import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Car, PenTool, Building2, Monitor,
  CheckCircle, Layers, Zap, Shield, BarChart3, ChevronDown,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const services = [
  {
    icon: Car,
    color: 'from-red-500/20 to-transparent',
    iconColor: 'text-red-400',
    image: '/s1.png',
    title: 'Floor Marking & Painting',
    tagline: 'Precision. Durability. Compliance.',
    description:
      'Our marking division delivers high-quality floor marking solutions using Enamel/MRF/Water Paint, Epoxy, Thermoplastic, and Synthetic materials — engineered to withstand high traffic volumes, tropical heat, and monsoon conditions. We handle every scale from small apartment blocks to large commercial complexes.',
    benefits: [
      'Enamel / MRF / Water-based paint for general parking areas',
      'Epoxy & Epoxy Slot Marking for high-durability indoor facilities',
      'Hot-applied Thermoplastic for roads and high-speed zones',
      'Synthetic coating for premium finish and enhanced grip',
      'Column (Pillar) Painting with colour coding per zone/floor',
      'Slot Numbering with retroreflective characters for easy identification',
    ],
    imageAlt: 'Epoxy floor marking in a modern parking facility',
  },
  {
    icon: PenTool,
    color: 'from-blue-500/20 to-transparent',
    iconColor: 'text-blue-400',
    image: '/s2.png',
    title: 'Consulting & Layout Design',
    tagline: 'Space Maximised. Flow Optimised.',
    description:
      'Our consulting team conducts detailed layout surveys and designs efficient parking solutions using AutoCAD. We analyse traffic flow, optimise space utilisation, and deliver compliant layouts that maximise bay capacity while ensuring smooth circulation and safety for all users.',
    benefits: [
      'On-site Layout Survey with dimensional and capacity assessment',
      'AutoCAD Layout Design with precise bay dimensions and traffic arrows',
      'Traffic Flow Analysis to minimise conflict points and bottlenecks',
      'Parking Management Analysis with occupancy and revenue projections',
      'EV charging bay integration with cable route planning',
      'Disabled (PwD) bay and pedestrian safety compliance',
    ],
    imageAlt: 'CAD parking layout design and traffic flow planning',
  },
  {
    icon: Building2,
    color: 'from-emerald-500/20 to-transparent',
    iconColor: 'text-emerald-400',
    image: '/s3.png',
    title: 'Sign Boards & Entry/Exit Systems',
    tagline: 'Navigate. Access. Control.',
    description:
      'We design, fabricate, and install the full range of parking signage and entry/exit systems — from backlit and retroreflective sign boards to automated gates, boom barriers, turnstiles, and sliding doors. Every installation is built for durability and seamless user experience.',
    benefits: [
      'Backlit sign boards for high visibility in all lighting conditions',
      'Static and Retro Reflective boards for outdoor and road-side use',
      'Automated Gates and Sliding Doors for controlled access',
      'Boom Barriers with RFID/ANPR integration for frictionless entry',
      'Turnstiles for pedestrian access control in high-security areas',
      'Parking Availability Display Boards for real-time guidance',
    ],
    imageAlt: 'Parking sign boards and automated entry/exit systems',
  },
  {
    icon: Monitor,
    color: 'from-violet-500/20 to-transparent',
    iconColor: 'text-violet-400',
    image: '/s4.png',
    title: 'Smart Parking Technology',
    tagline: 'Intelligent. Connected. Scalable.',
    description:
      'Our Smart Parking solutions integrate ANPR cameras, UHF RFID readers, FASTag lanes, and cloud-based parking applications to automate entry/exit management, billing, and real-time monitoring. We also supply and install column guards, wheel stoppers, convex mirrors, speed breakers, and all parking safety accessories.',
    benefits: [
      'ANPR / UHF RFID Entry Exit Management System',
      'FASTag Integration for seamless toll-style parking payments',
      'Boom Barriers and Parking Application (Android & iOS)',
      'Parking Safety Items: Column Guards, Wheel Stoppers, Convex Mirrors',
      'Speed Breakers, Spring Posts, Traffic Cones, Water Barriers',
      'Manpower solutions: Valet Drivers, Wardens & Traffic Marshals',
    ],
    imageAlt: 'Smart parking technology with ANPR and FASTag integration',
  },
]

const process = [
  { step: '01', icon: Layers,   title: 'Site Assessment',  desc: 'Our engineers conduct a full dimensional survey and traffic-count study of your site within 48 hours of enquiry.' },
  { step: '02', icon: PenTool,  title: 'Design & Proposal', desc: 'We deliver a CAD layout, material specification sheet, and fixed-price quotation — no hidden costs, no approximations.' },
  { step: '03', icon: Zap,      title: 'Execution',         desc: 'A dedicated project manager oversees marking, signage, and software installation with daily progress updates.' },
  { step: '04', icon: Shield,   title: 'Handover & SLA',    desc: 'We issue a completion certificate, warranty documentation, and a 12-month maintenance SLA on all works.' },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const toggle = (i: number) => setExpandedIndex((prev) => (prev === i ? null : i))

  return (
    <div className="bg-dcs-navy-dark">

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-dcs-red/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/5 border border-white/15 text-gray-400 text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            Four Pillars of Parking<br />
            <span className="text-dcs-red">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            Every DCS engagement is scoped, executed, and warranted under a single point of accountability.
            No sub-contractor ambiguity — just one team, one contract, one standard of excellence.
          </motion.p>
        </div>
      </section>

      {/* ── Service Sections ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">

          {/* ── Mobile: accordion ── */}
          <div className="lg:hidden space-y-3">
            {services.map((s, i) => {
              const isOpen = expandedIndex === i
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden border border-white/8 bg-dcs-navy-light"
                >
                  {/* Compact row */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-4 py-4 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} border border-white/10 flex items-center justify-center shrink-0`}>
                        <s.icon size={18} className={s.iconColor} />
                      </div>
                      <div>
                        <p className="font-outfit font-bold text-white text-sm">{s.title}</p>
                        <p className="text-dcs-red font-inter text-xs">{s.tagline}</p>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 border-t border-white/5 pt-4 space-y-4">
                          <p className="text-gray-400 font-inter text-sm leading-relaxed">{s.description}</p>
                          <ul className="space-y-2.5">
                            {s.benefits.map((b) => (
                              <li key={b} className="flex items-start space-x-2.5">
                                <CheckCircle size={14} className="text-dcs-red mt-0.5 shrink-0" />
                                <span className="text-gray-300 font-inter text-sm leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* ── Desktop: full-width text cards ── */}
          <div className="hidden lg:block space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-3xl overflow-hidden hover:border-white/16 transition-colors duration-300"
              >
                <div className={`h-1 bg-gradient-to-r ${s.color}`} />
                <div className="p-10 grid grid-cols-5 gap-10 items-start">
                  {/* Left: icon + title */}
                  <div className="col-span-2 flex items-start space-x-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} border border-white/10 flex items-center justify-center shrink-0 mt-1`}>
                      <s.icon size={26} className={s.iconColor} />
                    </div>
                    <div>
                      <p className="text-gray-400 font-inter text-xs font-semibold uppercase tracking-widest mb-1">{s.tagline}</p>
                      <h2 className={`font-outfit font-black text-2xl leading-tight mb-3 ${s.iconColor}`}>{s.title}</h2>
                      <p className="text-gray-400 font-inter text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                  {/* Right: benefits */}
                  <ul className="col-span-3 grid grid-cols-2 gap-x-8 gap-y-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start space-x-2.5">
                        <CheckCircle size={15} className="text-dcs-red mt-0.5 shrink-0" />
                        <span className="text-gray-300 font-inter text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dcs-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="How We Work"
            title="A Process Built on Accountability"
            subtitle="Every DCS project follows a four-stage delivery framework designed to eliminate surprises and exceed expectations."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-7 relative overflow-hidden group glow-hover"
              >
                <span className="absolute top-4 right-4 font-outfit font-black text-5xl text-white/4 select-none">
                  {p.step}
                </span>
                <div className="w-11 h-11 rounded-xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center mb-5 group-hover:bg-dcs-red/20 transition-colors">
                  <p.icon size={20} className="text-dcs-red" />
                </div>
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value props ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="The DCS Advantage"
            title="Why 500+ Clients Choose Us"
            subtitle="We compete on quality, not price. Here's what that means in practice."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield,   title: 'IS-Certified Materials',     desc: 'Every material we specify carries a Bureau of Indian Standards certification — no substitutes, no compromise.' },
              { icon: Zap,      title: '72-Hour Site Mobilisation',   desc: 'Once a purchase order is signed, our crew is on-site within three working days — project size notwithstanding.' },
              { icon: BarChart3,title: 'Transparent Reporting',       desc: 'Clients receive a weekly photo-and-progress report and a final as-built drawing package at handover.' },
              { icon: Building2,title: 'Multi-Sector Experience',     desc: 'We have delivered projects across IT parks, pharma plants, hospitals, airports, malls, and gated communities.' },
              { icon: Monitor,  title: 'Integrated Technology',       desc: 'Our BMS platform integrates with ANPR cameras, FASTag, UPI payments, and leading ERP systems out of the box.' },
              { icon: CheckCircle, title: '5-Year Product Warranty',  desc: 'Our marking and signage products carry a written warranty — if it fades or fails, we fix it free of charge.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6 flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-dcs-red" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
