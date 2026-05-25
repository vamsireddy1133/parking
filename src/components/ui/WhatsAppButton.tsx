import { motion } from 'framer-motion'

const WA_NUMBER = '918008069888'
const WA_MESSAGE = encodeURIComponent("Hi, I'd like to know more about DCS parking solutions.")

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
      style={{ background: '#25D366' }}
    >
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.469.64 4.786 1.76 6.8L2 30l7.4-1.74A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.88-1.6l-.42-.25-4.39 1.03 1.05-4.28-.28-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.6 9.6 4.4 16 4.4S27.6 9.6 27.6 16 22.4 27.6 16 27.6zm6.36-8.68c-.35-.17-2.06-1.02-2.38-1.13-.32-.12-.56-.17-.79.17-.23.35-.9 1.13-1.1 1.37-.2.23-.41.26-.76.09-.35-.17-1.48-.55-2.82-1.74-1.04-.93-1.74-2.07-1.95-2.42-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.62.17-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.17-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6h-.67c-.23 0-.61.09-.93.44-.32.35-1.22 1.19-1.22 2.9s1.25 3.37 1.42 3.6c.17.23 2.46 3.75 5.96 5.26.83.36 1.48.57 1.99.73.84.27 1.6.23 2.2.14.67-.1 2.06-.84 2.35-1.66.29-.81.29-1.51.2-1.66-.08-.14-.32-.23-.67-.4z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: '#25D366' }} />
    </motion.a>
  )
}
