function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-800 to-sky-700 p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to build your next idea?</h3>
              <p className="mt-2 text-white/80">Describe it in a sentence. We'll scaffold the backend, wire up the UI, and deploy a live preview.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="#" className="inline-flex items-center rounded-md bg-white px-5 py-3 font-medium text-slate-900 hover:bg-slate-100">Start free</a>
              <a href="#features" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
