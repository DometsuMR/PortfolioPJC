export default function ProjectsPage() {
  const proyectos = [
    { name: "Proyecto 1", desc: "Descripción del proyecto 1", link: "#" },
    { name: "Proyecto 2", desc: "Descripción del proyecto 2", link: "#" }
  ]

  return (
    <div style={{ padding: '4rem' }}>
      <h2>Proyectos</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {proyectos.map((p, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">Ver proyecto</a>
          </div>
        ))}
      </div>
    </div>
  )
}
