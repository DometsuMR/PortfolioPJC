export default function Footer() {
  return (
    <footer style={{padding:'2rem', textAlign:'center', background:'#111', color:'#fff'}}>
      <p>© {new Date().getFullYear()} Pau Juárez Carrillo. Todos los derechos reservados.</p>
      <div style={{marginTop:'4rem', display:'flex', justifyContent:'center', gap:'1.5rem'}}>
        <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer" style={{color:'#61dafb'}}>GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" style={{color:'#61dafb'}}>LinkedIn</a>
        <a href="mailto:tuemail@gmail.com" style={{color:'#61dafb'}}>Email</a>
      </div>
    </footer>
  )
}
