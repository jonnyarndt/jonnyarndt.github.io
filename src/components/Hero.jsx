export default function Hero({ name, title, tagline, githubUrl, linkedInUrl }) {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 max-w-5xl mx-auto"
    >
      {/* Subtle grid background accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2
                        w-[900px] h-[600px] rounded-full
                        bg-cyan-500/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-2xl">
        <p className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-6">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-100 leading-tight mb-4">
          {name}
        </h1>

        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-400 mb-6">
          {title}
        </h2>

        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
          {tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#capabilities"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold
                       rounded-lg transition-colors duration-200"
          >
            See My Work
          </a>
          {linkedInUrl && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500/60 text-slate-300
                         hover:text-cyan-300 font-medium rounded-lg transition-colors duration-200
                         flex items-center gap-2"
            >
              <LinkedInIcon className="w-5 h-5" />
              LinkedIn
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500/60 text-slate-300
                         hover:text-cyan-300 font-medium rounded-lg transition-colors duration-200
                         flex items-center gap-2"
            >
              <GitHubIcon className="w-5 h-5" />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function LinkedInIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.977 1.977 0 01-1.972-1.979 1.977 1.977 0 011.972-1.977 1.977 1.977 0 011.972 1.977 1.977 1.977 0 01-1.972 1.979zm1.757 13.019H3.58V9h3.514v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GitHubIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
