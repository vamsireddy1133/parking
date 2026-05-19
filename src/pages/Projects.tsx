import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Building2, Home, Heart, GraduationCap, UtensilsCrossed } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

type Category = 'All' | 'Commercial' | 'Residential' | 'Healthcare' | 'Hospitality' | 'Education'

interface ClientGroup {
  id: string
  name: string
  category: Category
  projects: string[]
}

const clients: ClientGroup[] = [
  {
    id: 'salarpuria',
    name: 'Salarpuria Satva',
    category: 'Commercial',
    projects: [
      'Salarpuria Satva Knowledge Park',
      'Salarpuria Satva Knowledge Capital',
      'Salarpuria Satva Knowledge City',
      'Salarpuria Satva Necklace Pride Mall',
      'Salarpuria Satva Signature Tower',
      'Salarpuria Satva Magnus',
    ],
  },
  {
    id: 'myhome',
    name: 'MyHome',
    category: 'Residential',
    projects: [
      'MyHome Bhooja',
      'MyHome Twitza',
      'MyHome Tarkshya',
      'MyHome Tridasa',
      'MyHome Skyview',
      'MyHome Mangala',
      'MyHome Ankura',
      'MyHome Raka',
      'MyHome Nishida',
    ],
  },
  {
    id: 'phoenix',
    name: 'Phoenix Group',
    category: 'Commercial',
    projects: [
      'Phoenix Centarus',
      'Phoenix Litho',
      'Phoenix Aquila',
      'Phoenix Ivy',
      'Phoenix H10',
    ],
  },
  {
    id: 'rajapushpa',
    name: 'Rajapushpa',
    category: 'Residential',
    projects: [
      'Rajapushpa Summit',
      'Rajapushpa Paradium',
      'Rajapushpa Provencia',
    ],
  },
  {
    id: 'smr',
    name: 'SMR',
    category: 'Residential',
    projects: [
      'SMR Casa Carino Villas',
      'SMR Iconia',
    ],
  },
  {
    id: 'aurobindo',
    name: 'Aurobindo',
    category: 'Residential',
    projects: [
      'Aurobindo Galaxy',
      'Aurobindo Orbit',
    ],
  },
  {
    id: 'asbl',
    name: 'ASBL',
    category: 'Residential',
    projects: [
      'ASBL Lakeside',
      'ASBL Spire',
    ],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    category: 'Commercial',
    projects: ['Amazon Hyderabad Campus'],
  },
  {
    id: 'google',
    name: 'Google',
    category: 'Commercial',
    projects: ['Google Hyderabad Office'],
  },
  {
    id: 'raheja',
    name: 'Raheja Mindspace',
    category: 'Commercial',
    projects: ['Raheja Mindspace IT Park'],
  },
  {
    id: 'capitaland',
    name: 'Capitaland',
    category: 'Commercial',
    projects: ['Capitaland'],
  },
  {
    id: 'jpmc',
    name: 'JPMC',
    category: 'Commercial',
    projects: ['JPMC'],
  },
  {
    id: 'pranava',
    name: 'Pranava Group',
    category: 'Commercial',
    projects: ['Pranava Group'],
  },
  {
    id: 'gsquare',
    name: 'GSquare',
    category: 'Commercial',
    projects: ['GSquare'],
  },
  {
    id: 'simplywork',
    name: 'Simply Work',
    category: 'Commercial',
    projects: ['Simply Work'],
  },
  {
    id: 'kurnool',
    name: 'Kurnool TG Mall',
    category: 'Commercial',
    projects: ['Kurnool TG Mall'],
  },
  {
    id: 'sriaditya',
    name: 'Sri Aditya',
    category: 'Residential',
    projects: ['Sri Aditya'],
  },
  {
    id: 'hrmani',
    name: 'Hrmani',
    category: 'Residential',
    projects: ['Hrmani'],
  },
  {
    id: 'sindhu',
    name: 'Sindhu Hospitals',
    category: 'Healthcare',
    projects: ['Sindhu Hospitals'],
  },
  {
    id: 'jubilee',
    name: 'Jubilee Hills Club',
    category: 'Hospitality',
    projects: ['Jubilee Hills Club'],
  },
  {
    id: 'filmnagar',
    name: 'Filmnagar Club',
    category: 'Hospitality',
    projects: ['Filmnagar Club'],
  },
  {
    id: 'meru',
    name: 'Meru International School',
    category: 'Education',
    projects: ['Meru International School'],
  },
]

const categories: Category[] = ['All', 'Commercial', 'Residential', 'Healthcare', 'Hospitality', 'Education']

const categoryStyle: Record<Category, { badge: string; icon: React.ElementType; accent: string; grad: string }> = {
  All:         { badge: '', icon: Building2, accent: 'text-gray-300', grad: 'from-gray-800/60 to-dcs-navy' },
  Commercial:  { badge: 'bg-blue-500/15 text-blue-300 border-blue-500/30',    icon: Building2,        accent: 'text-blue-300',   grad: 'from-blue-900/50 to-dcs-navy' },
  Residential: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', icon: Home,        accent: 'text-emerald-300', grad: 'from-emerald-900/50 to-dcs-navy' },
  Healthcare:  { badge: 'bg-red-500/15 text-red-300 border-red-500/30',       icon: Heart,            accent: 'text-red-300',    grad: 'from-red-900/50 to-dcs-navy' },
  Hospitality: { badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30', icon: UtensilsCrossed,  accent: 'text-amber-300',  grad: 'from-amber-900/50 to-dcs-navy' },
  Education:   { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', icon: GraduationCap, accent: 'text-purple-300', grad: 'from-purple-900/50 to-dcs-navy' },
}

export default function Projects() {
  const [active, setActive] = useState<Category>('All')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = active === 'All' ? clients : clients.filter((c) => c.category === active)

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id))

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
            Our Clients
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            500+ Clients.<br />
            <span className="text-dcs-red">One Standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            Every brand below trusted us with their parking infrastructure. Click any card to see the projects we delivered for them.
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
                onClick={() => { setActive(cat); setExpanded(null) }}
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

      {/* ── Client Cards ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((client, i) => {
                const style = categoryStyle[client.category]
                const Icon = style.icon
                const isOpen = expanded === client.id

                return (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    className={`rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                      isOpen
                        ? 'border-dcs-red/50 shadow-lg shadow-dcs-red/10'
                        : 'border-white/8 hover:border-white/20'
                    } bg-dcs-navy-light`}
                    onClick={() => toggle(client.id)}
                  >
                    {/* Card header */}
                    <div className={`bg-gradient-to-br ${style.grad} p-5`}>
                      <div className="flex items-center justify-between">
                        <div className={`w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center`}>
                          <Icon size={18} className={style.accent} />
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="font-outfit font-bold text-lg text-white leading-tight">{client.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className={`text-xs font-inter font-semibold px-2.5 py-1 rounded-full border ${style.badge}`}>
                            {client.category}
                          </span>
                          <span className="text-gray-500 font-inter text-xs">
                            {client.projects.length} {client.projects.length === 1 ? 'project' : 'projects'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded project list */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 py-4 border-t border-white/8">
                            <p className="text-gray-500 font-inter text-xs uppercase tracking-wider mb-3">Projects</p>
                            <ul className="space-y-2">
                              {client.projects.map((proj) => (
                                <li key={proj} className="flex items-start space-x-2.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-dcs-red mt-1.5 shrink-0" />
                                  <span className="text-gray-300 font-inter text-sm leading-snug">{proj}</span>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="bg-dcs-navy border-y border-white/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '1,000+', label: 'Projects Delivered' },
              { val: '500+',   label: 'Clients Served' },
              { val: '10+',    label: 'Years Experience' },
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
