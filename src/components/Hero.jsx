import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-tr from-violet-600/20 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Build Autonomous AI Agents. No Complexity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-gray-600"
          >
            Design, deploy, and automate AI-driven workflows in minutes. Drag, connect, and let your agents handle the rest.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 shadow-lg hover:shadow-xl transition-shadow">Start free</a>
            <a href="#features" className="px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 bg-white">See features</a>
          </motion.div>

          <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-600" /> Instant setup
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-fuchsia-500" /> No code
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Scales with you
            </span>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[640px] lg:h-[720px]">
          <div className="absolute inset-0 rounded-3xl border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.15)] bg-white/30 backdrop-blur-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
