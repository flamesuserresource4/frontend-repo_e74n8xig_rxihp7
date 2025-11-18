import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight drop-shadow">Neuro-driven training for a smarter you</h1>
          <p className="mt-6 text-blue-100 text-lg">trainingpshyco blends neuroscience, design, and AI to craft immersive learning experiences. Explore projects, tools, and a responsible approach to AI.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#in-progress" title="in progress" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Get Started</a>
            <a href="#in-progress" title="in progress" className="px-5 py-3 rounded-lg bg-white/10 text-blue-100 hover:bg-white/20 transition">View Portfolio</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900"></div>
    </section>
  )
}
