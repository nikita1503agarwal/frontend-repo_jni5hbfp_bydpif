import { Sparkles, Workflow, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Generative brains',
    desc: 'Plug in top models and tools. Give your agent memory, goals, and constraints.'
  },
  {
    icon: Workflow,
    title: 'Visual builder',
    desc: 'Drag-and-drop canvas to design flows, actions, and handoffs.'
  },
  {
    icon: Shield,
    title: 'Safe-by-default',
    desc: 'Granular controls, guardrails, and audit logs for compliance.'
  },
  {
    icon: Zap,
    title: 'Deploy anywhere',
    desc: 'Ship to webhooks, CRMs, chat, voice, and internal tools in one click.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to automate</h2>
          <p className="mt-3 text-gray-600">A focused toolkit to design, secure, and scale autonomous workflows.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
