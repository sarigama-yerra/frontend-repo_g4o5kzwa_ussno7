import { useEffect, useState } from 'react'
import { CalendarClock } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function History() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchSessions = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/sessions`)
      const data = await res.json()
      setSessions(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchSessions() }, [])

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">History</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map(s => (
            <div key={s.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Sleep Session</h3>
                  <p className="text-white/70 text-sm mt-1">{new Date(s.started_at).toLocaleString()} → {new Date(s.ended_at).toLocaleTimeString()}</p>
                </div>
                <CalendarClock className="text-sky-400" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/5 rounded p-3">Avg HR: <span className="font-semibold">{s.avg_heart_rate ?? '—'}</span></div>
                <div className="bg-white/5 rounded p-3">Resp: <span className="font-semibold">{s.avg_respiration_rate ?? '—'}</span></div>
                <div className="bg-white/5 rounded p-3">Min HR: <span className="font-semibold">{s.min_heart_rate ?? '—'}</span></div>
                <div className="bg-white/5 rounded p-3">Max HR: <span className="font-semibold">{s.max_heart_rate ?? '—'}</span></div>
              </div>
            </div>
          ))}
        </div>
        {sessions.length === 0 && !loading && (
          <div className="text-center text-white/60">No history yet.</div>
        )}
      </div>
    </div>
  )
}
