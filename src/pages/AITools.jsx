import Layout from '../components/Layout'
import AIChat from '../components/AIChat'

export default function AITools() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-6">AI & Tools</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <AIChat />
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Design System</h3>
              <p className="text-blue-100/80">in progress</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Data & Analytics</h3>
              <p className="text-blue-100/80">in progress</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold mb-2">Integrations</h3>
              <a href="#" title="in progress" className="text-blue-300 underline">in progress</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
