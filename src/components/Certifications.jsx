export default function Certifications({ certifications, education }) {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subheading">// credentials</p>
      <h2 className="section-heading">Certifications &amp; Education</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {/* Certifications */}
        <div>
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map(({ name, issuer, icon, certificateId, date, url }) => (
              <div key={name} className="card flex items-start gap-4">
                <span className="text-xl mt-0.5" aria-hidden="true">{icon}</span>
                <div>
                  <p className="text-slate-100 font-medium">{name}</p>
                  <p className="text-slate-500 text-sm">
                    {url ? (
                      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
                        {issuer}
                      </a>
                    ) : (
                      issuer
                    )}
                  </p>
                  {(certificateId || date) && (
                    <p className="text-slate-600 text-xs mt-1">
                      {certificateId && <span>ID: {certificateId}</span>}
                      {certificateId && date && <span> · </span>}
                      {date && <span>{date}</span>}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
            Education
          </h3>
          <div className="space-y-3">
            {education.map(({ institution, area, icon }) => (
              <div key={institution} className="card flex items-start gap-4">
                <span className="text-xl mt-0.5" aria-hidden="true">{icon}</span>
                <div>
                  <p className="text-slate-100 font-medium">{institution}</p>
                  {area && (
                    <p className="text-slate-500 text-sm">{area}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
