import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400" />
            <span className="text-xl font-semibold tracking-tight text-slate-900">Vibe Studio</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Features</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">About</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">Contact</a>
            <a href="#get-started" className="block rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-slate-800">Get Started</a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
