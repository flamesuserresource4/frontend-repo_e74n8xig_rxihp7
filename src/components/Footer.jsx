import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-blue-100">
        <div>
          <h4 className="text-white font-semibold mb-3">trainingpshyco</h4>
          <p className="text-sm opacity-80">Futuristic learning portfolio blending neuroscience and AI.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" title="in progress" className="hover:text-white">CV (in progress)</a></li>
            <li><a href="#" title="in progress" className="hover:text-white">Tutorials (in progress)</a></li>
            <li><a href="#" title="in progress" className="hover:text-white">Visual Assets (in progress)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Social</h4>
          <div className="flex gap-3">
            <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5"><Github className="w-5 h-5" /></a>
            <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5"><Linkedin className="w-5 h-5" /></a>
            <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5"><Twitter className="w-5 h-5" /></a>
            <a href="#" title="in progress" className="p-2 rounded hover:bg-white/5"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm opacity-80">Email: in progress</p>
          <p className="text-sm opacity-80">Phone: in progress</p>
        </div>
      </div>
      <div className="text-center text-blue-300/60 text-sm py-4 border-t border-white/10">© {new Date().getFullYear()} trainingpshyco. All rights reserved.</div>
    </footer>
  )
}
