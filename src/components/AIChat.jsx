import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'

// Simple AI-assisted feature: client-side mock that echoes with flair
export default function AIChat() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am your AI assistant. Ask me about trainingpshyco.' }
  ])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg = { role: 'user', content: input }
    const reply = {
      role: 'assistant',
      content: `AI (simulated): I received "${input}". A more advanced version will connect to a real API. (in progress)`
    }
    setMessages((prev) => [...prev, userMsg, reply])
    setInput('')
  }

  return (
    <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-blue-400" />
        <h3 className="text-white font-semibold">AI Chat (Assisted)</h3>
      </div>
      <div className="h-48 overflow-auto space-y-2 pr-1">
        {messages.map((m, i) => (
          <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block px-3 py-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/10 text-blue-100'}`}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-blue-100 placeholder-blue-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 flex items-center gap-2">
          <Send className="w-4 h-4" />
          Send
        </button>
      </form>
      <p className="mt-2 text-xs text-blue-300/70">Note: This is a local simulation. A real AI backend connection is in progress.</p>
    </div>
  )
}
