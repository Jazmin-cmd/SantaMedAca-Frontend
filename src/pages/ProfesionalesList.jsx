import { useEffect, useState } from 'react'
import { listarProfesionales } from '../api/profesionales'

export default function ProfesionalesList() {
  const [profesionales, setProfesionales] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    listarProfesionales()
      .then((r) => setProfesionales(r.data))
      .catch(setError)
      .finally(() => setCargando(false))
  }, [])

  if (cargando) return <p>Cargando…</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section>
      <h1>Profesionales</h1>
      <ul>
        {profesionales.map((p) => (
          <li key={p.id}>
            <strong>{p.nombre}</strong> — {p.especialidad?.nombre}
          </li>
        ))}
      </ul>
    </section>
  )
}