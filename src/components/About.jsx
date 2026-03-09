export default function About({ paragraphs }) {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">// about me</p>
      <h2 className="section-heading">Who I Am</h2>

      <div className="mt-6 max-w-2xl space-y-4">
        {paragraphs.map((text, i) => (
          <p key={i} className="text-slate-400 leading-relaxed text-lg">
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
