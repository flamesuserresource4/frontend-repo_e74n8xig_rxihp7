import Layout from '../components/Layout'

const items = [
  { title: 'Neural Pathways Visualizer', desc: 'An interactive model exploring brain connectivity.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Cognitive Load Dashboard', desc: 'UI study on attention and memory in learning tasks.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AI Tutor', desc: 'Conversational guidance for micro-learning modules.', img: 'https://images.unsplash.com/photo-1555252586-d79abf0fa440?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-6">Portfolio</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <a key={idx} href="#" title="in progress" className="group block rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition">
              <div className="aspect-video overflow-hidden">
                <img src={it.img} alt="Illustration" className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{it.title}</div>
                <div className="text-sm opacity-80">{it.desc}</div>
                <div className="text-xs mt-1 opacity-70">Link: in progress</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  )
}
