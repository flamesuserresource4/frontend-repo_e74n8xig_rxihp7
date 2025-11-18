import Layout from '../components/Layout'
import Hero from '../components/Hero'
import AIChat from '../components/AIChat'

export default function Home() {
  return (
    <Layout>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white mb-4">Welcome to trainingpshyco</h2>
          <p className="text-blue-100/90">Explore a portfolio at the intersection of neuroscience, education, and technology. Discover projects, tutorials, and responsible AI practices.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a href="#" title="in progress" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
              <div className="h-28 rounded-lg bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 mb-3" />
              <div className="font-medium text-white">Tutorials</div>
              <div className="text-sm opacity-80">in progress</div>
            </a>
            <a href="#" title="in progress" className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
              <div className="h-28 rounded-lg bg-gradient-to-tr from-purple-500/20 to-pink-400/20 mb-3" />
              <div className="font-medium text-white">Visual Assets</div>
              <div className="text-sm opacity-80">in progress</div>
            </a>
          </div>
        </div>
        <AIChat />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-white font-semibold mb-2">Short AI Statement</h3>
        <p className="text-sm text-blue-300/80">Some elements of this site were assisted by artificial intelligence: content drafting, UI layout suggestions, and the AI chat simulation. All critical decisions and final edits were made by the creator.</p>
      </section>
    </Layout>
  )
}
