import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 4rem 1rem 4rem', background: '#111', color: '#fff' }}>
      <h2>MiPortafolio</h2>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', alignItems: 'center', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>Sobre mí</Link></li>
        <li><Link to="/projects" style={{ color: '#fff' }}>Proyectos</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Contacto</Link></li>
      </ul>
    </nav>
  )
}