import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-4">About trainingpshyco</h1>
        <p className="text-blue-100/90 mb-4">trainingpshyco is a portfolio and learning hub focused on neuroscience-informed training experiences, visual storytelling, and responsible use of AI.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Background</h3>
            <p className="text-blue-100/80">in progress</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-2">CV</h3>
            <a href="#" title="in progress" className="text-blue-300 underline">in progress</a>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Tutorials</h3>
            <a href="#" title="in progress" className="text-blue-300 underline">in progress</a>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Visual Assets</h3>
            <a href="#" title="in progress" className="text-blue-300 underline">in progress</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
