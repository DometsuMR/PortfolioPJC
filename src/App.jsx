import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import './App.css'

function App() {
  return (
    <Router>
      <div id="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        {/* contenedor que crece para empujar el footer */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
