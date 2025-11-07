import { Rocket } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Live coding with AI
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Build beautiful apps with AI superpowers
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Design, code, and iterate faster. Describe what you want and watch it come to life instantly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
                <Rocket className="h-5 w-5" />
                Start building
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50">
                See features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-500/10 via-sky-400/10 to-transparent" />
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-24 rounded-lg bg-slate-100" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
