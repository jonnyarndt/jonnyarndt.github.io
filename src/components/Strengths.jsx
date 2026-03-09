export default function Strengths({ items }) {
  return (
    <section id="strengths" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">// core competencies</p>
      <h2 className="section-heading">Strengths</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {items.map(({ title, detail }) => (
          <div key={title} className="card">
            <div className="w-8 h-0.5 bg-cyan-500 rounded mb-4" />
            <h3 className="text-slate-100 font-semibold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
