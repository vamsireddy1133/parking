import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react'
import { clients, categoryStyle } from '../data/clients'

export default function ClientDetail() {
  const { id } = useParams<{ id: string }>()
  const client = clients.find((c) => c.id === id)

  if (!client) return <Navigate to="/clients" replace />

  const style = categoryStyle[client.category]
  const Icon = style.icon

  return (
    <div className="bg-dcs-navy-dark min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className={`absolute top-0 right-1/4 w-[500px] h-[350px] ${style.bg} rounded-full blur-[120px] opacity-40`} />

        <div className="relative max-w-5xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white font-inter text-sm transition-colors mb-10 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Clients</span>
            </Link>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${style.grad} border border-white/10 flex items-center justify-center shrink-0`}
            >
              <Icon size={36} className={style.accent} />
            </motion.div>

            {/* Name + meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={`inline-flex text-xs font-inter font-semibold px-3 py-1 rounded-full border mb-3 ${style.badge}`}>
                {client.category}
              </span>
              <h1 className="font-outfit font-black text-4xl sm:text-5xl text-white leading-tight">
                {client.name}
              </h1>
              <p className="text-gray-400 font-inter text-lg mt-2">
                {client.projects.length} {client.projects.length === 1 ? 'project' : 'projects'} completed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-500 font-inter text-xs uppercase tracking-widest mb-8"
          >
            Projects
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {client.projects.map((proj, i) => (
              <motion.div
                key={proj}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                {/* Coloured top strip */}
                <div className={`bg-gradient-to-r ${style.grad} h-1.5`} />

                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl ${style.bg} border border-white/10 flex items-center justify-center mb-4`}>
                    <Building2 size={18} className={style.accent} />
                  </div>
                  <h3 className="font-outfit font-bold text-white text-base leading-snug">
                    {proj}
                  </h3>
                  <p className="text-gray-500 font-inter text-xs mt-1">Hyderabad</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-dcs-navy border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-outfit font-black text-3xl text-white mb-3">
            Planning a New Facility?
          </h2>
          <p className="text-gray-400 font-inter mb-8">
            Talk to us about your parking infrastructure requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-8 py-3.5 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-dcs-red/30"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center space-x-2 border border-white/20 hover:border-white/40 px-8 py-3.5 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:bg-white/5"
            >
              <ArrowLeft size={16} />
              <span>All Clients</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
