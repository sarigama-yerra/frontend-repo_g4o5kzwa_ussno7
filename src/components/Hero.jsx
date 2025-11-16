import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0f1a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">Healthcare • Sleep • AI Insights</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Dozemate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Sleep Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            Monitor heart rate, respiration, and sleep stages with a modern dashboard. Track trends, review history, and understand your nights.
          </p>
          <div className="flex gap-4">
            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-6 py-3 font-medium transition">
              Get Started <ArrowRight size={18} />
            </Link>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-6 py-3 font-medium transition">
              Learn More
            </a>
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
