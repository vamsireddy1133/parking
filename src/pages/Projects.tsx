import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Car, ArrowRight, MapPin } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

type Category = 'All' | 'Commercial' | 'Industrial' | 'Residential' | 'Healthcare' | 'Government'

interface Project {
  title: string
  location: string
  category: Category
  services: string[]
  bays: string
  year: string
  desc: string
  badge: string
  gradient: string
  imageAlt: string
}

const projects: Project[] = [
  {
    title: 'Prestige Tech Park',
    location: 'Gachibowli, Hyderabad',
    category: 'Commercial',
    services: ['Parking Markings', 'Layout Design', 'BMS Software'],
    bays: '840',
    year: '2024',
    desc: 'Multi-level parking structure across three basement floors. Full epoxy marking, reflective bay numbering, and live ParkOS BMS dashboard with ANPR entry gates.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    gradient: 'from-blue-900/40 to-slate-900',
    imageAlt: 'Aerial view of a modern multi-storey parking structure at a glass-facade tech park, with brightly marked bays and directional signage',
  },
  {
    title: 'Hetero Pharma GMP Plant',
    location: 'Jeedimetla, Hyderabad',
    category: 'Industrial',
    services: ['Parking Markings', 'Signage Boards'],
    bays: '320',
    year: '2024',
    desc: 'HFL-rated reflective zone markings for heavy vehicle lanes, chemical storage demarcation, and full statutory safety signage across a 12-acre GMP manufacturing campus.',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    gradient: 'from-orange-900/40 to-slate-900',
    imageAlt: 'Industrial parking lot with high-visibility yellow and white epoxy markings, heavy vehicle lanes, and safety signage at a pharmaceutical plant',
  },
  {
    title: 'My Home Jewel Residences',
    location: 'Kokapet, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Layout Design', 'BMS Software'],
    bays: '1200',
    year: '2023',
    desc: 'Premium residential tower with color-coded zone markings per tower block, visitor bay management, pillar number system, and resident app-based parking allocation.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    gradient: 'from-emerald-900/40 to-slate-900',
    imageAlt: 'Clean basement parking of a luxury residential complex with color-coded bay markings and illuminated pillar numbering',
  },
  {
    title: 'Phoenix MarketCity Mall',
    location: 'Whitefield, Bengaluru',
    category: 'Commercial',
    services: ['Parking Markings', 'Signage Boards', 'BMS Software'],
    bays: '1600',
    year: '2023',
    desc: 'End-to-end parking solution for one of Bengaluru\'s largest retail destinations. Includes EV charging bay marking, dynamic LED wayfinding totems, and FASTag-integrated billing.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    gradient: 'from-purple-900/40 to-slate-900',
    imageAlt: 'Busy retail mall parking structure with bright LED wayfinding signage and EV charging marked bays',
  },
  {
    title: 'Apollo Hospitals Campus',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Healthcare',
    services: ['Layout Design', 'Signage Boards', 'BMS Software'],
    bays: '450',
    year: '2023',
    desc: 'Specialised hospital campus layout with dedicated ambulance corridors, priority parking for patients and disabled visitors, visitor time-based billing, and 24/7 occupancy monitoring.',
    badge: 'bg-red-500/20 text-red-300 border-red-500/20',
    gradient: 'from-red-900/30 to-slate-900',
    imageAlt: 'Hospital campus parking with clearly marked ambulance bays, disabled priority parking, and bright directional signage',
  },
  {
    title: 'GHMC Municipal Complex',
    location: 'Secunderabad, Hyderabad',
    category: 'Government',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '280',
    year: '2022',
    desc: 'Complete redesign and marking of the Greater Hyderabad Municipal Corporation staff and visitor car park, delivering 35% more bays through optimised layout and two-way flow redesign.',
    badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/20',
    gradient: 'from-yellow-900/30 to-slate-900',
    imageAlt: 'Government building parking area with neatly organised bays, statutory signage, and clear directional markings',
  },
  {
    title: 'Birla Open Minds School',
    location: 'Nizampet, Hyderabad',
    category: 'Residential',
    services: ['Parking Markings', 'Signage Boards'],
    bays: '180',
    year: '2022',
    desc: 'Safe school drop-off and parking zone design with parent vehicle stacking lanes, bus bay demarcation, and anti-skid epoxy in pedestrian crossing areas.',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
    gradient: 'from-teal-900/40 to-slate-900',
    imageAlt: 'School entrance parking with child-safe coloured markings, parent drop-off zones, and clear bus bay signage',
  },
  {
    title: 'BHEL Heavy Engineering Plant',
    location: 'Ramachandrapuram, Hyderabad',
    category: 'Industrial',
    services: ['Parking Markings', 'Layout Design', 'Signage Boards'],
    bays: '600',
    year: '2022',
    desc: 'Heavy industry campus covering crane travel paths, restricted zone demarcation, fire hydrant clearance markings, and high-load-rated epoxy for forklift traffic zones.',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/20',
    gradient: 'from-amber-900/40 to-slate-900',
    imageAlt: 'Large industrial plant parking with heavy machinery zone markings, yellow safety lines, and forklift crossing signs',
  },
  {
    title: 'Marriott Hyderabad',
    location: 'Begumpet, Hyderabad',
    category: 'Commercial',
    services: ['Layout Design', 'Signage Boards', 'BMS Software'],
    bays: '220',
    year: '2021',
    desc: 'Luxury hotel valet and self-parking integration with brand-consistent signage in brushed stainless steel, ANPR valet ticketing, and live dashboard for concierge staff.',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/20',
    gradient: 'from-indigo-900/40 to-slate-900',
    imageAlt: 'Upscale hotel basement parking with brushed steel directional signage and premium bay markings in pristine condition',
  },
]

const categories: Category[] = ['All', 'Commercial', 'Industrial', 'Residential', 'Healthcare', 'Government']

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
                  {/* Image / Visual */}
                  <div className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-end p-4 overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <Car size={72} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative flex items-center justify-between w-full">
                      <span className={`text-xs font-inter font-semibold px-3 py-1 rounded-full border ${p.badge}`}>
                        {p.category}
                      </span>
                      <span className="text-gray-500 font-inter text-xs">{p.year}</span>
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
