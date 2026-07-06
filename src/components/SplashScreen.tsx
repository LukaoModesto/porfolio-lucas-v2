import { motion } from 'framer-motion'

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.16),_transparent_35%)]" />

      <motion.div
        className="relative flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src="/signature-logo.png"
          alt="Lucas Andrade"
          className="h-20 w-auto object-contain md:h-28"
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="mt-6 h-[2px] w-40 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        />
      </motion.div>
    </motion.div>
  )
}