import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Building2, Home, Heart, ChevronDown } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

type Category = 'All' | 'Commercial' | 'Residential' | 'Healthcare'

interface Project {
  title: string
  location: string
  category: Category
  services: string[]
  bays: string
  year: string
  desc: string
  accent: string
  headerBg: string
  icon: React.ElementType
}

const projects: Project[] = [
  {
    title: 'Salarpuria Satva Knowledge Park',
    location: 'HITEC City, Hyderabad',
    category: 'Commercial',
    services: ['Floor Marking', 'Layout Design', 'Sign Boards'],
    bays: '650',
    year: '2024',
    desc: 'Multi-level basement parking with epoxy slot markings, column numbering, retroreflective signage, and traffic flow design for one of Hyderabad\'s premier tech parks.',
    accent: 'text-blue-300',
    headerBg: 'from-blue-900/60 to-dcs-navy',
    icon: Building2,
  },
  {
    title: 'MyHome Bhooja',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    services: ['Floor Marking', 'Layout Design', 'Smart Parking'],
    bays: '900',
    year: '2024',
    desc: 'Premium residential tower with colour-coded zone markings per block, visitor bay management, pillar number system, and smart parking allocation.',
    accent: 'text-emerald-300',
    headerBg: 'from-emerald-900/60 to-dcs-navy',
    icon: Home,
  },
  {
    title: 'Phoenix Centarus',
    location: 'Neopolis, Hyderabad',
    category: 'Commercial',
    services: ['Floor Marking', 'Sign Boards', 'Smart Parking'],
    bays: '1,200',
    year: '2023',
    desc: 'End-to-end parking solution with epoxy markings, LED wayfinding signage, EV charging bay demarcation, and FASTag-integrated billing system.',
    accent: 'text-blue-300',
    headerBg: 'from-blue-900/60 to-dcs-navy',
    icon: Building2,
  },
  {
    title: 'Amazon Hyderabad Campus',
    location: 'Nanakramguda, Hyderabad',
    category: 'Commercial',
    services: ['Floor Marking', 'Layout Design', 'Sign Boards'],
    bays: '800',
    year: '2023',
    desc: 'Corporate campus with precision epoxy markings, statutory safety signage, disabled bay compliance, dedicated two-wheeler zones, and column guard installation.',
    accent: 'text-blue-300',
    headerBg: 'from-blue-900/60 to-dcs-navy',
    icon: Building2,
  },
  {
    title: 'Sindhu Hospitals',
    location: 'Kukatpally, Hyderabad',
    category: 'Healthcare',
    services: ['Layout Design', 'Sign Boards', 'Smart Parking'],
    bays: '320',
    year: '2023',
    desc: 'Hospital campus parking with dedicated ambulance corridors, priority bays for patients and disabled visitors, visitor time-based billing, and 24/7 occupancy monitoring.',
    accent: 'text-red-300',
    headerBg: 'from-red-900/60 to-dcs-navy',
    icon: Heart,
  },
  {
    title: 'Raheja Mindspace',
    location: 'HITEC City, Hyderabad',
    category: 'Commercial',
    services: ['Floor Marking', 'Layout Design', 'Sign Boards'],
    bays: '1,100',
    year: '2023',
    desc: 'Complete basement and surface parking overhaul for one of Hyderabad\'s largest IT parks, delivering 30% more bay capacity with optimised traffic flow redesign.',
    accent: 'text-blue-300',
    headerBg: 'from-blue-900/60 to-dcs-navy',
    icon: Building2,
  },
  {
    title: 'ASBL Spire',
    location: 'Financial District, Hyderabad',
    category: 'Residential',
    services: ['Floor Marking', 'Sign Boards'],
    bays: '450',
    year: '2022',
    desc: 'Premium high-rise residential tower with floor-wise colour-coded markings, pillar numbering, visitor management zones, and anti-skid epoxy at pedestrian crossings.',
    accent: 'text-emerald-300',
    headerBg: 'from-emerald-900/60 to-dcs-navy',
    icon: Home,
  },
  {
    title: 'Aurobindo Galaxy',
    location: 'Miyapur, Hyderabad',
    category: 'Residential',
    services: ['Floor Marking', 'Layout Design', 'Sign Boards'],
    bays: '560',
    year: '2022',
    desc: 'Gated community parking solution with tower-wise colour coding, two-wheeler bay demarcation, visitor stacking lanes, and reflective wayfinding signage throughout.',
    accent: 'text-emerald-300',
    headerBg: 'from-emerald-900/60 to-dcs-navy',
    icon: Home,
  },
  {
    title: 'Rajapushpa Summit',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    services: ['Floor Marking', 'Layout Design', 'Smart Parking'],
    bays: '700',
    year: '2021',
    desc: 'Luxury residential complex with ANPR boom barrier at entry/exit, resident digital passes, smart parking integration, and real-time bay occupancy display.',
    accent: 'text-emerald-300',
    headerBg: 'from-emerald-900/60 to-dcs-navy',
    icon: Home,
  },
]

const categories: Category[] = ['All', 'Commercial', 'Residential', 'Healthcare']

const categoryBadge: Record<Category, string> = {
  All: '',
  Commercial: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Residential: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Healthcare: 'bg-red-500/20 text-red-300 border-red-500/30',
}

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  const toggleExpand = (i: number) =>
    setExpandedIndex((prev) => (prev === i ? null : i))

  return (
    <div className="bg-dcs-navy-dark">

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-dcs-red/8 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center bg-white/5 border border-white/15 text-gray-400 text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
          >
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            1,000+ Projects.<br />
            <span className="text-dcs-red">One Standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            A selection of completed projects across commercial, residential, and healthcare sectors in Hyderabad.
          </motion.p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-inter font-medium text-sm transition-all duration-200 border ${
                  active === cat
                    ? 'bg-dcs-red border-dcs-red text-white shadow-lg shadow-dcs-red/30'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Grid ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* ── Mobile: accordion list ── */}
              <div className="md:hidden space-y-3">
                {filtered.map((p, i) => {
                  const isOpen = expandedIndex === i
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="rounded-2xl overflow-hidden border border-white/8 bg-dcs-navy-light"
                    >
                      {/* Compact row — always visible */}
                      <button
                        onClick={() => toggleExpand(i)}
                        className="w-full flex items-center justify-between px-4 py-4 text-left"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.headerBg} border border-white/10 flex items-center justify-center shrink-0`}>
                            <p.icon size={16} className={p.accent} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-outfit font-bold text-white text-sm leading-tight truncate">{p.title}</p>
                            <div className="flex items-center space-x-1 mt-0.5">
                              <MapPin size={10} className="text-gray-500 shrink-0" />
                              <span className="text-gray-500 font-inter text-xs truncate">{p.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 shrink-0 ml-2">
                          <span className={`text-xs font-inter font-semibold px-2 py-0.5 rounded-full border hidden sm:inline ${categoryBadge[p.category]}`}>
                            {p.category}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </button>

                      {/* Expanded details */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className={`bg-gradient-to-br ${p.headerBg} px-4 py-4 relative`}>
                              <div className="absolute inset-0 grid-bg opacity-20" />
                              <div className="relative flex items-center justify-between">
                                <span className={`text-xs font-inter font-semibold px-3 py-1 rounded-full border ${categoryBadge[p.category]}`}>
                                  {p.category}
                                </span>
                                <div className="text-right">
                                  <span className={`font-outfit font-black text-2xl ${p.accent}`}>{p.bays}</span>
                                  <span className="text-gray-400 font-inter text-xs ml-1">bays · {p.year}</span>
                                </div>
                              </div>
                            </div>
                            <div className="px-4 py-4 border-t border-white/5">
                              <p className="text-gray-400 font-inter text-sm leading-relaxed mb-3">{p.desc}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {p.services.map((svc) => (
                                  <span key={svc} className="text-xs font-inter text-gray-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                                    {svc}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>

              {/* ── Desktop: grid cards ── */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group glow-hover"
                  >
                    <div className={`bg-gradient-to-br ${p.headerBg} p-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="relative flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
                          <p.icon size={22} className={p.accent} />
                        </div>
                        <div className="text-right">
                          <p className={`font-outfit font-black text-3xl ${p.accent}`}>{p.bays}</p>
                          <p className="text-gray-400 font-inter text-xs uppercase tracking-wider">Bays</p>
                        </div>
                      </div>
                      <div className="relative mt-5 flex items-center justify-between">
                        <span className={`text-xs font-inter font-semibold px-3 py-1 rounded-full border ${categoryBadge[p.category]}`}>
                          {p.category}
                        </span>
                        <span className="text-gray-500 font-inter text-xs">{p.year}</span>
                      </div>
                    </div>
                    <div className="bg-dcs-navy-light p-6">
                      <h3 className="font-outfit font-bold text-lg text-white leading-tight mb-1">{p.title}</h3>
                      <div className="flex items-center space-x-1 mb-3">
                        <MapPin size={12} className="text-gray-500" />
                        <span className="text-gray-500 font-inter text-xs">{p.location}</span>
                      </div>
                      <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.services.map((svc) => (
                          <span key={svc} className="text-xs font-inter text-gray-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full">
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Clientele Banner ── */}
      <section className="bg-dcs-navy border-y border-white/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Clientele"
            title="Trusted by Leading Names"
            subtitle="From tech parks and residential towers to hospitals and corporate campuses — our clients include some of the most recognised names in Hyderabad."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              'Salarpuria Satva','MyHome Group','Phoenix Group','Amazon','Google',
              'Raheja Mindspace','ASBL','Aurobindo','Rajapushpa','Sindhu Hospitals',
              'Pranava Group','Capitaland','Jubilee Hills Club','JPMC','Gsquare',
              'SMR Group','Simply Work','Kurnool TG Mall','Sri Aditya','Filmnagar Club',
            ].map((client) => (
              <span
                key={client}
                className="bg-white/5 border border-white/10 text-gray-300 font-inter text-sm px-4 py-2 rounded-full hover:border-dcs-red/40 hover:text-white transition-all duration-200"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="bg-dcs-navy-dark py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '1,000+', label: 'Projects Delivered' },
              { val: '500+',   label: 'Clients Served' },
              { val: '7+',     label: 'Service Categories' },
              { val: '100%',   label: 'On-Time Delivery' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-outfit font-black text-4xl text-dcs-red">{stat.val}</p>
                <p className="text-gray-400 font-inter text-sm mt-2 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge="Your Project Next?"
            title="Let's Add Your Facility to This List"
            subtitle="Contact us for a free site visit and feasibility assessment."
          />
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 mt-8 bg-dcs-red hover:bg-dcs-red-dark px-10 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30"
          >
            <span>Start Your Project</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
