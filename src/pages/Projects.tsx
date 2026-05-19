import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
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
  badge: string
  image: string
  imageAlt: string
}

const projects: Project[] = [
  {
    title: 'Salarpuria Satva Knowledge Park',
    location: 'HITEC City, Hyderabad',
    category: 'Commercial',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '650',
    year: '2024',
    desc: 'Multi-level basement parking with epoxy slot markings, column numbering, retroreflective signage, and traffic flow design for one of Hyderabad\'s premier tech parks.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    image: '/p1.png',
    imageAlt: 'Salarpuria Satva Knowledge Park parking facility',
  },
  {
    title: 'MyHome Bhooja',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Layout Design', 'BMS Software'],
    bays: '900',
    year: '2024',
    desc: 'Premium residential tower with colour-coded zone markings per block, visitor bay management, pillar number system, and smart parking allocation.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    image: '/p2.png',
    imageAlt: 'MyHome Bhooja parking',
  },
  {
    title: 'Phoenix Centarus',
    location: 'Neopolis, Hyderabad',
    category: 'Commercial',
    services: ['Parking Markings', 'Signage Boards', 'BMS Software'],
    bays: '1200',
    year: '2023',
    desc: 'End-to-end parking solution with epoxy markings, LED wayfinding signage, EV charging bay demarcation, and FASTag-integrated billing system.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    image: '/p3.png',
    imageAlt: 'Phoenix Centarus parking',
  },
  {
    title: 'Amazon Hyderabad Campus',
    location: 'Nanakramguda, Hyderabad',
    category: 'Commercial',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '800',
    year: '2023',
    desc: 'Corporate campus with precision epoxy markings, statutory safety signage, disabled bay compliance, dedicated two-wheeler zones, and column guard installation.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    image: '/p4.png',
    imageAlt: 'Amazon Hyderabad Campus parking',
  },
  {
    title: 'Sindhu Hospitals',
    location: 'Kukatpally, Hyderabad',
    category: 'Healthcare',
    services: ['Layout Design', 'Signage Boards', 'BMS Software'],
    bays: '320',
    year: '2023',
    desc: 'Hospital campus parking with dedicated ambulance corridors, priority bays for patients and disabled visitors, visitor time-based billing, and 24/7 occupancy monitoring.',
    badge: 'bg-red-500/20 text-red-300 border-red-500/20',
    image: '/p5.png',
    imageAlt: 'Sindhu Hospitals parking',
  },
  {
    title: 'Raheja Mindspace',
    location: 'HITEC City, Hyderabad',
    category: 'Commercial',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '1100',
    year: '2023',
    desc: 'Complete basement and surface parking overhaul for one of Hyderabad\'s largest IT parks, delivering 30% more bay capacity with optimised traffic flow redesign.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    image: '/p6.png',
    imageAlt: 'Raheja Mindspace parking',
  },
  {
    title: 'ASBL Spire',
    location: 'Financial District, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Signage Boards'],
    bays: '450',
    year: '2022',
    desc: 'Premium high-rise residential tower with floor-wise colour-coded markings, pillar numbering, visitor management zones, and anti-skid epoxy at pedestrian crossings.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    image: '/p7.png',
    imageAlt: 'ASBL Spire parking',
  },
  {
    title: 'Aurobindo Galaxy',
    location: 'Miyapur, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '560',
    year: '2022',
    desc: 'Gated community parking solution with tower-wise colour coding, two-wheeler bay demarcation, visitor stacking lanes, and reflective wayfinding signage throughout.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    image: '/p8.png',
    imageAlt: 'Aurobindo Galaxy parking',
  },
  {
    title: 'Rajapushpa Summit',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Layout Design', 'BMS Software'],
    bays: '700',
    year: '2021',
    desc: 'Luxury residential complex with ANPR boom barrier at entry/exit, resident digital passes, smart parking integration, and real-time bay occupancy display.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    image: '/p9.png',
    imageAlt: 'Rajapushpa Summit parking',
  },
]

const categories: Category[] = ['All', 'Commercial', 'Residential', 'Healthcare']

export default function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

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
            className="inline-flex items-center bg-dcs-red/10 border border-dcs-red/25 text-dcs-red text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
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
            Explore a selection of our completed projects across commercial, industrial, residential,
            healthcare, and government sectors.
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group glow-hover"
                >
                  {/* Project Image */}
                  <div className="h-52 relative overflow-hidden bg-dcs-navy">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    {/* Dark overlay for badge readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className={`text-xs font-inter font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${p.badge}`}>
                        {p.category}
                      </span>
                      <span className="text-white/70 font-inter text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{p.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-dcs-navy-light p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-outfit font-bold text-lg text-white leading-tight">{p.title}</h3>
                      <span className="text-dcs-red font-outfit font-black text-sm whitespace-nowrap">{p.bays} bays</span>
                    </div>
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
              { val: '15+',    label: 'Cities Across South India' },
              { val: '5',      label: 'Sectors Served' },
              { val: '100%',   label: 'On-Time Delivery Rate' },
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
