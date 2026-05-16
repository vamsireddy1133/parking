import { motion } from 'framer-motion'

interface Props {
  badge: string
  title: string
  subtitle: string
  align?: 'center' | 'left'
}

export default function SectionHeader({ badge, title, subtitle, align = 'center' }: Props) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isCenter ? 'items-center text-center max-w-3xl mx-auto' : 'items-start text-left max-w-2xl'}`}
    >
      <span className="inline-flex items-center bg-dcs-red/10 border border-dcs-red/25 text-dcs-red text-xs font-inter font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="font-outfit font-black text-3xl sm:text-4xl text-white mb-4 leading-tight">
        {title}
      </h2>
      <p className="font-inter text-gray-400 text-lg leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  )
}
