import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { clients, categoryStyle } from '../data/clients'
import type { Category } from '../data/clients'

type Filter = 'All' | Category

const filters: Filter[] = ['All', 'Commercial', 'Residential', 'Healthcare', 'Hospitality', 'Education']

export default function Projects() {
  const [active, setActive] = useState<Filter>('All')

  const filtered = active === 'All' ? clients : clients.filter((c) => c.category === active)

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
            {filters.map((cat) => (
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((client, i) => {
                const style = categoryStyle[client.category]
                const Icon = style.icon

                return (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                  >
                    <Link
                      to={`/clients/${client.id}`}
                      className="flex flex-col bg-dcs-navy-light border border-white/8 hover:border-dcs-red/50 hover:shadow-lg hover:shadow-dcs-red/10 rounded-2xl overflow-hidden transition-all duration-300 group"
                    >
                      {/* Top: Image */}
                      <div className="h-48 w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-dcs-navy-light via-transparent to-transparent z-10 opacity-90" />
                        <img 
                          src={client.image || `/projects/${client.category.toLowerCase()}1.jpg`} 
                          alt={client.name}
                          onError={(e) => {
                            e.currentTarget.src = `/projects/${client.category.toLowerCase()}1.jpg`;
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 z-20">
                          <span className={`text-xs font-inter font-bold px-2.5 py-1 rounded-full border bg-black/50 backdrop-blur-md ${style.badge}`}>
                            {client.category}
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Content */}
                      <div className="p-5 flex items-center justify-between relative z-20">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.grad} border border-white/10 flex items-center justify-center shrink-0`}>
                            <Icon size={18} className={style.accent} />
                          </div>
                          <div>
                            <h3 className="font-outfit font-bold text-lg text-white leading-tight">
                              {client.name}
                            </h3>
                            <p className="text-gray-400 font-inter text-xs mt-1">
                              {client.projects.length} {client.projects.length === 1 ? 'project' : 'projects'}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="text-gray-500 group-hover:text-dcs-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                        />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Stats ── */}
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
