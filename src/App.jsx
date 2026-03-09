import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Capabilities from './components/Capabilities.jsx'
import Skills from './components/Skills.jsx'
import Strengths from './components/Strengths.jsx'
import Certifications from './components/Certifications.jsx'
import Footer from './components/Footer.jsx'

import {
  hero,
  about,
  capabilities,
  skills,
  strengths,
  certifications,
  education,
} from './data/content.js'

export default function App() {
  return (
    <div className="relative">
      <Nav githubUrl={hero.githubUrl} linkedInUrl={hero.linkedInUrl} />

      <main>
        <Hero
          name={hero.name}
          title={hero.title}
          tagline={hero.tagline}
          githubUrl={hero.githubUrl}
          linkedInUrl={hero.linkedInUrl}
        />

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-slate-800/60" />
        </div>

        <About paragraphs={about.paragraphs} />

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-slate-800/60" />
        </div>

        <Capabilities items={capabilities} />

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-slate-800/60" />
        </div>

        <Skills items={skills} />

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-slate-800/60" />
        </div>

        <Strengths items={strengths} />

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-slate-800/60" />
        </div>

        <Certifications certifications={certifications} education={education} />
      </main>

      <Footer name={hero.name} githubUrl={hero.githubUrl} linkedInUrl={hero.linkedInUrl} />
    </div>
  )
}
