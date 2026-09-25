import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} style={{ contain: 'layout' }} initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: 0.58, delay, ease: 'easeOut' }}>{children}</motion.div>
}