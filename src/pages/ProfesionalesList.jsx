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

  return (
    <section className="seccion">
      <div className="contenedor">
        <h1>Profesionales</h1>
        {cargando && <p>Cargando…</p>}
        {error && <p>Error: {error.message}</p>}
        {!cargando && !error && (
          <ul className="lista-profesionales">
            {profesionales.map((p) => (
              <li key={p.id}>
                <strong>{p.nombre}</strong>
                <span>{p.especialidad?.nombre}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}