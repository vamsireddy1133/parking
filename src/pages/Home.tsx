import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, ChevronDown, Star, PenTool,
  Building2, Monitor, CheckCircle, Quote, Car,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

/* ── Floating hero particles ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: [3, 4, 2, 5, 3, 4, 2, 3, 5, 2, 4, 3, 2, 4, 3, 5, 2, 3][i],
  x: [8, 18, 30, 42, 55, 65, 75, 85, 92, 12, 25, 38, 50, 62, 72, 82, 90, 5][i],
  y: [15, 70, 30, 80, 20, 60, 40, 75, 25, 45, 85, 55, 10, 65, 35, 50, 80, 90][i],
  dur: [12, 16, 10, 18, 14, 11, 15, 13, 17, 12, 16, 10, 14, 18, 11, 15, 13, 9][i],
  del: [0, 2, 4, 1, 3, 5, 0, 2, 4, 1, 3, 5, 0, 2, 4, 1, 3, 5][i],
}))

/* ── Animated counter ── */
function useCounter(target: number) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = target / 60
    const id = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(id) }
      else setCount(Math.floor(current))
    }, 24)
    return () => clearInterval(id)
  }, [inView, target])

  return { count, ref }
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value)
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-outfit font-black text-white">
        {count}<span className="text-dcs-red">{suffix}</span>
      </p>
      <p className="text-gray-400 font-inter text-sm mt-2 uppercase tracking-wider">{label}</p>
    </div>
  )
}

/* ── Data ── */
const services = [
  {
    icon: Car,
    title: 'Parking Markings',
    desc: 'High-durability epoxy and thermoplastic markings engineered for maximum visibility and longevity across all weather conditions.',
    gradient: 'from-red-500/20 to-transparent',
  },
  {
    icon: PenTool,
    title: 'Layout Design',
    desc: 'CAD-precision parking layout planning that maximises bay capacity, ensures smooth traffic flow, and meets all local safety codes.',
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    icon: Building2,
    title: 'Signage Boards',
    desc: 'Custom reflective and LED signage for navigation, safety compliance, and brand-consistent wayfinding across your entire facility.',
    gradient: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: Monitor,
    title: 'BMS Software',
    desc: 'Integrated Building Management System with real-time occupancy analytics, ANPR camera integration, and automated revenue reporting.',
    gradient: 'from-violet-500/20 to-transparent',
  },
]

const projects = [
  {
    title: 'Salarpuria Satva Knowledge Park',
    category: 'Commercial',
    description: 'Multi-level basement parking with epoxy slot markings, column numbering, retroreflective signage, and traffic flow design.',
    badge: 'bg-blue-500/20 text-blue-300',
    image: '/p1.png',
  },
  {
    title: 'MyHome Bhooja',
    category: 'Residential',
    description: 'Premium residential tower with colour-coded zone markings, pillar numbering, visitor bay management, and smart parking allocation.',
    badge: 'bg-emerald-500/20 text-emerald-300',
    image: '/p2.png',
  },
  {
    title: 'Phoenix Centarus',
    category: 'Commercial',
    description: 'End-to-end parking solution with epoxy markings, LED wayfinding signage, EV charging bays, and FASTag-integrated billing.',
    badge: 'bg-blue-500/20 text-blue-300',
    image: '/p3.png',
  },
]

const testimonials = [
  {
    name: 'Facilities Manager',
    role: 'Salarpuria Satva Knowledge Park',
    text: 'DCS transformed our parking facility completely. The epoxy markings and signage are top quality and the team delivered on time without any issues.',
    avatar: '/testimonial-1.jpg',
  },
  {
    name: 'Project Head',
    role: 'MyHome Bhooja, Kokapet',
    text: 'The colour-coded zone system and pillar numbering have eliminated parking confusion for our residents entirely. Professional team, excellent output.',
    avatar: '/testimonial-2.jpg',
  },
]

/* ── Page ── */
export default function Home() {
  return (
    <div className="bg-dcs-navy-dark">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/hero.jpg" alt="DCS Parking Solutions" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-dcs-navy-dark/75" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dcs-red/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dcs-navy-dark to-transparent" />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-dcs-red/25 pointer-events-none"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.dur, delay: p.del, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 relative"
          >
            <Star size={13} className="text-dcs-red fill-dcs-red" />
            <span className="text-xs font-inter text-gray-300 tracking-wide">South India's #1 Parking Solutions Provider</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl md:text-7xl text-white leading-[1.08] mb-6"
          >
            Expert<br />
            <span className="text-dcs-red">Parking</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto font-inter text-lg text-gray-400 mb-10 leading-relaxed"
          >
            From precision epoxy markings and intelligent layout design to advanced BMS software —
            DCS Parking Solutions delivers end-to-end parking infrastructure across South India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/services"
              className="flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-8 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30 hover:-translate-y-0.5"
            >
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/clients"
              className="flex items-center space-x-2 border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:bg-white/5"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown size={22} className="text-gray-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-dcs-navy py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard value={500}  suffix="+"  label="Clients Served" />
            <StatCard value={1000} suffix="+"  label="Projects Completed" />
            <StatCard value={8}    suffix="+"  label="Years of Excellence" />
            <StatCard value={15}   suffix="+"  label="Cities Covered" />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="What We Offer"
            title="Comprehensive Parking Solutions"
            subtitle="We combine technical expertise with industry-leading materials to deliver parking infrastructure that stands the test of time."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all duration-300 group cursor-default glow-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-1 text-dcs-red text-sm font-inter font-medium hover:space-x-2 transition-all group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DCS ── */}
      <section className="bg-dcs-navy py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader
                badge="Why Choose DCS"
                title="Engineered for Performance. Built to Last."
                subtitle="Our solutions meet IS:1580 standards and are designed for the demanding conditions of South Indian climates — scorching summers, monsoon rains, and heavy traffic loads."
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {[
                  'IS-certified epoxy and thermoplastic materials with 5-year performance warranty',
                  'In-house CAD team for accurate, code-compliant layout design',
                  '48-hour emergency re-marking and signage replacement service',
                  'Dedicated project manager assigned to every client account',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle size={18} className="text-dcs-red mt-0.5 shrink-0" />
                    <span className="text-gray-300 font-inter text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 mt-8 border border-white/20 hover:border-dcs-red hover:text-dcs-red px-6 py-3 rounded-xl font-inter font-semibold text-white text-sm transition-all duration-300"
              >
                <span>Our Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Epoxy Marking', sub: 'IS:1580 certified, 5-yr warranty' },
                { label: 'Thermoplastic', sub: 'Hot-applied, retroreflective' },
                { label: 'CAD Layout', sub: 'AutoCAD precision, variance <1%' },
                { label: 'LED Signage', sub: 'IP65-rated, solar options' },
              ].map((item, i) => (
                <div key={item.label} className={`bg-dcs-navy-light border border-white/8 rounded-2xl p-5 ${i === 0 ? 'col-span-2' : ''}`}>
                  <p className="font-outfit font-bold text-white mb-1">{item.label}</p>
                  <p className="text-gray-400 font-inter text-xs">{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Work"
            title="Featured Projects"
            subtitle="From sprawling industrial complexes to upscale residential towers, our work defines parking excellence."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group glow-hover"
              >
                <div className="h-44 bg-gradient-to-br from-dcs-navy to-dcs-navy-dark relative flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <Car size={48} className="text-white/10 mb-3" />
                  <span className={`relative text-xs font-inter font-semibold px-3 py-1 rounded-full border ${p.badge}`}>
                    {p.category}
                  </span>
                </div>
                <div className="bg-dcs-navy-light p-6">
                  <h3 className="font-outfit font-bold text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 border border-white/20 hover:border-dcs-red hover:text-dcs-red px-8 py-3 rounded-xl font-inter font-semibold text-white text-sm transition-all duration-300"
            >
              <span>View All Clients</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-dcs-navy py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <SectionHeader badge="Client Voices" title="Trusted by Industry Leaders" subtitle="Hear what our clients say about working with DCS Parking Solutions." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-8 relative"
              >
                <Quote size={32} className="text-dcs-red/30 mb-4" />
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                  <div>
                    <p className="font-outfit font-bold text-white text-sm">{t.name}</p>
                    <p className="text-gray-500 font-inter text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dcs-navy-light to-dcs-navy rounded-3xl p-12 sm:p-16 border border-white/10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-dcs-red/4 rounded-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-dcs-red/8 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="font-outfit font-black text-4xl sm:text-5xl text-white mb-4 leading-tight">
                Ready to Transform<br />Your Parking?
              </h2>
              <p className="font-inter text-gray-400 text-lg mb-10">
                Get a free site assessment and customised quote within 24 hours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-10 py-4 rounded-xl font-inter font-semibold text-white text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30 hover:-translate-y-0.5"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
