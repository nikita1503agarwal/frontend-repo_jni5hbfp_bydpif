import { useMemo } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const accent = useMemo(() => ({
    dot: '#7C3AED', // primary accent for the brand dot (violet)
    gradient: 'from-violet-600 via-fuchsia-500 to-amber-400',
  }), [])

  return (
    <header className="relative">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="text-2xl font-extrabold tracking-tight text-gray-900">
              SOFTI
              <span className="ml-0.5 align-super" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline">
                  <circle cx="6" cy="6" r="6" fill={accent.dot} />
                </svg>
              </span>
            </div>
            <span className={`absolute -inset-2 rounded-xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40 bg-gradient-to-r ${accent.gradient}`} />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#how" className="text-gray-600 hover:text-gray-900">How it works</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900">Sign in</a>
          <a href="#cta" className={`px-4 py-2 rounded-lg text-white bg-gradient-to-r ${accent.gradient} shadow-md hover:shadow-lg transition-shadow`}>Get started</a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-gray-200 text-gray-700" aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>

      <motion.div
        className="absolute inset-x-0 -top-8 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      />
    </header>
  )
}
