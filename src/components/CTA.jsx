import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white">
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <motion.h3
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                Start building with SOFTI<span className="text-violet-600">.</span>
              </motion.h3>
              <p className="mt-3 text-gray-600">Launch your first automation in minutes with templates and guides.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 shadow-lg hover:shadow-xl transition-shadow">Create a workspace</a>
                <a href="#" className="px-6 py-3 rounded-xl border border-gray-200 hover:border-gray-300 text-gray-700 bg-white">Talk to sales</a>
              </div>
              <p className="mt-4 text-xs text-gray-500">No credit card required • 14-day free trial</p>
            </div>
            <div className="relative min-h-[260px] bg-gradient-to-br from-violet-600/10 via-fuchsia-500/10 to-amber-400/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
