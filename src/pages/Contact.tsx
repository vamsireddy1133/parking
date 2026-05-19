import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight, ChevronRight } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'
import SectionHeader from '../components/ui/SectionHeader'

// Replace with your site key from https://www.google.com/recaptcha/admin/create
const RECAPTCHA_SITE_KEY = '6LcywewsAAAAAGcRW1PMY9P_5WGbv4BemjgZBwY9'

type Step = 1 | 2 | 3

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  projectType: string
  bays: string
  city: string
  message: string
}

const services = [
  'Parking Markings',
  'Layout Design',
  'Signage Boards',
  'BMS Management Software',
  'Full Turnkey Solution (All 4)',
  'Consultation / Site Assessment Only',
]

const projectTypes = [
  'Commercial (Mall / Office / Hotel)',
  'Industrial (Factory / Warehouse)',
  'Residential (Apartment / Gated Community)',
  'Healthcare (Hospital / Clinic)',
  'Government / Municipal',
  'Educational Institution',
  'Other',
]

const offices = [
  {
    city: 'Hyderabad',
    label: 'Headquarters',
    address: '6-144, Durga Estates, Road No. 3, Deepthisri Nagar, Madinaguda, Hyderabad — 500049',
    phone: '+91 80080 69 888',
    email: 'sales@dcshyd.com',
    hours: 'Mon–Sat, 9 AM – 6 PM',
  },
]

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="group/field">
      <label className="block text-gray-300 font-inter text-xs font-semibold uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-[#0d1b2e] border border-white/20 hover:border-dcs-red/60 focus:border-dcs-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.15)] rounded-xl px-4 py-3.5 text-white font-inter text-sm placeholder-gray-500 outline-none transition-all duration-200 autofill:bg-[#0d1b2e]"
      />
    </div>
  )
}

function Select({ label, options, ...props }: { label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="block text-gray-300 font-inter text-xs font-semibold uppercase tracking-widest mb-2">
        {label}
      </label>
      <select
        {...props}
        className="w-full bg-[#0d1b2e] border border-white/20 hover:border-dcs-red/60 focus:border-dcs-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.15)] rounded-xl px-4 py-3.5 text-white font-inter text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
      >
        <option value="" className="bg-dcs-navy-dark">Select an option…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-dcs-navy-dark">{o}</option>
        ))}
      </select>
    </div>
  )
}

export default function Contact() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '',
    service: '', projectType: '', bays: '', city: '', message: '',
  })

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const canProceed1 = form.name && form.email && form.phone
  const canProceed2 = form.service && form.projectType

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaVerified) return
    setSubmitted(true)
  }

  const stepLabels = ['Your Details', 'Project Info', 'Your Message']

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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit font-black text-5xl sm:text-6xl text-white leading-tight mb-6"
          >
            Let's Discuss<br />
            <span className="text-dcs-red">Your Project</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-400 text-lg leading-relaxed"
          >
            Fill in the form below and a DCS project specialist will contact you within 4 working hours
            with an initial consultation and a no-obligation site visit offer.
          </motion.p>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Multi-Step Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-dcs-navy-light border border-dcs-red/20 rounded-3xl p-8 sm:p-10 shadow-xl shadow-dcs-red/5 relative overflow-hidden"
            >
              {/* Top red accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dcs-red via-orange-400 to-dcs-red rounded-t-3xl" />
              {!submitted ? (
                <>
                  {/* Progress */}
                  <div className="flex items-center mb-10 mt-4">
                    {([1, 2, 3] as Step[]).map((s, i) => (
                      <div key={s} className="flex items-center flex-1 last:flex-none">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full font-outfit font-bold text-sm shrink-0 transition-all duration-300 ${
                          step > s
                            ? 'bg-dcs-red text-white shadow-lg shadow-dcs-red/40'
                            : step === s
                            ? 'bg-dcs-red text-white shadow-lg shadow-dcs-red/40 ring-4 ring-dcs-red/20'
                            : 'bg-white/8 border border-white/20 text-gray-400'
                        }`}>
                          {step > s ? <CheckCircle size={16} /> : s}
                        </div>
                        <div className="hidden sm:block ml-2.5 mr-1">
                          <p className={`font-inter text-xs font-semibold transition-colors ${step >= s ? 'text-white' : 'text-gray-500'}`}>
                            {stepLabels[i]}
                          </p>
                        </div>
                        {i < 2 && (
                          <div className={`flex-1 h-0.5 mx-3 rounded-full transition-all duration-500 ${
                            step > s ? 'bg-dcs-red' : 'bg-white/10'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">

                      {/* Step 1 */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <h3 className="font-outfit font-bold text-2xl text-white mb-6">Tell us about yourself</h3>
                          <Input label="Full Name *" placeholder="e.g. Ravi Shankar" value={form.name} onChange={set('name')} required />
                          <Input label="Email Address *" type="email" placeholder="ravi@company.com" value={form.email} onChange={set('email')} required />
                          <Input label="Mobile Number *" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} required />
                          <Input label="Company / Organisation" placeholder="DLF Ltd., GHMC, etc." value={form.company} onChange={set('company')} />
                          <button
                            type="button"
                            disabled={!canProceed1}
                            onClick={() => setStep(2)}
                            className="w-full flex items-center justify-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-inter font-bold text-white text-base transition-all duration-300 hover:shadow-xl hover:shadow-dcs-red/40 hover:-translate-y-0.5 mt-2 shadow-lg shadow-dcs-red/20"
                          >
                            <span>Continue</span>
                            <ChevronRight size={18} />
                          </button>
                        </motion.div>
                      )}

                      {/* Step 2 */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <h3 className="font-outfit font-bold text-2xl text-white mb-6">Tell us about your project</h3>
                          <Select label="Service Required *" options={services} value={form.service} onChange={set('service')} required />
                          <Select label="Project Type *" options={projectTypes} value={form.projectType} onChange={set('projectType')} required />
                          <Input label="Approximate Number of Bays" type="number" placeholder="e.g. 250" value={form.bays} onChange={set('bays')} />
                          <Input label="Project City" placeholder="e.g. Hyderabad" value={form.city} onChange={set('city')} />
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex-1 border border-white/20 hover:border-dcs-red/50 hover:text-white px-6 py-4 rounded-xl font-inter font-semibold text-gray-400 text-sm transition-all duration-300"
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              disabled={!canProceed2}
                              onClick={() => setStep(3)}
                              className="flex-[2] flex items-center justify-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-inter font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-dcs-red/40 hover:-translate-y-0.5 shadow-lg shadow-dcs-red/20"
                            >
                              <span>Continue</span>
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3 */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-5"
                        >
                          <h3 className="font-outfit font-bold text-2xl text-white mb-6">Anything else to share?</h3>
                          <div>
                            <label className="block text-gray-300 font-inter text-xs font-semibold uppercase tracking-widest mb-2">
                              Your Message
                            </label>
                            <textarea
                              rows={6}
                              placeholder="Describe your site, timeline, specific challenges, or any questions you have…"
                              value={form.message}
                              onChange={set('message')}
                              className="w-full bg-[#0d1b2e] border border-white/20 hover:border-dcs-red/60 focus:border-dcs-red focus:shadow-[0_0_0_3px_rgba(227,30,36,0.15)] rounded-xl px-4 py-3.5 text-white font-inter text-sm placeholder-gray-500 outline-none transition-all duration-200 resize-none"
                            />
                          </div>
                          <p className="text-gray-500 font-inter text-xs">
                            By submitting, you agree to be contacted by a DCS representative. We never share your data with third parties.
                          </p>
                          <div className="flex justify-start">
                            <ReCAPTCHA
                              ref={recaptchaRef}
                              sitekey={RECAPTCHA_SITE_KEY}
                              theme="dark"
                              onChange={(token) => setCaptchaVerified(!!token)}
                              onExpired={() => setCaptchaVerified(false)}
                            />
                          </div>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="flex-1 border border-white/20 hover:border-dcs-red/50 hover:text-white px-6 py-4 rounded-xl font-inter font-semibold text-gray-400 text-sm transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={!captchaVerified}
                              className="flex-[2] flex items-center justify-center space-x-2 bg-dcs-red hover:bg-dcs-red-dark disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-inter font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-dcs-red/40 hover:-translate-y-0.5 shadow-lg shadow-dcs-red/20"
                            >
                              <span>Send Enquiry</span>
                              <ArrowRight size={16} />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </>
              ) : (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-emerald-400" />
                  </div>
                  <h3 className="font-outfit font-black text-3xl text-white mb-3">Enquiry Received!</h3>
                  <p className="text-gray-400 font-inter text-base leading-relaxed mb-2">
                    Thank you, <span className="text-white font-semibold">{form.name}</span>. Your project enquiry has been submitted successfully.
                  </p>
                  <p className="text-gray-500 font-inter text-sm">
                    A DCS project specialist will contact you at <span className="text-gray-300">{form.email}</span> within 4 working hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* ── Contact Info Sidebar ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Quick contact */}
              <div className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6 space-y-5">
                <h3 className="font-outfit font-bold text-lg text-white">Direct Contact</h3>
                {[
                  { icon: Phone, label: 'Call Us',   value: '+91 80080 69 888', href: 'tel:+918008069888' },
                  { icon: Mail,  label: 'Email Us',  value: 'sales@dcshyd.com', href: 'mailto:sales@dcshyd.com' },
                  { icon: Clock, label: 'Hours',     value: 'Mon–Sat, 9 AM – 6 PM', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-dcs-red/10 border border-dcs-red/20 flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-dcs-red" />
                    </div>
                    <div>
                      <p className="text-gray-500 font-inter text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white font-inter text-sm hover:text-dcs-red transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-white font-inter text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-dcs-navy-light border border-white/8 rounded-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-dcs-navy to-dcs-navy-dark flex items-center justify-center relative">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative text-center">
                    <MapPin size={32} className="text-dcs-red mx-auto mb-2" />
                    <p className="text-gray-400 font-inter text-sm">Deepthisri Nagar, Madinaguda</p>
                    <p className="text-gray-500 font-inter text-xs">Hyderabad, Telangana 500049</p>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="text-gray-600 font-inter text-xs italic">Interactive map — Google Maps embed</span>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 border border-white/10 hover:border-dcs-red hover:text-dcs-red px-4 py-2.5 rounded-xl font-inter text-sm text-gray-300 transition-all duration-200 w-full"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Other offices */}
              <div className="space-y-3">
                {offices.slice(1).map((office) => (
                  <div key={office.city} className="bg-dcs-navy-light border border-white/8 rounded-2xl p-5">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin size={13} className="text-dcs-red" />
                      <p className="font-outfit font-bold text-white text-sm">{office.city}</p>
                      <span className="text-gray-600 text-xs">· {office.label}</span>
                    </div>
                    <p className="text-gray-500 font-inter text-xs leading-relaxed mb-1">{office.address}</p>
                    <a href={`tel:${office.phone.replace(/\s/g,'')}`} className="text-gray-400 hover:text-dcs-red font-inter text-xs transition-colors">
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-dcs-navy border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge="FAQ" title="Common Questions" subtitle="Quick answers before you reach out." />
          <div className="mt-10 space-y-4">
            {[
              { q: 'How quickly can you mobilise a team to our site?', a: 'Once a purchase order is signed and site access is confirmed, our crew can mobilise within 48–72 hours for projects in Hyderabad and within 5 working days for other cities.' },
              { q: 'Do you handle projects outside South India?', a: 'Currently, our primary operational footprint covers Telangana, Andhra Pradesh, Karnataka, and Tamil Nadu. We evaluate outstation projects case-by-case based on scale and logistics feasibility.' },
              { q: 'What is the typical project timeline for a 500-bay facility?', a: 'A standard 500-bay epoxy marking and signage project takes 7–12 working days including surface preparation, application, curing, and final inspection. BMS deployment runs concurrently and is typically ready for go-live by day 10.' },
              { q: 'Do your markings hold up during the Hyderabad monsoon?', a: 'Yes. Our IS:1580-certified epoxy systems are tested for water resistance and adhesion under prolonged moisture exposure. We also apply a UV-stable topcoat that prevents the colour bleaching common with cheaper acrylic paints.' },
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-dcs-navy-light border border-white/8 rounded-2xl p-6"
              >
                <h4 className="font-outfit font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
