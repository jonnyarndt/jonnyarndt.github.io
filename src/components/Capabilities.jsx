export default function Capabilities({ items }) {
  return (
    <section id="capabilities" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">// what i do</p>
      <h2 className="section-heading">Capabilities</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon, title, description }) => (
          <div key={title} className="card group">
            <div className="text-2xl mb-3" aria-hidden="true">
              {icon}
            </div>
            <h3 className="text-slate-100 font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
