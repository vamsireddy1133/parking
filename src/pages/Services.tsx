import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Car, PenTool, Building2, Monitor,
  CheckCircle, ArrowRight, Layers, Zap, Shield, BarChart3,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

const services = [
  {
    icon: Car,
    color: 'from-red-500/20 to-transparent',
    iconColor: 'text-red-400',
    title: 'Parking Markings',
    tagline: 'Precision. Durability. Compliance.',
    description:
      'Our marking division delivers IS:1580-certified epoxy and hot-applied thermoplastic systems engineered to withstand the combined stress of high traffic volumes, tropical heat, and monsoon flooding. We handle every scale — from 20-bay apartment blocks to 2,000-bay airport terminals.',
    benefits: [
      'Solvent-based and water-based epoxy options for indoor and outdoor use',
      'Hot-applied thermoplastic for arterial roads and high-speed zones',
      'Retroreflective glass bead embedding for night-time visibility (SQI ≥ 150 mcd/lux/m²)',
      'Disabled (PwD) bay and loading zone compliance as per NBC 2016',
      'Fire lane and no-parking zone demarcation with statutory color codes',
      '5-year performance warranty with annual inspection service',
    ],
    imageAlt: 'Aerial view of a perfectly marked modern commercial parking lot with bright epoxy yellow and white bay lines, shot at dawn from directly above',
  },
  {
    icon: PenTool,
    color: 'from-blue-500/20 to-transparent',
    iconColor: 'text-blue-400',
    title: 'Parking Layout Design',
    tagline: 'Space Maximised. Flow Optimised.',
    description:
      'Our CAD-certified design team converts underperforming surface areas into efficient, revenue-generating parking assets. Using AutoCAD and BIM modelling, we deliver layouts that balance maximum bay count with smooth traffic circulation — reducing conflict points and ingress/egress time by up to 40%.',
    benefits: [
      'Full AutoCAD and Revit BIM model delivery (DWG, PDF, IFC formats)',
      'Traffic flow simulation with pedestrian safety envelope analysis',
      'Space optimisation — average 18% capacity increase over legacy layouts',
      'Gradient and drainage compliance per NBC and local municipal codes',
      'EV charging bay integration with cable route planning',
      'Phased construction drawing sets for staged development projects',
    ],
    imageAlt: 'Clean top-down CAD wireframe of a multi-level parking layout on a dark navy background, showing bay dimensions, traffic arrows, and zone color coding',
  },
  {
    icon: Building2,
    color: 'from-emerald-500/20 to-transparent',
    iconColor: 'text-emerald-400',
    title: 'Signage Boards',
    tagline: 'Navigate. Comply. Brand.',
    description:
      'Effective parking signage is the final mile of the user experience. Our signage division designs, fabricates, and installs the full spectrum — from IP65-rated LED directional totems to statutory safety boards — using UV-stable substrates and retroreflective sheeting that retain legibility for a decade in South Indian sun.',
    benefits: [
      'Directional wayfinding totems in aluminium composite and stainless steel',
      'Overhead entry/exit height restriction bars with LED illumination',
      'Rate boards with modular face panels for easy tariff updates',
      'Statutory signage: fire points, emergency evacuation, PwD routes',
      'Custom branded fascia boards with pantone-matched digital printing',
      'Fluorescent and solar-powered options for basement and open-air sites',
    ],
    imageAlt: 'Modern parking facility entrance with illuminated LED "P" totem sign, reflective directional arrows, and branded fascia boards at dusk',
  },
  {
    icon: Monitor,
    color: 'from-violet-500/20 to-transparent',
    iconColor: 'text-violet-400',
    title: 'BMS Management Software',
    tagline: 'Data-Driven. Cloud-Ready. Scalable.',
    description:
      'Our proprietary DCS ParkOS platform brings enterprise-grade intelligence to any parking facility. From ANPR camera integration and real-time occupancy heatmaps to automated invoicing and tenant portal access — ParkOS replaces manual processes, eliminates revenue leakage, and delivers ROI within the first operating year.',
    benefits: [
      'Real-time occupancy dashboard with bay-level sensor integration',
      'ANPR (Automatic Number Plate Recognition) for frictionless entry/exit',
      'Multi-tier tariff engine: hourly, monthly, event, and grace-period rules',
      'WhatsApp and SMS automated billing and receipt delivery',
      'Tenant and visitor self-registration portal with digital passes',
      'Cloud-hosted with 99.9% SLA; Android and iOS management apps',
    ],
    imageAlt: 'Modern parking management software dashboard on dual monitors showing real-time bay occupancy heatmap, revenue graphs, and ANPR camera feeds',
  },
]

const process = [
  { step: '01', icon: Layers,   title: 'Site Assessment',  desc: 'Our engineers conduct a full dimensional survey and traffic-count study of your site within 48 hours of enquiry.' },
  { step: '02', icon: PenTool,  title: 'Design & Proposal', desc: 'We deliver a CAD layout, material specification sheet, and fixed-price quotation — no hidden costs, no approximations.' },
  { step: '03', icon: Zap,      title: 'Execution',         desc: 'A dedicated project manager oversees marking, signage, and software installation with daily progress updates.' },
  { step: '04', icon: Shield,   title: 'Handover & SLA',    desc: 'We issue a completion certificate, warranty documentation, and a 12-month maintenance SLA on all works.' },
]

export default function Services() {
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
            className="inline-flex items-center bg-dcs-red/10 border border-dcs-red/25 text-dcs-red text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
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
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/8 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text side */}
              <div className="bg-dcs-navy-light p-10 lg:p-14 flex flex-col justify-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} border border-white/10 flex items-center justify-center mb-6`}>
                  <s.icon size={26} className={s.iconColor} />
                </div>
                <p className="text-dcs-red font-inter text-xs font-semibold uppercase tracking-widest mb-2">{s.tagline}</p>
                <h2 className="font-outfit font-black text-3xl text-white mb-4">{s.title}</h2>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">{s.description}</p>
                <ul className="space-y-3">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start space-x-3">
                      <CheckCircle size={16} className="text-dcs-red mt-0.5 shrink-0" />
                      <span className="text-gray-300 font-inter text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 mt-8 bg-dcs-red hover:bg-dcs-red-dark px-6 py-3 rounded-xl font-inter font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:shadow-dcs-red/30 self-start"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Visual side */}
              <div className={`relative min-h-[320px] bg-gradient-to-br from-dcs-navy to-dcs-navy-dark flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 grid-bg opacity-60" />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-40`} />
                <s.icon size={140} className="relative text-white/5" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gray-500 font-inter text-xs italic leading-relaxed">
                    Image: {s.imageAlt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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

      {/* ── CTA ── */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dcs-navy-light to-dcs-navy rounded-3xl p-12 border border-white/10"
          >
            <h2 className="font-outfit font-black text-4xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 font-inter text-lg mb-8">
              Tell us about your project and we'll have a proposal on your desk within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-10 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30"
            >
              <span>Request a Free Quote</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
