export default function Skills({ items }) {
  // Group skills by their group label
  const groups = items.reduce((acc, skill) => {
    if (!acc[skill.group]) acc[skill.group] = []
    acc[skill.group].push(skill.label)
    return acc
  }, {})

  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">// tools &amp; technologies</p>
      <h2 className="section-heading">Skills</h2>

      <div className="mt-8 space-y-8">
        {Object.entries(groups).map(([group, labels]) => (
          <div key={group}>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
              {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {labels.map((label) => (
                <span key={label} className="skill-badge">
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
