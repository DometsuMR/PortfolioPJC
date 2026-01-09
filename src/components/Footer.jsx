export default function Footer() {
  return (
    <footer style={{padding:'1rem 4rem 1rem 4rem', textAlign:'center', background:'#111', color:'#fff'}}>
      <p>© {new Date().getFullYear()} Pau Juárez Carrillo | <a href="https://github.com/DometsuMR" target="_blank">GitHub</a> | Todos los derechos reservados.</p>
    {/*
      <div style={{marginTop:'4rem', display:'flex', justifyContent:'center', gap:'1.5rem'}}>
        <a href="https://github.com/DometsuMR" target="_blank" rel="noreferrer" style={{color:'#61dafb'}}>GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" style={{color:'#61dafb'}}>LinkedIn</a>
        <a href="mailto:paujuarezc@gmail.com" style={{color:'#61dafb'}}>Email</a>
      </div>
    */}
    </footer>
  )
}
