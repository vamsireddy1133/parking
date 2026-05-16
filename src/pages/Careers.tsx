import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, MapPin, Clock, Briefcase, Users, Zap, Heart, TrendingUp, X, CheckCircle,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'

interface Job {
  title: string
  department: string
  location: string
  type: string
  experience: string
  desc: string
  responsibilities: string[]
  requirements: string[]
}

const jobs: Job[] = [
  {
    title: 'Senior Project Manager',
    department: 'Operations',
    location: 'Hyderabad',
    type: 'Full-Time',
    experience: '5–8 years',
    desc: 'Lead end-to-end delivery of large-scale parking infrastructure projects across Hyderabad and the surrounding region, managing multi-disciplinary teams and client relationships.',
    responsibilities: [
      'Own the full project lifecycle from kick-off to handover for projects valued ₹50L–₹5Cr',
      'Coordinate marking crews, signage fabricators, and BMS deployment teams simultaneously',
      'Manage client communication and resolve on-site issues with minimal escalation',
      'Produce weekly progress reports and present at client steering committee meetings',
      'Ensure all deliverables meet IS standards and DCS quality benchmarks',
    ],
    requirements: [
      'B.E./B.Tech in Civil Engineering or Facilities Management (mandatory)',
      'PMP or PRINCE2 certification (preferred)',
      '5+ years managing infrastructure or civil works projects',
      'Proficiency in AutoCAD for drawing review (not design — review)',
      'Strong written and spoken English; Telugu or Kannada a plus',
    ],
  },
  {
    title: 'Site Engineer — Parking Markings',
    department: 'Field Operations',
    location: 'Hyderabad / Bengaluru',
    type: 'Full-Time',
    experience: '2–4 years',
    desc: 'Execute and supervise epoxy and thermoplastic parking marking works on commercial, industrial, and residential sites, ensuring quality, safety, and schedule adherence.',
    responsibilities: [
      'Supervise a crew of 4–8 marking technicians across active project sites',
      'Ensure surface preparation (shot-blasting, priming) meets IS:1580 specification',
      'Conduct pre- and post-marking quality checks using retroreflectometers and tapes',
      'Maintain daily site diaries and submit progress photographs by 6 PM each day',
      'Enforce PPE compliance and tool-box talk protocols before every shift',
    ],
    requirements: [
      'Diploma or B.E. in Civil Engineering',
      '2+ years of site execution experience in road marking or civil works',
      'Familiarity with epoxy and thermoplastic application equipment',
      'Ability to read and interpret AutoCAD layout drawings',
      'Willingness to travel and work on-site 5 days a week',
    ],
  },
  {
    title: 'CAD & Layout Design Engineer',
    department: 'Design',
    location: 'Hyderabad (HQ)',
    type: 'Full-Time',
    experience: '2–5 years',
    desc: 'Create precise, code-compliant parking layout drawings using AutoCAD, optimising bay count and traffic flow for a diverse portfolio of commercial, residential, and industrial clients.',
    responsibilities: [
      'Develop parking layout drawings from site survey data in AutoCAD 2D and 3D',
      'Optimise bay configurations for maximum capacity within code constraints',
      'Prepare drawing packages for client approval and construction handover',
      'Coordinate with Project Managers to address site-specific design queries',
      "Maintain the company's drawing library and revision management system",
    ],
    requirements: [
      'B.E./B.Tech or Diploma in Civil Engineering or Architecture',
      'Expert-level proficiency in AutoCAD (2D mandatory; 3D preferred)',
      'Knowledge of NBC 2016 parking and accessibility codes',
      'Experience with Revit or SketchUp is a strong advantage',
      'Portfolio of completed layout drawings required at interview stage',
    ],
  },
  {
    title: 'Business Development Executive',
    department: 'Sales & BD',
    location: 'Hyderabad / Chennai',
    type: 'Full-Time',
    experience: '3–6 years',
    desc: "Grow DCS's client base by identifying and converting new business opportunities in the commercial, industrial, and residential sectors across South India.",
    responsibilities: [
      'Identify and prospect new clients in real estate, infrastructure, and industrial segments',
      'Conduct site visits, present DCS service proposals, and negotiate contracts',
      'Maintain a CRM pipeline with weekly forecasting updates',
      'Collaborate with Design and Operations to prepare accurate technical proposals',
      'Achieve and exceed quarterly revenue targets agreed with the sales director',
    ],
    requirements: [
      "Bachelor's degree in any discipline; MBA preferred but not mandatory",
      '3+ years of B2B sales experience — construction, facility management, or real estate preferred',
      'Existing network in Hyderabad or Chennai real estate / industrial sectors is a strong plus',
      'Excellent presentation and negotiation skills',
      'Self-motivated; comfortable with extensive client-facing travel',
    ],
  },
  {
    title: 'ParkOS Implementation Specialist',
    department: 'Technology',
    location: 'Hyderabad / Remote',
    type: 'Full-Time',
    experience: '2–4 years',
    desc: "Deploy, configure, and support DCS's proprietary ParkOS parking management platform at client sites, acting as the primary technical point of contact post-handover.",
    responsibilities: [
      'Configure ParkOS tariff rules, user roles, and ANPR camera integrations for each new client',
      'Conduct on-site training sessions for facility managers and security staff',
      'Troubleshoot hardware (barriers, sensors, cameras) and software issues remotely and on-site',
      'Document client configurations and maintain up-to-date SLA logs',
      'Gather feature feedback and relay structured product improvement requests to the dev team',
    ],
    requirements: [
      'B.Tech in Computer Science, IT, or Electronics and Communication',
      '2+ years in software implementation, technical support, or IT infrastructure',
      'Experience with IP camera systems, networking basics, and SQL queries',
      'Strong client-facing communication — you will represent DCS at the technology layer',
      'Willingness to travel to client sites across South India (30% travel)',
    ],
  },
]

const perks = [
  { icon: TrendingUp, title: 'Fast-Track Growth',    desc: 'Our rapid expansion means real promotion opportunities — not years of waiting. We prefer to promote from within.' },
  { icon: Zap,        title: 'Ownership Culture',    desc: 'Every team member owns a piece of their deliverable. No micromanagement — we hire adults and trust them.' },
  { icon: Heart,      title: 'Wellbeing First',      desc: 'Comprehensive health insurance for you and your family, flexible hours, and an annual wellness allowance.' },
  { icon: Users,      title: 'Collaborative Team',   desc: 'A diverse team of engineers, designers, technologists, and business builders who genuinely enjoy working together.' },
]

export default function Careers() {
  const [selected, setSelected] = useState<Job | null>(null)

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
            Join the Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            Build the Future of<br />
            <span className="text-dcs-red">Parking Infrastructure</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            We're a team of 80 engineers, designers, technologists, and builders on a mission to transform
            the way South India parks. If you do great work and want it to matter, you'll fit right in.
          </motion.p>
        </div>
      </section>

      {/* ── Culture / Perks ── */}
      <section className="bg-dcs-navy border-y border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Life at DCS"
            title="Why People Choose to Build Here"
            subtitle="We don't just offer jobs. We offer ownership, growth, and the satisfaction of seeing your work in 1,000+ locations across South India."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-7 group"
              >
                <div className="w-12 h-12 rounded-xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center mb-5 group-hover:bg-dcs-red/20 transition-colors">
                  <perk.icon size={20} className="text-dcs-red" />
                </div>
                <h3 className="font-outfit font-bold text-lg text-white mb-2">{perk.title}</h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Open Roles"
            title={`${jobs.length} Open Positions`}
            subtitle="Can't find the perfect role? Email your CV to careers@dcshyd.com and we'll reach out when something fits."
          />
          <div className="mt-10 space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelected(job)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-outfit font-bold text-xl text-white mb-2 group-hover:text-dcs-red transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center space-x-1 text-gray-400 font-inter text-xs">
                        <Briefcase size={12} />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-gray-400 font-inter text-xs">
                        <MapPin size={12} />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-gray-400 font-inter text-xs">
                        <Clock size={12} />
                        <span>{job.type}</span>
                      </span>
                      <span className="text-gray-400 font-inter text-xs border border-white/10 px-2 py-0.5 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 bg-dcs-red/10 hover:bg-dcs-red border border-dcs-red/30 hover:border-dcs-red text-dcs-red hover:text-white px-5 py-2.5 rounded-xl font-inter font-semibold text-sm transition-all duration-200 shrink-0">
                    <span>View Role</span>
                    <ArrowRight size={14} />
                  </button>
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
            <h2 className="font-outfit font-black text-4xl text-white mb-4">Don't See Your Role?</h2>
            <p className="text-gray-400 font-inter text-lg mb-8">
              We grow fast. Send your CV and portfolio to{' '}
              <a href="mailto:careers@dcshyd.com" className="text-dcs-red hover:underline">careers@dcshyd.com</a>
              {' '}and we'll be in touch.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-10 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-dcs-red/30"
            >
              <span>Get in Touch</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Job Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-dcs-navy-light border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-dcs-red font-inter text-xs font-semibold uppercase tracking-widest">{selected.department}</span>
                  <h2 className="font-outfit font-black text-2xl text-white mt-1">{selected.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-gray-400 font-inter text-xs">{selected.location}</span>
                    <span className="text-gray-600">·</span>
                    <span className="text-gray-400 font-inter text-xs">{selected.type}</span>
                    <span className="text-gray-600">·</span>
                    <span className="text-gray-400 font-inter text-xs">{selected.experience}</span>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white p-1 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <p className="text-gray-300 font-inter text-sm leading-relaxed mb-6">{selected.desc}</p>

              <h4 className="font-outfit font-bold text-white mb-3">Key Responsibilities</h4>
              <ul className="space-y-2 mb-6">
                {selected.responsibilities.map((r) => (
                  <li key={r} className="flex items-start space-x-3">
                    <CheckCircle size={14} className="text-dcs-red mt-0.5 shrink-0" />
                    <span className="text-gray-400 font-inter text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-outfit font-bold text-white mb-3">Requirements</h4>
              <ul className="space-y-2 mb-8">
                {selected.requirements.map((r) => (
                  <li key={r} className="flex items-start space-x-3">
                    <CheckCircle size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400 font-inter text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:careers@dcshyd.com?subject=Application: ${selected.title}`}
                className="flex items-center justify-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark px-8 py-4 rounded-xl font-inter font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-dcs-red/30 w-full"
              >
                <span>Apply for This Role</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
