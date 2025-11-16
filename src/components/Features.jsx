import { HeartPulse, Activity, CloudSun, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: HeartPulse,
    title: 'Heart Rate',
    desc: 'Continuous monitoring with min, max and averages across nights.'
  },
  {
    icon: Activity,
    title: 'Respiration',
    desc: 'Track breaths per minute and detect irregular patterns.'
  },
  {
    icon: CloudSun,
    title: 'Sleep Stages',
    desc: 'Visualize light, deep and REM to understand sleep quality.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    desc: 'Your data stays encrypted with you in control.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0f1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Designed for restful clarity</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <f.icon className="text-sky-400" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
