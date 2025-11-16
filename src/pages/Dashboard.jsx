import { useEffect, useState } from 'react'
import { Plus, RefreshCw, Activity, HeartPulse } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchDevices = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/devices`)
      if (!res.ok) throw new Error('Failed to load devices')
      const data = await res.json()
      setDevices(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDevices()
  }, [])

  const addSampleDevice = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/devices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Dozemate Band', manufacturer: 'Dozemate', model: 'DM-1' })
      })
      if (!res.ok) throw new Error('Failed to add device')
      await fetchDevices()
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white pt-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex gap-3">
            <button onClick={fetchDevices} className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-4 py-2">
              <RefreshCw size={16} /> Refresh
            </button>
            <button onClick={addSampleDevice} className="inline-flex items-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-600 px-4 py-2">
              <Plus size={16} /> Add Device
            </button>
          </div>
        </div>

        {error && <div className="mb-6 rounded-lg bg-red-500/20 border border-red-500/30 p-4 text-red-200">{error}</div>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((d) => (
            <div key={d.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{d.name}</h3>
                <HeartPulse className="text-sky-400" />
              </div>
              <p className="text-white/70 text-sm mt-1">{d.manufacturer || '—'} {d.model ? `• ${d.model}` : ''}</p>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/70">
                <Activity className="text-white/50" size={16} />
                Status: <span className="text-white">{d.status || 'active'}</span>
              </div>
            </div>
          ))}
          {devices.length === 0 && !loading && (
            <div className="col-span-full text-center text-white/70">No devices yet. Add one to get started.</div>
          )}
        </div>
      </div>
    </div>
  )
}
