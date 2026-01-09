import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '4rem', background: '#111', color: '#fff' }}>
      <h2>MiPortafolio</h2>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff' }}>Sobre mí</Link></li>
        <li><Link to="/projects" style={{ color: '#fff' }}>Proyectos</Link></li>
        <li><Link to="/contact" style={{ color: '#fff' }}>Contacto</Link></li>
      </ul>
    </nav>
  )
}
