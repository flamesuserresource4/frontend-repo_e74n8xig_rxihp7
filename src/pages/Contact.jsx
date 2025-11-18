import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-6">Contact</h1>
        <form onSubmit={(e)=> e.preventDefault()} className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full bg-slate-900/60 border border-white/10 rounded px-3 py-2" placeholder="in progress" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full bg-slate-900/60 border border-white/10 rounded px-3 py-2" placeholder="in progress" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full bg-slate-900/60 border border-white/10 rounded px-3 py-2" rows="5" placeholder="in progress" />
          </div>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Send (in progress)</button>
        </form>
        <div className="mt-6 text-sm text-blue-300/80">Direct email: in progress</div>
      </section>
    </Layout>
  )
}
