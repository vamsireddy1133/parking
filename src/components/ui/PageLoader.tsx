import { motion } from 'framer-motion'
import { ParkingSquare } from 'lucide-react'

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[200] bg-dcs-navy-dark flex flex-col items-center justify-center"
    >
      {/* Outer spinning ring */}
      <div className="relative w-24 h-24 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-dcs-red border-r-dcs-red/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-transparent border-b-white/10"
        />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-12 h-12 rounded-xl bg-dcs-red/10 border border-dcs-red/30 flex items-center justify-center"
          >
            <ParkingSquare size={22} className="text-dcs-red" />
          </motion.div>
        </div>
      </div>

      {/* Brand name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center"
      >
        <p className="font-outfit font-black text-xl text-white tracking-tight">DCS Parking Solutions</p>
        <p className="font-inter text-xs text-gray-500 mt-1 uppercase tracking-widest">Loading…</p>
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
