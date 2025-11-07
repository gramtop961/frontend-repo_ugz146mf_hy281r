import { Code2, Zap, Shield, Wand2 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant setup',
    desc: 'Spin up a full-stack playground in seconds with batteries included.',
  },
  {
    icon: Code2,
    title: 'Developer-first',
    desc: 'Vite + React on the front, FastAPI on the back, Mongo for data.',
  },
  {
    icon: Shield,
    title: 'Safe & isolated',
    desc: 'Every project runs in a sandbox so you can experiment freely.',
  },
  {
    icon: Wand2,
    title: 'AI assistance',
    desc: 'Describe features in natural language and the agent builds them.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-2 text-slate-600">Modern tooling, elegant UI, and powerful automation out of the box.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
