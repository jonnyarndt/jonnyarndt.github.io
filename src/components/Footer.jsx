export default function Footer({ name, githubUrl, linkedInUrl }) {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <p className="text-slate-400 text-sm text-center">
          The best way to reach me is via{' '}
          {linkedInUrl && (
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"
               className="text-cyan-400 hover:text-cyan-300 transition-colors">
              LinkedIn
            </a>
          )}{linkedInUrl && githubUrl && ' or through '}{githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className="text-cyan-400 hover:text-cyan-300 transition-colors">
              GitHub
            </a>
          )}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-mono">
            {name} — built with React &amp; Vite
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#top"
              className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
            >
              Back to top ↑
            </a>
            {linkedInUrl && (
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                LinkedIn
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
