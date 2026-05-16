import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[200] bg-dcs-navy-dark flex flex-col items-center justify-center"
    >
      {/* Logo with spinning ring */}
      <div className="relative mb-8">
        {/* Outer spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-4 rounded-full border-2 border-transparent border-t-dcs-red border-r-dcs-red/20"
        />
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="DCS Parking Solutions"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-16 w-auto object-contain relative z-10"
        />
      </div>

      {/* Loading label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex items-center space-x-1.5"
      >
        <span className="w-2 h-2 rounded-full bg-dcs-red dot-1" />
        <span className="w-2 h-2 rounded-full bg-dcs-red dot-2" />
        <span className="w-2 h-2 rounded-full bg-dcs-red dot-3" />
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-dcs-red to-orange-400"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
