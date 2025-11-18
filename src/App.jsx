import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import AITools from './pages/AITools'
import AIPlan from './pages/AIPlan'
import Ethics from './pages/Ethics'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ai-tools" element={<AITools />} />
      <Route path="/ai-plan" element={<AIPlan />} />
      <Route path="/ethics" element={<Ethics />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
